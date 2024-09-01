import { Module } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { CurrencyController } from './currency.controller';
import { CacheService } from '../cache/cache.service';

@Module({
  imports: [],
  controllers: [CurrencyController],
  providers: [CurrencyService, CacheService],
  exports: [CurrencyService],
})
export class CurrencyModule {}
