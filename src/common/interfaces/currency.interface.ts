type GenerateToken = {
  csrfToken: string;
};

type ConvertCurrency = {
  convertedAmount: number;
  conversionRate: number;
};

export { GenerateToken, ConvertCurrency };
