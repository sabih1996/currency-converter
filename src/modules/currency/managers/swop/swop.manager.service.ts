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
    await this.fetchCurrencies();
  }

  async fetchCurrencies() {
    //check if no valid currencies values store in redis cache
    const validCurrencies = await this.cacheService.get(
      SwopManager.VALID_CURRENCIES,
    );

    if (validCurrencies) return JSON.parse(validCurrencies);

    try {
      const currenciesResponse = await fetch(
        `${process.env.SWOP_API_ENDPOINT}/currencies`,
        {
          method: 'GET',
          headers: {
            Authorization: `ApiKey ${process.env.SWOP_API_KEY}`,
            'Content-Type': 'application/json',
          },
        },
      );

      const _validCurrencies: CurrenciesList[] =
        await currenciesResponse.json();
      await this.setCacheValue(SwopManager.VALID_CURRENCIES, _validCurrencies);
    } catch (error: unknown) {
      throw UnauthorizedException('Api key invalid');
    }
  }

  private async setCacheValue(key: string, values: CurrenciesList[]) {
    await this.cacheService.set(key, JSON.stringify(values));
  }
}
