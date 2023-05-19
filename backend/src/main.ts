import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
let cookieParser=require('cookie-parser');


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({origin:'http://localhost:4200',credentials:true}); 
  app.use(cookieParser())
  await app.listen(3000);
}
bootstrap();
