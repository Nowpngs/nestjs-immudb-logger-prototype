import { Injectable, OnModuleDestroy } from '@nestjs/common';
import ImmudbClient from 'immudb-node';

interface HistoryRequest {
  key: string;
  offset?: number;
  limit?: number;
  desc?: boolean;
  sincetx?: number;
}

interface SetRequest {
  key: string;
  value: string;
}

export interface HistoryResponse {
  entriesList: Entry[];
}

interface Entry {
  tx: number;
  key: string;
  value: string;
}

@Injectable()
export class ImmudbService {
  private client: ImmudbClient;

  constructor() {
    this.initConnection();
  }

  async initConnection(): Promise<void> {
    try {
      const client = new ImmudbClient({
        host: 'localhost',
        port: 3322,
      });
      await client.login({
        user: 'immudb',
        password: 'immudb',
      });
      this.client = client;
    } catch (error) {
      console.log(error);
    }
  }

  async logData(key: string, value: string): Promise<void> {
    const logReq: SetRequest = {
      key: key,
      value: value,
    };
    await this.client.set(logReq);
  }

  async getLogs(key: string): Promise<HistoryResponse> {
    const historyReq: HistoryRequest = {
      key: key,
      desc: true,
    };
    const logs = await this.client.history(historyReq);
    return logs;
  }
}
