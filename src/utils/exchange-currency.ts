import {CurrencyValue} from '../store';

export const exchangeCurrency = (type: CurrencyValue, rate: number, value: number): string => {
  if (!rate || !value || !type) return '0';

  switch (type) {
    case 'USD':
      return (value * rate).toFixed(2);
    case 'EUR':
      return (value * rate).toFixed(2);
    case 'UAH':
      return (value * rate).toFixed(2);
    case 'GBP':
      return (value * rate).toFixed(2);
    default:
      return value.toString();
  }
};
