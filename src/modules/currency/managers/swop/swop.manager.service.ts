import { Injectable, OnModuleInit } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { CurrenciesList } from './interfaces/swop.manager.interface';
import { CacheService } from '../../../cache/cache.service';
import { UnauthorizedException } from '../../../../common/error/exception.service';
import { SwopManager } from '../../../../common/enum/swop.enum';

dotenv.config();

@Injectable()
export class SwopManagerService implements OnModuleInit {
  constructor(private cacheService: CacheService) {}
  async onModuleInit() {
    await Promise.all([this.getEuroExchangeRates(), this.fetchCurrencies()]);
  }

  async fetchCurrencies() {
    //check if no valid currencies values store in redis cache
    const validCurrencies = await this.getCacheValue(
      SwopManager.VALID_CURRENCIES,
    );

    if (validCurrencies) return JSON.parse(validCurrencies);
    const currenciesResponse = await this.fetchSwop('currencies');
    try {
      const _validCurrencies: CurrenciesList[] =
        await currenciesResponse.json();
      await this.setCacheValue(SwopManager.VALID_CURRENCIES, _validCurrencies);
    } catch (error: unknown) {
      throw UnauthorizedException('Api key invalid');
    }
  }

  async getEuroExchangeRates() {
    //check if no valid euro exchange rates store in redis cache
    const excahngeRates = await this.getCacheValue(
      SwopManager.EURO_EXCHANGE_RATES,
    );

    if (excahngeRates) return JSON.parse(excahngeRates);
    const swopExhangeRates = await this.fetchSwop('rates');
    try {
      const _excahngeRates: CurrenciesList[] = await swopExhangeRates.json();
      await this.setCacheValue(SwopManager.EURO_EXCHANGE_RATES, _excahngeRates);
    } catch (error: unknown) {
      throw UnauthorizedException('Api key invalid');
    }
  }

  private async fetchSwop(extendedUrl: string) {
    return await fetch(`${process.env.SWOP_API_ENDPOINT}/${extendedUrl}`, {
      method: 'GET',
      headers: {
        Authorization: `ApiKey ${process.env.SWOP_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });
  }
  private async getCacheValue(key: string) {
    return await this.cacheService.get(key);
  }
  private async setCacheValue(key: string, values: CurrenciesList[]) {
    await this.cacheService.set(key, JSON.stringify(values));
  }
}
