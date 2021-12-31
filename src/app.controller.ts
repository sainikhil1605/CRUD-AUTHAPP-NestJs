import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { LocalGuard } from './auth/guards/local.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Get('/hello')
  async hello() {
    return 'Hello World!';
  }
  @UseGuards(LocalGuard)
  @Post('/login')
  async login(@Request() req): Promise<{ access_token: string }> {
    const token = await this.authService.generateJWT(req.user);
    return token;
  }
}
