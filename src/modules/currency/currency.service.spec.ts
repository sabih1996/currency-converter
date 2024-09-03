import { Test, TestingModule } from '@nestjs/testing';
import { CurrencyService } from './currency.service';
import { CacheService } from '../cache/cache.service';
import { SwopManagerService } from './managers/swop/swop.manager.service';
import * as crypto from 'crypto'; // Import the crypto library to mock
import { CurrencyDTO } from './dto/currency.dto';
import { mockCurrenciesList, mockEuroExchange } from '../../../test/data';
import { BadRequestException } from '../../common/error/exception.service';

describe('CurrencyService', () => {
  let currencyService: CurrencyService;
  let cacheService: CacheService;
  let swopManagerService: SwopManagerService;

  beforeEach(async () => {
    // Create a mock CacheService
    const cacheServiceMock = {
      set: jest.fn(),
    };

    const swopManagerServiceMock = {
      fetchCurrencies: jest.fn(),
      getEuroExchangeRates: jest.fn(),
    };

    // Mock the crypto.randomBytes function
    jest
      .spyOn(crypto, 'randomBytes')
      .mockImplementation(() => Buffer.from('a'.repeat(32)));

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CurrencyService,
        { provide: SwopManagerService, useValue: swopManagerServiceMock },
        { provide: CacheService, useValue: cacheServiceMock },
      ],
    }).compile();

    currencyService = module.get<CurrencyService>(CurrencyService);
    cacheService = module.get<CacheService>(CacheService);
    swopManagerService = module.get<SwopManagerService>(SwopManagerService);
  });

  describe('Generate token', () => {
    it('should generate a CSRF token(32 bytes = 64 hex characters), store it in cache, and return it', async () => {
      const result = await currencyService.generateToken();

      expect(result.csrfToken).toBeDefined();
      expect(result.csrfToken).toHaveLength(64);
      expect(cacheService.set).toHaveBeenCalledWith(
        'csrf-token',
        result.csrfToken,
      );
    });
  });

  describe('currencyConverter', () => {
    it('it should throw a BadRequestException if the source currency is invalid', async () => {
      (swopManagerService.fetchCurrencies as jest.Mock).mockResolvedValue(
        mockCurrenciesList,
      );

      const currencyDto: CurrencyDTO = {
        sourceCurrency: 'INVALID',
        targetCurrency: 'EUR',
        amount: 100,
      }; // Invalid source currency

      await expect(
        currencyService.currencyConverter(currencyDto),
      ).rejects.toThrow(BadRequestException('Currency is not valid'));
    });

    it('it should throw a BadRequestException if the target currency is invalid', async () => {
      (swopManagerService.fetchCurrencies as jest.Mock).mockResolvedValue(
        mockCurrenciesList,
      );
      const currencyDto: CurrencyDTO = {
        sourceCurrency: 'USD',
        targetCurrency: 'INVALID',
        amount: 100,
      };

      await expect(
        currencyService.currencyConverter(currencyDto),
      ).rejects.toThrow(BadRequestException('Currency is not valid'));
    });

    it('it should return the converted value of source currency to euro', async () => {
      (swopManagerService.fetchCurrencies as jest.Mock).mockResolvedValue(
        mockCurrenciesList,
      );
      (swopManagerService.getEuroExchangeRates as jest.Mock).mockResolvedValue(
        mockEuroExchange,
      );
      const currencyDto: CurrencyDTO = {
        sourceCurrency: 'PKR',
        targetCurrency: 'USD',
        amount: 100,
      };

      const result = await currencyService.currencyConverter(currencyDto);
      expect(result).toBeTruthy();
      expect(result.convertedAmount).toBeCloseTo(0.358, 3);
    });
  });
});
