import { Controller, Get } from '@nestjs/common';
import { AppService } from './users.service';
import { UserEntity } from './entities/user.entity';

@Controller()
export class UsersController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<UserEntity[]> {
    const dataUser = await this.appService.findAll();

    console.log(dataUser.length);

    console.log(process.env.MONGO_HOST);
    return dataUser;
  }
}
