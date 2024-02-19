import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User)
    private readonly user: Repository<User>,
  ) {}

  public async findAll(): Promise<User[]> {
    return await this.user.find();
  }

  getHello(): string {
    return 'Hello Jefri';
  }
}
