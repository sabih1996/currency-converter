import { Test, TestingModule } from '@nestjs/testing';
import { SwopManagerService } from './swop.manager.service';
import { CacheService } from '../../../cache/cache.service';
import {
  mockCountriesList,
  mockEuroExchange,
} from '../../../../../test/data/index';
import { UnauthorizedException } from '../../../../common/error/exception.service';
import { SwopManager } from '../../../../common/enum/swop.enum';

describe('SwopManagerService', () => {
  let service: SwopManagerService;
  const SWOP_API_ENDPOINT = 'https://swop.cx/rest';
  const SWOP_API_VALID_KEY =
    'e0266e8aa1de72fa3cf6f5a8359ca10d6df1be2ca6735032b463c23888542cca';

  // Create mocks for dependencies
  const cacheServiceMock = {
    get: jest.fn(),
    set: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SwopManagerService,
        { provide: CacheService, useValue: cacheServiceMock },
      ],
    }).compile();

    service = module.get<SwopManagerService>(SwopManagerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('onModuleInit', () => {
    it('should fetch currencies on module init', async () => {
      // Mock implementation of fetchCurrencies
      const fetchCurrenciesSpy = jest
        .spyOn(service, 'fetchCurrencies')
        .mockResolvedValue(undefined);
      await service.onModuleInit();
      expect(fetchCurrenciesSpy).toHaveBeenCalled();
    });
  });

  describe('fetchCurrencies', () => {
    it('it should return cached currencies if available', async () => {
      // Mock cacheService to return a valid currencies string
      cacheServiceMock.get.mockResolvedValueOnce(
        JSON.stringify(mockCountriesList),
      );

      const result = await service.fetchCurrencies();
      expect(result).toEqual(mockCountriesList);
      expect(cacheServiceMock.get).toHaveBeenCalledWith(
        SwopManager.VALID_CURRENCIES,
      );
    });

    it('should throw UnauthorizedException if API key is invalid', async () => {
      cacheServiceMock.get.mockResolvedValueOnce(null);

      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: false,
          status: 401,
          json: () => Promise.reject(new Error('Unauthorized')),
        } as Response),
      ) as jest.Mock;

      await expect(service.fetchCurrencies()).rejects.toThrow(
        UnauthorizedException('Api key invalid'),
      );
    });

    it('it should fetch and cache currencies if not available in cache', async () => {
      // Mock cacheService to return null, simulating cache miss
      cacheServiceMock.get.mockResolvedValueOnce(null);

      // Mock fetch response
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockCountriesList),
        } as Response),
      ) as jest.Mock;

      // Mock cacheService.set to check if it's called with correct arguments
      cacheServiceMock.set.mockResolvedValueOnce(undefined);

      await service.fetchCurrencies();
      expect(global.fetch).toHaveBeenCalledWith(
        `${SWOP_API_ENDPOINT}/currencies`,
        {
          method: 'GET',
          headers: {
            Authorization: `ApiKey ${SWOP_API_VALID_KEY}`,
            'Content-Type': 'application/json',
          },
        },
      );
      expect(cacheServiceMock.set).toHaveBeenCalledWith(
        SwopManager.VALID_CURRENCIES,
        JSON.stringify(mockCountriesList),
      );
    });
  });
  describe('getEuroExchangeRates', () => {
    it('it should return cached euro exchange rates if available in cache', async () => {
      // Mock cacheService to return a valid currencies string
      cacheServiceMock.get.mockResolvedValueOnce(
        JSON.stringify(mockEuroExchange),
      );

      const result = await service.getEuroExchangeRates();
      expect(result).toEqual(mockEuroExchange);
      expect(cacheServiceMock.get).toHaveBeenCalledWith(
        SwopManager.EURO_EXCHANGE_RATES,
      );
    });
  });
});
