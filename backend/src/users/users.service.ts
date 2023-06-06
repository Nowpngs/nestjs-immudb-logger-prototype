import { Injectable } from '@nestjs/common';
import { ImmudbService } from 'src/immudb/immudb.service';
import { CreateUserDTO } from './users.controller';

@Injectable()
export class UsersService {
  constructor(private loggerService: ImmudbService) {}

  async createUser(createUserDto: CreateUserDTO): Promise<string> {
    try {
      await this.loggerService.logData(
        'users',
        `create user ${createUserDto.name}`,
      );
      return 'This action add a new user';
    } catch (error) {
      return error;
    }
  }

  async getAllUsers(): Promise<string> {
    try {
      await this.loggerService.logData('users', 'get all users');
      return 'This action returns all users';
    } catch (error) {
      return error;
    }
  }
}
