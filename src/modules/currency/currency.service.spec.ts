import { Test, TestingModule } from '@nestjs/testing';
import { CurrencyService } from './currency.service';
import { CacheService } from '../cache/cache.service';

describe('CurrencyService', () => {
  let currencyService: CurrencyService;
  let cacheService: CacheService;

  beforeEach(async () => {
    // Create a mock CacheService
    const cacheServiceMock = {
      set: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CurrencyService,
        { provide: CacheService, useValue: cacheServiceMock },
      ],
    }).compile();

    currencyService = module.get<CurrencyService>(CurrencyService);
    cacheService = module.get<CacheService>(CacheService);
  });

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
