import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/:email')
  async findOne(@Param('email') email: string) {
    const foundUser = await this.usersService.findUserByEmail(email);
    console.log(foundUser);
    return foundUser;
  }
}
