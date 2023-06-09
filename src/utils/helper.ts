import { ITransactionType } from './types';

export const calculateTotal = (
  transactions: ITransactionType[],
  transactionType: string
) => {
  return transactions
    .filter((item) => item.type === transactionType)
    .reduce((acc, curr) => {
      return (acc += curr.transaction.amount);
    }, 0);
};
