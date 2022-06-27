import {
  Controller,
  Get,
  Request,
  Response,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req, @Response() res) {
    const jwt = await this.authService.login(req.user);
    res.cookie('jwt_token', jwt.access_token, {
      expires: new Date(Date.now() + 1 * 3600000),
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    });
    res.send({ body: 'Success' });
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
