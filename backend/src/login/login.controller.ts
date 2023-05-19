import { Controller, Post, Req,Get, HttpException,HttpStatus, Res } from '@nestjs/common';
import { users } from './users.database';

@Controller('api/login')
export class LoginController {

   users=users

    @Post()
    login(@Req() req,@Res({passthrough:true}) res){
        let user=req.body;
        for (let u of this.users){
            if(user.username===u.username){
                res.cookie('user',u.id)
                if (user.password===u.password) return {id:u.id}
                else{
                    throw new HttpException('Wrong password',HttpStatus.UNAUTHORIZED)
                }
            }
        }
        throw new HttpException("This user dosen't existe",HttpStatus.UNAUTHORIZED)
    }
    
}
