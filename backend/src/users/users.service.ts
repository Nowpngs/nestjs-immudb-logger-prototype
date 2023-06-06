import { Injectable } from '@nestjs/common';
import { ImmudbService } from 'src/immudb/immudb.service';

@Injectable()
export class UsersService {
  constructor(private loggerService: ImmudbService) {}
  async createUser() {
    try {
      await this.loggerService.logData('users', 'create user');
      return 'This action add a new user';
    } catch (error) {
      return error;
    }
  }

  async getAllUsers() {
    try {
      await this.loggerService.logData('users', 'get all users');
      return 'This action returns all users';
    } catch (error) {
      return error;
    }
  }
}
