import { Test, TestingModule } from '@nestjs/testing';
import { ExecutionContext } from '@nestjs/common';
import { CsrfGuard } from './csrf.guard';
import { CacheService } from '../cache/cache.service';
import {
  BadRequestException,
  ForbiddenException,
} from '../../common/error/exception.service';
import { Request } from 'express';

describe('CsrfGuard Test Cases', () => {
  let csrfGuard: CsrfGuard;
  let cacheService: CacheService;

  beforeEach(async () => {
    const cacheServiceMock = {
      get: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CsrfGuard,
        { provide: CacheService, useValue: cacheServiceMock },
      ],
    }).compile();

    csrfGuard = module.get<CsrfGuard>(CsrfGuard);
    cacheService = module.get<CacheService>(CacheService);
  });

  it('should throw BadRequestException if CSRF token is missing from headers', async () => {
    // Mock CacheService response
    (cacheService.get as jest.Mock).mockResolvedValue('valid-token');

    // Create a mock ExecutionContext
    const context = {
      switchToHttp: () => ({
        getRequest: () =>
          ({
            headers: {}, // No CSRF token in headers
          }) as Request,
      }),
    } as ExecutionContext;

    await expect(csrfGuard.canActivate(context)).rejects.toThrow(
      BadRequestException('CSRF token is missing.'),
    );
  });

  it('should throw BadRequestException if CSRF token is missing from cache', async () => {
    // Mock CacheService response
    (cacheService.get as jest.Mock).mockResolvedValue(null);

    // Create a mock ExecutionContext
    const context = {
      switchToHttp: () => ({
        getRequest: () =>
          ({
            headers: {
              'x-csrf-token': 'some-token',
            },
          }) as unknown as Request,
      }),
    } as ExecutionContext;

    await expect(csrfGuard.canActivate(context)).rejects.toThrow(
      BadRequestException('CSRF token is missing.'),
    );
  });

  it('should throw ForbiddenException if CSRF token does not match', async () => {
    // Mock CacheService response
    (cacheService.get as jest.Mock).mockResolvedValue('valid-token');

    // Create a mock ExecutionContext
    const context = {
      switchToHttp: () => ({
        getRequest: () =>
          ({
            headers: {
              'x-csrf-token': 'invalid-token',
            },
          }) as unknown as Request,
      }),
    } as ExecutionContext;

    await expect(csrfGuard.canActivate(context)).rejects.toThrow(
      ForbiddenException('Invalid CSRF token.'),
    );
  });
});
