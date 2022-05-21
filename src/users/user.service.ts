import { Injectable } from '@nestjs/common';
import { getUserList } from 'src/utils/faker';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  getAll(): User[] {
    return getUserList();
  }
  create(user: User) {}
}
