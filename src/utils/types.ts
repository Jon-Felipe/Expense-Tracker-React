export interface ITransactionType {
  id: number;
  transaction: {
    type: string;
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
