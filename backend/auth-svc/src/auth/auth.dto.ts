import { IsEmail, IsString } from 'class-validator';
import {
  LoginRequest,
  RegisterRequest,
  ValidateRequest,
} from './types/auth.pb';

export class LoginRequestDto implements LoginRequest {
  @IsEmail()
  public readonly email: string;

  @IsString()
  public readonly password: string;
}

export class RegisterRequestDto implements RegisterRequest {
  @IsEmail()
  public readonly email: string;

  @IsString()
  public readonly password: string;
}

export class ValidateRequestDto implements ValidateRequest {
  @IsString()
  public readonly token: string;
}
