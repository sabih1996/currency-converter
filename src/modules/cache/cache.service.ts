import { Injectable, OnModuleInit } from '@nestjs/common';
import { RedisClientType, createClient } from 'redis';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class CacheService implements OnModuleInit {
  private redisClient: RedisClientType;

  async onModuleInit() {
    this.redisClient = createClient({
      url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
      password: process.env.REDIS_PASSWORD,
    });

    this.redisClient.on('error', (err) =>
      console.error('Redis Client Error', err),
    );

    await this.redisClient.connect();
  }

  async get(key: string): Promise<number | null> {
    const value = await this.redisClient.get(key);
    return value ? parseFloat(value) : null;
  }

  async set(key: string, value: number): Promise<void> {
    await this.redisClient.set(key, value.toString(), { EX: 3600 });
  }
}
