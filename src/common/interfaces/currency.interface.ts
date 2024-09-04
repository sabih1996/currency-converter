type GenerateToken = {
  csrfToken: string;
};

type ConvertCurrency = {
  convertedAmount: string;
  conversionRate: number;
};

export { GenerateToken, ConvertCurrency };
