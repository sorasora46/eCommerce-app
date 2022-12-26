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

  @Get('/hello')
  getHello(): string {
    return this.usersService.getHello()
  }
}
