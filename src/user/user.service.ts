
import { Injectable, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }
  async addUser(userInfo: User): Promise<User> {

    const strData = userInfo.toString();
    const arrData = strData.split('&');
    const objData = {};
    for (const iterator of arrData) {
      objData[iterator.split('=')[0]] = iterator.split('=')[1];

    }

    const newUser: User = await this.usersRepository.save(objData);
    console.log(newUser);

    return newUser

  }


  async findAll(): Promise<User[]> {
    const users = await this.usersRepository.find();
    console.log(users);

    return users
  }


  async findOne(loginData: any): Promise<any> {
    try {
      const strData = loginData.toString();
      console.log(strData);

      const arrData = strData.split('&');
      console.log(arrData);
      let userName = '';
      for (const iterator of arrData) {

        if (iterator.split('=')[0] === 'userName') {
          console.log(iterator);
          userName = iterator.split('=')[1]
        }

      }
      console.log(userName);

      const user: User = await this.usersRepository.findOne(userName);
      const strData2 = user.toString();
      console.log(strData2);
      const arrData2 = strData2.split('&');
      const objData = {};
      for (const iterator of arrData2) {
        objData[iterator.split('=')[0]] = iterator.split('=')[1];

      }
      console.log(objData);


    } catch (error) {

      throw error
    }

  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
