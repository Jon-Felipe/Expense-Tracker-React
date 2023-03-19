export default interface ITransactionType {
  id: number;
  transaction: {
    type: string;
    item: string;
    description: string;
    amount: number;
    time: string;
  };
}
