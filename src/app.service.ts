import { Injectable } from '@nestjs/common';
import { Req,Res } from '@nestjs/common';


@Injectable()
export class AppService {
  

    who():string{
        return 'behzad'
    }
}
