import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto) {
    return this.usersService.createUser();
  }

  @Get('all')
  async getAllUsers() {
    return this.usersService.getAllUsers();
  }
}
