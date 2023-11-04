import {
  Rubik_400Regular,
  Rubik_600SemiBold,
  Rubik_700Bold,
  useFonts,
} from "@expo-google-fonts/rubik";
import {
  Badge,
  Box,
  HStack,
  Image,
  Pressable,
  Text,
  VStack,
} from "native-base";
import { BarChart } from "react-native-chart-kit";
import theme from "../../theme/index";
import { Dimensions } from "react-native";
import Graph from "../Graph/Graph";
import { useEffect } from "react";
import { getDate, getMonth } from "../../utils/date-helpers";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/Stack";

type Invoice = {
  id: string;
  customer_id: string;
  bill_status: string;
  pay_status: "PAID" | "PENDING";
  start_at: string;
  end_at: string;
  total_paid: number;
  total: number;
};

type IProps = {
  invoices: Invoice[];
};

const PayStatus = {
  PAID: "PAGO",
  PENDING: "PENDENTE",
};

const DetailsMoth = ({ invoices }: IProps) => {
  const navigation = useNavigation<StackTypes>();
  const [fontLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_600SemiBold,
    Rubik_700Bold,
  });

  function getFechamento(invoice: Invoice) {
    if (invoice.bill_status === "CLOSED") {
      const paymentColor = invoice.pay_status === "PAID" ? "green" : "red";
      return (
        <Text style={{ fontFamily: theme.fonts.regular, color: paymentColor }}>
          {PayStatus[invoice.pay_status]}
        </Text>
      );
    }

    return (
      <Text style={{ fontFamily: theme.fonts.regular }}>
        FECHA EM {getDate(invoice.end_at)}
      </Text>
    );
  }

  return (
    <VStack>
      {invoices.map((invoice) => (
        <Pressable
          key={invoice.id}
          onPress={() => {
            navigation.navigate("PurchasesDetail", { invoice });
          }}
        >
          <HStack
            bg={theme.colors.white}
            p={5}
            justifyContent={"space-between"}
            px={10}
            alignItems={"center"}
          >
            <Box>
              <Text style={{ fontFamily: theme.fonts.semiBold }}>
                {getMonth(invoice.end_at)}
              </Text>
              {getFechamento(invoice)}
            </Box>
            <HStack>
              <Text style={{ fontFamily: theme.fonts.semiBold }}>
                R$ {invoice.total.toFixed(2)}
              </Text>
            </HStack>
          </HStack>
        </Pressable>
      ))}
    </VStack>
  );
};

export default DetailsMoth;
