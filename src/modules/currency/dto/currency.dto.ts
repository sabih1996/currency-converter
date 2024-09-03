import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { convertStringToNumber } from '@/common/util/convert-to-number';

export class CurrencyDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  sourceCurrency: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  targetCurrency: string;

  @ApiProperty()
  @IsNotEmpty()
  @Transform(convertStringToNumber)
  @IsNumber()
  amount: number;
}
