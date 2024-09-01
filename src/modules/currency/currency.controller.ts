import { Controller, Get } from '@nestjs/common';
import { CurrencyService } from './currency.service';

@Controller('currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Get('csrf-token')
  async getCsrfToken() {
    return await this.currencyService.generateToken();
  }
}
