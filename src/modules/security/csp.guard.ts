import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Response } from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class CspGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const response: Response = context.switchToHttp().getResponse();

    // Set the CSP headers
    response.setHeader('Content-Security-Policy', this.getCspPolicy());

    // Allow the request to proceed
    return true;
  }

  private getCspPolicy(): string {
    return `
      default-src 'self';
      connect-src 'self' ${process.env.SWOP_API_ENDPOINT} ${process.env.LOCALE_API_ENDPOINT};
      script-src 'self';
      style-src 'self';
      img-src 'self';
      font-src 'self';
      object-src 'none';
      base-uri 'self';
      frame-ancestors 'none';
      form-action 'self';
      upgrade-insecure-requests;
    `
      .replace(/\s{2,}/g, ' ')
      .trim(); // Clean up the policy string
  }
}
