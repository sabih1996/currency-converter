import { Injectable, OnModuleInit } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { CurrenciesList } from './interfaces/swop.manager.interface';
import { CacheService } from '../../../cache/cache.service';
import { UnauthorizedException } from '../../../../common/error/exception.service';

dotenv.config();

@Injectable()
export class SwopManagerService implements OnModuleInit {
  constructor(private cacheService: CacheService) {}
  async onModuleInit() {
    await this.fetchCurrencies();
  }

  async fetchCurrencies() {
    //check if no valid currencies values store in redis cache
    const validCurrencies = await this.cacheService.get('legalCurrencies');

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
      await this.saveValidCurrencies(_validCurrencies);
    } catch (error: unknown) {
      throw UnauthorizedException('Api key invalid');
    }
  }

  private async saveValidCurrencies(validCurrencies: CurrenciesList[]) {
    await this.cacheService.set(
      'legalCurrencies',
      JSON.stringify(validCurrencies),
    );
  }
}
