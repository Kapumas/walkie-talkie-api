import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserController } from './users/user.controller';
import { UserService } from './users/user.service';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [UserService],
})
export class AppModule {}
