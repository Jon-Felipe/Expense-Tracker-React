export interface ITransactionType {
  id: number;
  type: string;
  transaction: {
    item: string;
    amount: number;
    date: Date;
  };
}

export interface IIncomeValues {
  income: string;
  amount: number;
}

export interface IExpenseValues {
  expense: string;
  amount: number;
}
