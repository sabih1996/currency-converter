import { Injectable } from '@nestjs/common';
import { randomBytes } from 'crypto';
import { CacheService } from '../cache/cache.service';
import { GenerateToken } from '../../common/interfaces/currency.interface';
import { CurrencyDTO } from './dto/currency.dto';
import { SwopManagerService } from './managers/swop/swop.manager.service';
import { BadRequestException } from '../../common/error/exception.service';
// import { CurrenciesList } from './managers/swop/interfaces/swop.manager.interface';
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

  async currencyConverter(currencyDto: CurrencyDTO): Promise<any> {
    const { sourceCurrency, targetCurrency } = currencyDto;
    await Promise.all([
      this.validateInputCurrencies(sourceCurrency),
      this.validateInputCurrencies(targetCurrency),
    ]);
  }

  private async validateInputCurrencies(currency: string) {
    const validCurrency = (
      await this.swopManagerService.fetchCurrencies()
    ).some((value) => value.code === currency);

    if (!validCurrency) throw BadRequestException('Currency is not valid');
  }
}
