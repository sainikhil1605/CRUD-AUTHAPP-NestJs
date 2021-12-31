import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/dto/users.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.usersService.findOne(email);

    if (user && user.password === password) {
      return user;
    }
    return null;
  }
  async generateJWT(user: User): Promise<{ access_token: string }> {
    return { access_token: this.jwtService.sign(user) };
  }
}
