import { Injectable } from '@nestjs/common';
import ImmudbClient from 'immudb-node';

@Injectable()
export class ImmudbService {
  private client: ImmudbClient;

  constructor() {
    this.client = new ImmudbClient({
      host: 'localhost',
      port: 3322,
    });

    this.client.login({
      user: 'immudb',
      password: 'immudb',
    });
  }

  async logData(key: string, value: string): Promise<void> {
    await this.client.set({ key, value });
  }

  async getLogs(key: string): Promise<any> {
    const logs = await this.client.get({ key: key });
    return logs;
  }
}
