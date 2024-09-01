import { Injectable } from '@nestjs/common';
import { randomBytes } from 'crypto';
import { CacheService } from '../cache/cache.service';
import { GenerateToken } from '../../common/interfaces/currency.interface';
@Injectable()
export class CurrencyService {
  constructor(private readonly cacheService: CacheService) {}

  async generateToken(): Promise<GenerateToken> {
    const csrfToken = randomBytes(32).toString('hex');
    await this.cacheService.set('csrf-token', csrfToken);
    return { csrfToken };
  }
}
