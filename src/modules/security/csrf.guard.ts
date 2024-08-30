import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Request } from 'express';
import { CacheService } from '../cache/cache.service';

@Injectable()
export class CsrfGuard implements CanActivate {
  constructor(private readonly cacheService: CacheService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const csrfTokenFromHeader = request.headers['x-csrf-token'] as string;
    const csrfTokenFromCache = await this.cacheService.get('csrf-token');

    if (!csrfTokenFromHeader || !csrfTokenFromCache)
      throw new ForbiddenException('CSRF token is missing.');

    if (csrfTokenFromHeader !== String(csrfTokenFromCache))
      throw new ForbiddenException('Invalid CSRF token.');

    return true;
  }
}
