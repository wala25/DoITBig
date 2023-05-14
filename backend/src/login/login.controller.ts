import { Controller, Post, Req,Get } from '@nestjs/common';

@Controller('api/login')
export class LoginController {

    @Post()
    login(@Req() req){
        console.log('called')
        console.log(req.body)
        return {id:'done'}
    }
    @Get()
    loginl(){
        console.log('called')
        
    }
    
}
