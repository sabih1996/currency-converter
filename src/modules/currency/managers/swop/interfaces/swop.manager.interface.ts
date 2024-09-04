type CurrenciesList = ValidCurrency[];

type ValidCurrency = {
  code: string;
  numeric_code: string;
  decimal_digits: number;
  name: string;
  active: boolean;
};

type EuroCurrencyExchangeList = EuroCurrencyExchange[];

type EuroCurrencyExchange = {
  base_currency: string;
  quote_currency: string;
  quote: number;
  date: string;
};

export { CurrenciesList, EuroCurrencyExchangeList };
