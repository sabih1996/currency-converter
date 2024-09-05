import { Injectable } from '@nestjs/common';
import { InfluxDB, Point } from '@influxdata/influxdb-client';
import * as dotenv from 'dotenv';

dotenv.config();
@Injectable()
export class InfluxService {
  private influxDB: InfluxDB;
  private writeApi: any;

  constructor() {
    const url = process.env.INFLUX_URL || 'http://influxdb:8086';
    const token = process.env.INFLUX_TOKEN || 'adminpassword';
    const org = process.env.INFLUX_ORG || 'my-org';
    const bucket = process.env.INFLUX_BUCKET || 'currencydb';

    this.influxDB = new InfluxDB({ url, token });
    this.writeApi = this.influxDB.getWriteApi(org, bucket);
  }

  logConversion(
    sourceCurrency: string,
    targetCurrency: string,
    amount: number,
  ) {
    const point = new Point('currency_conversion')
      .tag('sourceCurrency', sourceCurrency)
      .tag('targetCurrency', targetCurrency)
      .floatField('amount', amount);

    this.writeApi.writePoint(point);
    this.writeApi.flush();
  }
}
