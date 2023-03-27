export interface ITransactionType {
  id: number;
  type: 'expense' | 'income' | string;
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
  amount: string;
  description: string;
}
