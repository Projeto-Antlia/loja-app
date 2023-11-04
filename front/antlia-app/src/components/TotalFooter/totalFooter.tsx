import { Box, Text, HStack } from "native-base";
import theme from "../../theme/index";
import { useCart } from "../../contexts/CartContext";
import { useEffect, useState } from "react";

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

const TotalFooter = ({ invoices }: IProps) => {
  const { cartState } = useCart();
  const [total, setTotal] = useState(0);
  //const invoice = invoices[0];

  useEffect(() => {
    // Calculando o total somando os totais individuais
    const totalSum = invoices
      .filter((inv) => inv.pay_status === "PENDING")
      .reduce((acc, curr) => acc + curr.total, 0);
    setTotal(parseFloat(totalSum.toFixed(2)));
  }, [invoices]);

  return (
    <Box bg={theme.colors.secondary}>
      <HStack>
        <Box
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            height: 100,
          }}
        >
          <Text
            mb={-4}
            ml={10}
            color={"white"}
            style={{
              fontFamily: theme.fonts.semiBold,
              fontSize: 25,
              padding: 5,
            }}
          >
            DESPESA ATUAL
          </Text>
          <Text
            mb={-4}
            mr={10}
            color={"white"}
            style={{
              fontFamily: theme.fonts.semiBold,
              fontSize: 25,
              padding: 5,
            }}
          >
            {`R$ ${total.toFixed(2)}`}
          </Text>
        </Box>
      </HStack>
    </Box>
  );
};

export default TotalFooter;
