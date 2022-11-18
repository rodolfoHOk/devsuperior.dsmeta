import { SellerIdInput } from './sellerIdInput';

export type SaleInput = {
  visited: number;
  deals: number;
  amount: number;
  date: string;
  seller: SellerIdInput;
};
