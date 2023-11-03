import { Box, HStack, Text } from "native-base";

import { useEffect, useState } from "react";
import apiService from "../../utils/api";
import { useAuth } from "../../contexts/auth.context";
import { formatDate } from "../../utils/date-helpers";
import { Invoice } from "../../@types/invoice";

export default function DtlMoth() {
  const { user } = useAuth();
  const [invoice, setInvoice] = useState<Invoice>();

  useEffect(() => {
    if (!user) return;
    apiService
      .get(`/billing/customers/${user?.profile_id}/current-invoice`)
      .then((res) => setInvoice(res.data));
  }, []);

  return (
    <HStack
      bg="#502275"
      w="100%"
      h="140px"
      px={10}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box>
        <Text
          color="#fff"
          style={{ fontFamily: "Rubik_400Regular" }}
          fontSize={12}
        >
          DESPESA ATUAL
        </Text>
        <Text
          color="#fff"
          style={{ fontFamily: "Rubik_700Bold" }}
          fontSize={22}
        >
          R$ {invoice?.total?.toFixed(2) || 0}
        </Text>
      </Box>
      <Box>
        <Text color="#fff" style={{ fontFamily: "Rubik_400Regular" }}>
          FECHA EM {formatDate(invoice?.end_at)}
        </Text>
      </Box>
    </HStack>
  );
}
