import { Test, TestingModule } from '@nestjs/testing';
import { SwopManagerService } from './swop.manager.service';
import { CacheService } from '../../../cache/cache.service';
import { mockCountriesList } from '../../../../../test/data/mock-countries.data';
import { UnauthorizedException } from '../../../../common/error/exception.service';

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

});
