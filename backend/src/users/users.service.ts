import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  async createUser() {
    return 'This action adds a new user';
  }

  async getAllUsers() {
    return 'This action returns all users';
  }
}
