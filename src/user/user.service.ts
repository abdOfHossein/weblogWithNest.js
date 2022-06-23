
import { Injectable, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatUserDto } from './isEmptyValidate';
import { User } from './user.entity';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }
  async addUser(userInfo:CreatUserDto): Promise<User | Object> {

    try {

      const strData = userInfo.toString();
      const arrData = strData.split('&');
      let objData:any = {};
      let err = {};
      for (const iterator of arrData) {
        objData[iterator.split('=')[0]] = iterator.split('=')[1];

      }





      // const existUserName = await this.usersRepository.findOne({ userName: objData.userName });
      // if (existUserName) {
      //   err['msg'] = 'this userName already existed'
      //   console.log(err);
      //   return err
      // }
      const newUser: User = await this.usersRepository.save(objData);
      console.log(newUser);
      return newUser

    } catch (error) {
      console.log(`err of addUser in service:${error}`);

    }

  }


  async findAll(): Promise<User[]> {
    const users = await this.usersRepository.find();
    console.log(users);

    return users
  }


  async findOne(loginData: any): Promise<any> {
    try {

      const strData = loginData.toString();
      const arrData = strData.split('&');
      let userName = '';
      for (const iterator of arrData) {

        if (iterator.split('=')[0] === 'userName') {
          userName = iterator.split('=')[1]
        }

      };
      const user: User = await this.usersRepository.findOne({ userName });
      return user


    } catch (error) {

      throw error
    }

  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
