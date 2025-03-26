import {Currency} from '../store';

export const convertToUSD = (amount: number, currency: Currency): number => {
  if (currency.value === 'USD') return amount;

  const rate = currency.rate;
  const result = amount / rate;
  return Math.round(result * 100) / 100;
};
