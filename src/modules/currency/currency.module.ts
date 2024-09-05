import { Module } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { CurrencyController } from './currency.controller';
import { CacheService } from '../cache/cache.service';
import { SwopManagerService } from './managers/swop/swop.manager.service';
import { LocaleManagerService } from './managers/locale/locale.service';
import { InfluxService } from '../logging/influx.service';

@Module({
  controllers: [CurrencyController],
  providers: [
    CurrencyService,
    CacheService,
    SwopManagerService,
    LocaleManagerService,
    InfluxService,
  ],
  exports: [CurrencyService],
})
export class CurrencyModule {}
