import { Transaction } from "../@types/invoice";
import { getMonth } from "./date-helpers";

export type TransactionMap = { [key: string]: Transaction[] };

export function mapTransactionsByMonth(transactions: Transaction[]) {
    return transactions.reduce((acc, item) => {
      const month = getMonth(item.created_at);
  
      if (month in acc) {
        acc[month].push(item);
        return acc;
      }
  
      return { ...acc, [month]: [item] };
    }, {} as TransactionMap);
  }