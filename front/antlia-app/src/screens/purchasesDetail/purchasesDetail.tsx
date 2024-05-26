import {
  Rubik_400Regular,
  Rubik_600SemiBold,
  Rubik_700Bold,
  useFonts,
} from "@expo-google-fonts/rubik";
import React, { Fragment, useEffect, useState } from "react";
import { Box, ScrollView, Text, View } from "native-base";
import { useRoute } from "@react-navigation/native";
import HeaderHome from "../../components/Header";
import apiService from "../../utils/api";
import TotalFooter from "../../components/TotalFooter/totalFooter";
import { Invoice, Transaction } from "../../@types/invoice";
import { formatDate } from "../../utils/date-helpers";
import { Dimensions, StyleSheet } from "react-native";
import TransactionItem from "../../components/TransactionItem/TransactionItem";
import OrdersList from "../../components/TransactionItem/OrdersList";
import {
  TransactionMap,
  mapTransactionsByMonth,
} from "../../utils/transaction";
import theme from "../../theme";

type RouteParam = {
  invoice: Invoice;
};

export default function PurchasesDetail() {
  const route = useRoute();
  const [transactions, setTransactions] = useState<TransactionMap>({});
  const [showSelected, setShowSelected] = useState<Transaction | null>(null);

  const [fontLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_600SemiBold,
    Rubik_700Bold,
  });

  const { invoice } = route.params as RouteParam;

  useEffect(() => {
    if (!invoice) return;

    apiService
      .get<Invoice>(`/billing/invoices/${invoice.id}`)
      .then((res) =>
        setTransactions(mapTransactionsByMonth(res.data.transactions))
      );
  }, [invoice]);

  if (!fontLoaded) {
    return null;
  }

  type TransactionColapseProps = {
    transaction: Transaction;
  };

  const TransactionColapse = ({ transaction }: TransactionColapseProps) => (
    <>
      <TransactionItem
        transaction={transaction}
        onPress={() =>
          setShowSelected((oldValue) =>
            oldValue?.id !== transaction.id ? transaction : null
          )
        }
        showOrders={showSelected?.id === transaction.id}
      />
      <OrdersList
        order_id={transaction.order_id}
        show={showSelected?.id === transaction.id}
      />
    </>
  );

  return (
    <>
      <View style={styles.container}>
        <HeaderHome />
        <Box flexDir="row" justifyContent="space-between" px={6} py={8}>
          <Text style={styles.title}>Resumo de compras</Text>
          <Text style={styles.end_at}>
            FECHA EM {formatDate(invoice.end_at)}
          </Text>
        </Box>
        <ScrollView flexGrow={1}>
          {Object.keys(transactions).map((key, i) => (
            <Fragment key={i}>
              <Text style={styles.month} px={6} py={4}>
                {key}
              </Text>
              {transactions[key].map((t) => (
                <TransactionColapse key={t.id} transaction={t} />
              ))}
            </Fragment>
          ))}
        </ScrollView>
        <TotalFooter invoices={[invoice]} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
    "align-items": "center",
    "justify-content": "center",
  },
  header: {
    grow: 1,
    backgroundColor: "blue",
    height: 100,
    "justify-content": "center",
  },
  title: {
    fontFamily: "Rubik_600SemiBold",
    fontSize: theme.size.font8
  },
  month: {
    fontFamily: "Rubik_700Bold",
  },
  end_at: {
    fontFamily: "Rubik_700Bold",
    color: "#502275",
  },
  footer: {
    grow: 1,
    height: 100,
    "justify-content": "center",
  },
});
