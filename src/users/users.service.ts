import { Injectable } from '@nestjs/common';
import { User } from './dto/users.dto';

@Injectable()
export class UsersService {
  users: User[] = [
    {
      id: 1,
      email: 'nikhil',
      password: 'nikhil',
    },
    {
      id: 2,
      email: 'vatti',
      password: 'vatti',
    },
  ];
  async findOne(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }
}
