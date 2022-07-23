import { IsNotEmpty, Validate } from 'class-validator';
import { IsUnique } from './user.validate';

export class CreatUserDto {
  @Validate(IsUnique, { message: 'username already existed!!!' })
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
