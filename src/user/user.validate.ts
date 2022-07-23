import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UsersService } from './user.service';

@ValidatorConstraint({ async: true })
export class IsUnique implements ValidatorConstraintInterface {
  constructor(private usersService: UsersService) {}

  async validate(text: any, args: ValidationArguments): Promise<boolean> {
    try {
      console.log(text);
      const user = await this.usersService.findOne(text);
      if (user) {
        return false;
      }
      return true;
    } catch (error) {
      throw error;
    }
  }

  defaultMessage(args: ValidationArguments) {
    return `username already existed!!!`;
  }
}
