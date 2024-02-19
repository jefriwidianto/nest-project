import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './entities/user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<User[]> {
    const dataUser = await this.appService.findAll();

    console.log(dataUser);
    console.log(process.env.MONGO_HOST);
    return dataUser;
  }
}
