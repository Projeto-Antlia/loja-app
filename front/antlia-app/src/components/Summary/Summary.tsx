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
        <Text style={{ 
          fontFamily: theme.fonts.semiBold,
          fontSize: theme.size.font8
          }}>
          Resumo de despesas
        </Text>
        <Graph invoices={invoices} />
      </VStack>
      <VStack px={7} pt={7} space={7} pb={4}> 
        <Text
          style={{ fontFamily: theme.fonts.bold, fontSize: theme.size.font10 }}
        >
          Histórico de despesas
        </Text>
        <Text
          style={{
            fontFamily: theme.fonts.semiBold,
            fontSize: theme.size.font8,
            color: theme.colors.textPrimary,
          }}
        >
          {new Date().getFullYear()}
        </Text>
      </VStack>
      <VStack>
        <DetailsMoth invoices={invoices} />
      </VStack>
    </>
  );
};

export default Summary;
