import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CurrencyModule } from './modules/currency/currency.module';
import { CurrencyService } from './modules/currency/currency.service';
import { CurrencyController } from './modules/currency/currency.controller';
import { CacheService } from './modules/cache/cache.service';

@Module({
  imports: [CurrencyModule],
  controllers: [AppController, CurrencyController],
  providers: [AppService, CurrencyService, CacheService],
})
export class AppModule {}
