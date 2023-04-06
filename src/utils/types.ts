export interface ITransactionType {
  id: number;
  type: string;
  transaction: {
    item: string;
    description: string;
    amount: number;
    time: string;
  };
}

export interface IAmountValues {
  balance: number;
  income: number;
  expenses: number;
}
