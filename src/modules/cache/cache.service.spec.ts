import { Test, TestingModule } from '@nestjs/testing';
import { CacheService } from './cache.service';
import { createClient } from 'redis';
import { BadRequestException } from '../../common/error/exception.service';

jest.mock('redis', () => ({
  createClient: jest.fn(),
}));

describe('CacheService', () => {
  let service: CacheService;
  let redisClientMock: any;

  beforeEach(async () => {
    redisClientMock = {
      get: jest.fn(),
      set: jest.fn(),
      connect: jest.fn(),
      on: jest.fn(),
    };

    (createClient as jest.Mock).mockReturnValue(redisClientMock);

    const module: TestingModule = await Test.createTestingModule({
      providers: [CacheService],
    }).compile();

    service = module.get<CacheService>(CacheService);

    // Call onModuleInit to initialize the redisClient
    await service.onModuleInit();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Initialize redis module', () => {
    it('should connect to Redis client', async () => {
      expect(redisClientMock.connect).toHaveBeenCalled();
    });

    it('should handle redis client error', async () => {
      const error = new Error('Connection error');
      redisClientMock.on.mockImplementation((event, callback) => {
        if (event === 'error') callback(error);
      });

      await expect(service.onModuleInit()).rejects.toThrow(
        BadRequestException('Redis client error'),
      );
    });
  });

  describe('get', () => {
    it('should return null if key is not found in Redis', async () => {
      redisClientMock.get.mockResolvedValue(null);
      const result = await service.get('non-existing-key');
      expect(result).toBeNull();
      expect(redisClientMock.get).toHaveBeenCalledWith('non-existing-key');
    });

    it('should return value from Redis which mateches with test key value', async () => {
      redisClientMock.get.mockResolvedValue('cached-value');
      const result = await service.get('test-key');
      expect(result).toBe('cached-value');
      expect(redisClientMock.get).toHaveBeenCalledWith('test-key');
    });
  });

  describe('set', () => {
    it('should set value in Redis with expiry', async () => {
      redisClientMock.set.mockResolvedValue('OK');
      await service.set('test-key', 'test-value');
      expect(redisClientMock.set).toHaveBeenCalledWith(
        'test-key',
        'test-value',
        { EX: 3600 },
      );
    });
  });
});
