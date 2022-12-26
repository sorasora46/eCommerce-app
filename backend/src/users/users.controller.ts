import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('findusers')
  async findAll(): Promise<User[]> {
    return this.usersService.findAll()
  }

  @Get('/hello')
  getHello(): string {
    return this.usersService.getHello()
  }

}
