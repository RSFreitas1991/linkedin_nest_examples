import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from './config/environment-variables.dto';

@Injectable()
export class AppService {
  constructor(
    private readonly configService: ConfigService<EnvironmentVariables, true>,
  ) {}
  getHello(): Record<string, string | number> {
    const dbUser = this.configService.get<string>('DATABASE_USER');
    const dbPassword = this.configService.get<string>('DATABASE_PASSWORD');
    const port = this.configService.get<number>('PORT');
    return {
      dbUser,
      dbPassword,
      port,
    };
  }
}
