import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailsService {

    hideEmail(email:String){
        let e=email.split('@')
        let s=e[0].split('')
        for(let i=0;i<s.length;i++){
            if(i!=0&&i!=s.length-1){
                s[i]='*'
            }
        }
        e[0]=s.join('')
        return e.join('@')
         
    }
}
