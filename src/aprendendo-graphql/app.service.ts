import { Injectable } from '@nestjs/common';
import { Args } from '@nestjs/graphql';
import { prismaclient } from 'src/prismaClient';
import { Prisma } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private readonly service: typeof prismaclient) {}
  getHello(@Args() args: Prisma.UsersFindManyArgs) {
    return this.service.users.findMany(args);
  }
}
