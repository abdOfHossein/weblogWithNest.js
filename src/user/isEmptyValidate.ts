import { IsEmail, IsNotEmpty, IsEmpty } from 'class-validator';

export class CreatUserDto {
  @IsNotEmpty({message:'userName is emptyyyyyyy'})
  userName: string;

  @IsNotEmpty({message:'password is tooooooooooo empty'})
  password: string;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  phoneNumber: string;
}
