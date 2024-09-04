import { Injectable, OnModuleInit } from '@nestjs/common';
import { RedisClientType, createClient } from 'redis';
import * as dotenv from 'dotenv';
import { BadRequestException } from '../../common/error/exception.service';

dotenv.config();

@Injectable()
export class CacheService implements OnModuleInit {
  private redisClient: RedisClientType;

  async onModuleInit() {
    this.redisClient = createClient({
      url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
      password: process.env.REDIS_PASSWORD,
    });

    this.redisClient.on('error', () => {
      throw BadRequestException('Redis client error');
    });

    await this.redisClient.connect();
  }

  async get(key: string): Promise<string | null> {
    return await this.redisClient.get(key);
  }

  async set(key: string, value: string): Promise<void> {
    await this.redisClient.set(key, value, { EX: 3600 });
  }
}
