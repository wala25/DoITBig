import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { EmailsModule } from './emails/emails.module';

@Module({
  imports: [LoginModule, EmailsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
