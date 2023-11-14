import { Box, Button, Text } from "native-base";
import { Pressable, StyleSheet } from "react-native";
import { Transaction } from "../../@types/invoice";
import { getCode } from "../../utils/uid-helper";
import { formatDateTime } from "../../utils/date-helpers";

const colorTextSecondary = "#777777";

type TransactionItemProps = {
  transaction: Transaction;
  showOrders: boolean;
  onPress: () => void;
};

function TransactionItem({
  onPress,
  showOrders,
  transaction,
}: TransactionItemProps) {
  return (
    <>
      <Pressable onPress={onPress}>
        <Box
          p={6}
          width="100%"
          alignItems="center"
          flexDir="row"
          borderBottomColor="#ddd"
          borderBottomWidth={1}
          background="#fff"
        >
          <Box flexGrow={1}>
            <Text fontSize={10} fontWeight="bold" color={colorTextSecondary}>
              {formatDateTime(transaction.created_at)}
            </Text>
            <Text style={styles.transactions_id}>
              {getCode(transaction.id)}
            </Text>
          </Box>
          <Box flexDir="row" alignItems={"center"}>
            <Text style={styles.transactions_id} mr={5}>
              R$ {transaction.price.toFixed(2)}
            </Text>
            <Button
              onPress={onPress}
              bg="#502275"
              rounded={40}
              w="8"
              h="8"
              p={0}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text style={{ fontFamily: "Rubik_700Bold", color: "#fff" }}>
                {showOrders ? "-" : "+"}
              </Text>
            </Button>
          </Box>
        </Box>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  transactions_id: {
    fontFamily: "Rubik_700Bold",
    fontSize: 18,
    lineHeight: 26,
  },
});

export default TransactionItem;
