import { Test, TestingModule } from '@nestjs/testing';
import { CspGuard } from './csp.guard'; // Adjust the import path as needed
import { ExecutionContext } from '@nestjs/common';
import { Response } from 'express';

describe('CspGuard', () => {
  let guard: CspGuard;
  let response: Response;
  let context: ExecutionContext;

  beforeEach(async () => {
    response = {
      setHeader: jest.fn(),
    } as unknown as Response;

    context = {
      switchToHttp: jest.fn().mockReturnValue({
        getResponse: jest.fn().mockReturnValue(response),
      }),
    } as unknown as ExecutionContext;

    const module: TestingModule = await Test.createTestingModule({
      providers: [CspGuard],
    }).compile();

    guard = module.get<CspGuard>(CspGuard);
  });

  describe('canActivate', () => {
    it('it should allow the request to proceed', () => {
      const result = guard.canActivate(context);
      expect(result).toBe(true);
    });

    it('it should set the Content-Security-Policy header correctly', () => {
      guard.canActivate(context);
      expect(response.setHeader).toHaveBeenCalledWith(
        'Content-Security-Policy',
        expect.stringContaining("default-src 'self'"),
      );
      expect(response.setHeader).toHaveBeenCalledWith(
        'Content-Security-Policy',
        expect.stringContaining(
          "connect-src 'self' https://swop.cx/rest https://restcountries.com/v3.1/alpha",
        ),
      );
    });
  });
});
