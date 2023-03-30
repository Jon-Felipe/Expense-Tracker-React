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

export interface IModalDataType {
  type: string;
  category: string;
  amount: number;
  description: string;
}

export interface IAmountValues {
  balance: number;
  income: number;
  expenses: number;
}
