import { Test, TestingModule } from '@nestjs/testing';
import { CurrencyService } from './currency.service';
import { CacheService } from '../cache/cache.service';
import { SwopManagerService } from './managers/swop/swop.manager.service';
import * as crypto from 'crypto'; // Import the crypto library to mock

describe('CurrencyService', () => {
  let currencyService: CurrencyService;
  let cacheService: CacheService;

  beforeEach(async () => {
    // Create a mock CacheService
    const cacheServiceMock = {
      set: jest.fn(),
    };

    // Mock the crypto.randomBytes function
    jest
      .spyOn(crypto, 'randomBytes')
      .mockImplementation(() => Buffer.from('a'.repeat(32)));

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CurrencyService,
        { provide: SwopManagerService, useValue: {} },
        { provide: CacheService, useValue: cacheServiceMock },
      ],
    }).compile();

    currencyService = module.get<CurrencyService>(CurrencyService);
    cacheService = module.get<CacheService>(CacheService);
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
});
