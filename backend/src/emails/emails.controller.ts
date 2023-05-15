import { Controller, Get,Post,Req, Param,HttpException, HttpStatus } from '@nestjs/common';
import { allEmails } from './emails.database';
import { EmailsService } from './emails.service';

@Controller('api/emails')
export class EmailsController {
    constructor(private emailsService:EmailsService){}
    allEmails=allEmails

    @Get(':userId')
    getAllEmails(@Param() params ){
        
        let id=Number(params.userId)
        for (let e of this.allEmails){
            if(e.usrId===id){
                let emails=[...e.emails]
                for (let i=0;i<emails.length;i++){
                    emails[i].email=this.emailsService.hideEmail( emails[i].email)
                }
                return emails
            }
        }
        throw new HttpException('User not found',HttpStatus.NOT_FOUND)
    }
    @Get(':userId/:emailId')
    getOneEmail(@Param() params ){
        
        let userId=Number(params.userId)
        let emailId=Number(params.emailId)
        for (let e of this.allEmails){
            if(e.usrId===userId){
                for(let i of e.emails){
                    if(i.id===emailId){
                        let email={...i}
                        email.email=this.emailsService.hideEmail(i.email)
                        return email
                    }
                }
            }
        }
        throw new HttpException('Not found',HttpStatus.NOT_FOUND)
    }

    @Post('reply')
    submitResponse(@Req() req){
        let body=req.body
        let userId=Number(body.userId)
        let emailId=Number(body.emailId)
        for (let i=0;i<this.allEmails.length;i++ ){
            if(this.allEmails[i].usrId===userId){
                for(let j=0;j<this.allEmails[i].emails.length;j++){
                    if(this.allEmails[i].emails[j].id===emailId){
                        this.allEmails[i].emails[j].response=body.msg
                        let email={...this.allEmails[i].emails[j]}
                        email.email=this.emailsService.hideEmail(email.email)
                        return email
                    }
                }
            }
        }
        throw new HttpException('Unknown Error',HttpStatus.NOT_FOUND)

    }


}
