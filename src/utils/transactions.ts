import ITransactionType from './types';

export const transactions: ITransactionType[] = [
  {
    id: 1,
    transaction: {
      type: 'expense',
      item: 'Shopping',
      description: 'Bought some groceries',
      amount: 120,
      time: '10:00 AM',
    },
  },
  {
    id: 2,
    transaction: {
      type: 'expense',
      item: 'Subscription',
      description: 'Paid monthly Netflix subscription',
      amount: 9,
      time: '04:30 PM',
    },
  },
  {
    id: 3,
    transaction: {
      type: 'income',
      item: 'Monthly Salary',
      description: 'Recieved monthly salary for June',
      amount: 5500,
      time: '11:30 AM',
    },
  },
];
