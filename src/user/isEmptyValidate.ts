import { IsEmail, IsNotEmpty, IsEmpty } from 'class-validator';

export class CreatUserDto {
  @IsNotEmpty()
  userName: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  phoneNumber: string;
}
