// cache.service.spec.ts

import { Test, TestingModule } from '@nestjs/testing';
import { CacheService } from './cache.service';
import { createClient } from 'redis'; // Import the actual redis client
import { BadRequestException } from '../../common/error/exception.service';

// Mock the redis module
jest.mock('redis', () => ({
  // Mock the createClient function
  createClient: jest.fn(),
}));

describe('CacheService', () => {
  let service: CacheService;
  let redisClientMock: any;

  beforeEach(async () => {
    // Create a mock Redis client with necessary methods
    redisClientMock = {
      get: jest.fn(),
      set: jest.fn(),
      connect: jest.fn(),
      on: jest.fn(),
    };

    // Make createClient return the mock Redis client
    (createClient as jest.Mock).mockReturnValue(redisClientMock);

    const module: TestingModule = await Test.createTestingModule({
      providers: [CacheService],
    }).compile();

    service = module.get<CacheService>(CacheService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('onModuleInit', () => {
    it('should connect to Redis client', async () => {
      await service.onModuleInit();
      expect(redisClientMock.connect).toHaveBeenCalled();
    });

    it('should return  redis client error', async () => {
      const error = new Error('Connection error');
      redisClientMock.on.mockImplementation((event, callback) => {
        if (event === 'error') callback(error);
      });

      await expect(service.onModuleInit()).rejects.toThrow(
        BadRequestException('Redis client error'),
      );
    });
  });
});
