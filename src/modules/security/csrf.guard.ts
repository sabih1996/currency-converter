import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { CacheService } from '../cache/cache.service';
import {
  BadRequestException,
  ForbiddenException,
} from '../../common/error/exception.service';

@Injectable()
export class CsrfGuard implements CanActivate {
  constructor(private readonly cacheService: CacheService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const csrfTokenFromHeader = request.headers['x-csrf-token'] as string;
    const csrfTokenFromCache = await this.cacheService.get('csrf-token');

    if (!csrfTokenFromHeader || !csrfTokenFromCache)
      throw BadRequestException('CSRF token is missing.');

    if (csrfTokenFromHeader !== String(csrfTokenFromCache))
      throw ForbiddenException('Invalid CSRF token.');

    return true;
  }
}
