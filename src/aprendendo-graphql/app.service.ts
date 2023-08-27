import { Injectable } from '@nestjs/common';
import { Args } from '@nestjs/graphql';
import { prismaclient } from 'src/prismaClient';
import { CreateOneUsersArgs, FindManyUsersArgs } from 'src/prisma/@generated';

@Injectable()
export class AppService {
  getUsers(@Args() args: FindManyUsersArgs) {
    return prismaclient.users.findMany(args);
  }

  createUsers(@Args() args: CreateOneUsersArgs) {
    return prismaclient.users.create(args);
  }
}
