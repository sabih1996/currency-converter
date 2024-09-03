import { Injectable } from '@nestjs/common';
import { randomBytes } from 'crypto';
import { CacheService } from '../cache/cache.service';
import { GenerateToken } from '../../common/interfaces/currency.interface';
import { CurrencyDTO } from './dto/currency.dto';
import { SwopManagerService } from './managers/swop/swop.manager.service';
import { BadRequestException } from '../../common/error/exception.service';
import { ConvertCurrency } from '../../common/interfaces/currency.interface';

@Injectable()
export class CurrencyService {
  constructor(
    private readonly cacheService: CacheService,
    private readonly swopManagerService: SwopManagerService,
  ) {}

  async generateToken(): Promise<GenerateToken> {
    const csrfToken = randomBytes(32).toString('hex');
    await this.cacheService.set('csrf-token', csrfToken);
    return { csrfToken };
  }

  async currencyConverter(currencyDto: CurrencyDTO): Promise<ConvertCurrency> {
    const { sourceCurrency, targetCurrency, amount } = currencyDto;

    await Promise.all([
      this.validateInputCurrencies(sourceCurrency),
      this.validateInputCurrencies(targetCurrency),
    ]);

    const [sourceCurrencyToEuro, targetCurrencyToEuro] = await Promise.all([
      this.getCurrencyExchangeRate(sourceCurrency),
      this.getCurrencyExchangeRate(targetCurrency),
    ]);
    const conversionRate: number =
      sourceCurrencyToEuro.quote / targetCurrencyToEuro.quote;
    const convertedAmount: number = amount * conversionRate;
    return {
      conversionRate,
      convertedAmount,
    };
  }

  private async getCurrencyExchangeRate(currency: string) {
    return (await this.swopManagerService.getEuroExchangeRates()).find(
      (exchangeRate) => exchangeRate.quote_currency === currency,
    );
  }
  private async validateInputCurrencies(currency: string): Promise<boolean> {
    const validCurrency = (
      await this.swopManagerService.fetchCurrencies()
    ).some((value) => value.code === currency);

    if (!validCurrency) throw BadRequestException('Currency is not valid');
    return true;
  }
}
