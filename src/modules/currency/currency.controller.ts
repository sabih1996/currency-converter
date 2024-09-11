import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { CsrfGuard } from '../security/csrf.guard';
import { CurrencyDTO } from './dto/currency.dto';
import { CspGuard } from '../security/csp.guard';

@Controller('currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Get('csrf-token')
  async getCsrfToken() {
    return await this.currencyService.generateToken();
  }

  @Post('converter')
  @UseGuards(CsrfGuard, CspGuard)
  async currencyConverter(@Body() currencyDto: CurrencyDTO) {
    return await this.currencyService.currencyConverter(currencyDto);
  }
}
