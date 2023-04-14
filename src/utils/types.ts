export interface ITransactionType {
  id: number;
  type: string;
  transaction: {
    item: string;
    amount: number;
    time: Date;
  };
}

export interface IAmountValues {
  balance: number;
  income: number;
  expenses: number;
}

export interface IIncomeValues {
  income: string;
  amount: number;
}
