import { LocaleApiResponse } from './interfaces/locale.interface';
import * as dotenv from 'dotenv';

dotenv.config();

export class LocaleManagerService {
  async getLocale(isoNumericCode: number) {
    const res: Response = await fetch(
      `${process.env.LOCALE_API_ENDPOINT}/${isoNumericCode}`,
    );

    // Parse the JSON data from the response
    const countryData: LocaleApiResponse = await res.json();
    const countryCode = countryData[0].cca2; // Alpha-2 country code
    const primaryLanguage = Object.keys(countryData[0].languages)[0]; // Primary language key

    const locale = `${primaryLanguage}-${countryCode}`;
    return locale;
  }
}
