import { HttpException, HttpStatus } from '@nestjs/common';
import { ErrorCodes } from '../enum/error-codes.enum';

type CustomExceptionErrorCode = string | ErrorCodes;
export interface CustomException {
  (message?: string, code?: CustomExceptionErrorCode): HttpException;
}

export const BadRequestException: CustomException = (
  message?: string,
  code?: string,
) =>
  new HttpException(
    {
      status: HttpStatus.BAD_REQUEST,
      code: code || ErrorCodes.BAD_REQUEST,
      error: message,
    },
    HttpStatus.BAD_REQUEST,
  );

export const ConflictException: CustomException = (
  message?: string,
  code?: string,
) =>
  new HttpException(
    {
      status: HttpStatus.CONFLICT,
      code: code || ErrorCodes.CONFLICT,
      error: message,
    },
    HttpStatus.CONFLICT,
  );

export const NotFoundException: CustomException = (
  message?: string,
  code?: string,
) =>
  new HttpException(
    {
      status: HttpStatus.NOT_FOUND,
      code: code || ErrorCodes.NOT_FOUND,
      error: message,
    },
    HttpStatus.NOT_FOUND,
  );

export const ForbiddenException: CustomException = (
  message?: string,
  code?: string,
) =>
  new HttpException(
    {
      status: HttpStatus.FORBIDDEN,
      code: code || ErrorCodes.FORBIDDEN,
      error: message,
    },
    HttpStatus.FORBIDDEN,
  );

export const InternalServerException: CustomException = (
  message?: string,
  code?: string,
) =>
  new HttpException(
    {
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      code: code || ErrorCodes.INTERNAL_SERVER_ERROR,
      error: message,
    },
    HttpStatus.INTERNAL_SERVER_ERROR,
  );

export const UnauthorizedException: CustomException = (
  message?: string,
  code?: string,
) =>
  new HttpException(
    {
      status: HttpStatus.UNAUTHORIZED,
      code: code || ErrorCodes.UNAUTHORIZED,
      error: message,
    },
    HttpStatus.UNAUTHORIZED,
  );
