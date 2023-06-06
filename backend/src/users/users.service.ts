import { Injectable } from '@nestjs/common';
import { ImmudbService } from 'src/immudb/immudb.service';

@Injectable()
export class UsersService {
  constructor(private loggerService: ImmudbService) {}
  async createUser() {
    return 'This action adds a new user';
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
