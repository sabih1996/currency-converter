import { Test, TestingModule } from '@nestjs/testing';
import { ExecutionContext } from '@nestjs/common';
import { CsrfGuard } from './csrf.guard';
import { CacheService } from '../cache/cache.service';
import {
  BadRequestException,
  ForbiddenException,
  UnauthorizedException,
} from '../../common/error/exception.service';
import { Request } from 'express';
import {
  BROKEN_CSRF_TOKEN,
  CSRF_TOKEN_IN_CACHE,
  VALID_CSRF_TOKEN,
} from '../../../test/constants/index.constant';

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
    (cacheService.get as jest.Mock).mockResolvedValue(VALID_CSRF_TOKEN);

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

  it('should throw UnauthorizedException if CSRF token expires in cache', async () => {
    // Mock CacheService response
    (cacheService.get as jest.Mock).mockResolvedValue(null);

    // Create a mock ExecutionContext to simulate a request with a broken CSRF token
    const context = {
      switchToHttp: () => ({
        getRequest: () =>
          ({
            headers: {
              'x-csrf-token': BROKEN_CSRF_TOKEN, // This token does not match the valid one in the cache
            },
          }) as unknown as Request,
      }),
    } as ExecutionContext;

    await expect(csrfGuard.canActivate(context)).rejects.toThrow(
      UnauthorizedException('CSRF token expires'),
    );
  });

  it('should throw ForbiddenException if CSRF token does not match with value in cache', async () => {
    // Mock CacheService response
    (cacheService.get as jest.Mock).mockResolvedValue(VALID_CSRF_TOKEN);

    // Create a mock ExecutionContext
    const context = {
      switchToHttp: () => ({
        getRequest: () =>
          ({
            headers: {
              'x-csrf-token': CSRF_TOKEN_IN_CACHE,
            },
          }) as unknown as Request,
      }),
    } as ExecutionContext;

    // Check that the CsrfGuard throws an UnauthorizedException when the CSRF token has expired
    await expect(csrfGuard.canActivate(context)).rejects.toThrow(
      ForbiddenException('Invalid CSRF token.'),
    );
  });

  it('should return true if CSRF token matches', async () => {
    // Mock CacheService response
    (cacheService.get as jest.Mock).mockResolvedValue(VALID_CSRF_TOKEN);

    // Create a mock ExecutionContext
    const context = {
      switchToHttp: () => ({
        getRequest: () =>
          ({
            headers: {
              'x-csrf-token': VALID_CSRF_TOKEN,
            },
          }) as unknown as Request,
      }),
    } as ExecutionContext;

    await expect(csrfGuard.canActivate(context)).resolves.toBe(true);
  });
});
