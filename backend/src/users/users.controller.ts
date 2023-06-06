import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

export interface CreateUserDTO {
  name: string;
}
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDTO): Promise<string> {
    return this.usersService.createUser(createUserDto);
  }

  @Get('all')
  async getAllUsers(): Promise<string> {
    return this.usersService.getAllUsers();
  }
}
