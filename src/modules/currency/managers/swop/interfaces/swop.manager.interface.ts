type CurrenciesList = ValidCurrency[];

type ValidCurrency = {
  code: string;
  numeric_code: string;
  decimal_digits: number;
  name: string;
  active: boolean;
};

export { CurrenciesList };
