import { Controller, Get, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.schema';
import { NotFoundException } from '@nestjs/common/exceptions';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('findall')
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get('/findone')
  async findOne(
    @Body('username') username: string,
    @Body('email') email: string,
  ): Promise<User | NotFoundException> {
    try {
      let user: User | NotFoundException;
      if (username) user = await this.usersService.findOne(username);
      if (email) user = await this.usersService.findOne(email);
      return user;
    } catch (error) {
      return error 
    }
  }
}
