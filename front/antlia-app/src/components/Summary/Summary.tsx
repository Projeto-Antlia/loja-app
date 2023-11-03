import { Text, VStack } from "native-base";
import theme from "../../theme/index";
import DetailsMoth from "../DetailsMoth/DetailsMoth";
import Graph from "../Graph/Graph";
import { useEffect, useState } from "react";

import { Invoice } from "../../@types/invoice";

interface SummaryProps {
  invoices: Invoice[];
}

const Summary: React.FC<SummaryProps> = ({ invoices }) => {
  return (
    <>
      <VStack bg={theme.colors.white} p={5}>
        <Text style={{ fontFamily: theme.fonts.semiBold }}>
          Resumo de despesas
        </Text>
        <Graph invoices={invoices} />
      </VStack>
      <VStack p={7}>
        <Text
          style={{ fontFamily: theme.fonts.bold, fontSize: theme.size.font8 }}
        >
          Histórico de despesas
        </Text>
        <Text
          style={{
            fontFamily: theme.fonts.regular,
            color: theme.colors.textPrimary,
          }}
        >
          2023
        </Text>
      </VStack>
      <VStack>
        <DetailsMoth invoices={invoices} />
      </VStack>
    </>
  );
};

export default Summary;
