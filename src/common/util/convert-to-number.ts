import { TransformFnParams } from 'class-transformer';

export const convertStringToNumber = ({ value }: TransformFnParams) =>
  typeof value === 'string' ? Number(value) : value;
