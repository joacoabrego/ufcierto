import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    try {
      const createdUser = await this.usersService.create({
        ...createUserDto,
        password: hashedPassword,
      });
      return createdUser;
    } catch (error) {
      //TODO Implement HTTP exceptions
      console.log(error);
    }
  }

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findUserByEmail(email);
    const validPassword = await bcrypt.compare(password, user.password);
    if (user && validPassword) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
