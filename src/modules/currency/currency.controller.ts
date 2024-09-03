import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { CsrfGuard } from '../security/csrf.guard';
import { CurrencyDTO } from './dto/currency.dto';

@Controller('currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Get('csrf-token')
  async getCsrfToken() {
    return await this.currencyService.generateToken();
  }

  @Get('converter')
  @UseGuards(CsrfGuard)
  async currencyConverter(@Query() currencyDto: CurrencyDTO) {
    return await this.currencyService.currencyConverter(currencyDto);
  }
}
