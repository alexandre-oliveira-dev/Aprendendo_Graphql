import { AppService } from './app.service';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import {
  CreateOneUsersArgs,
  FindManyUsersArgs,
  Users,
} from 'src/prisma/@generated';

@Resolver(() => Users)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Query(() => Users, { name: 'teste' })
  getHello(@Args() args: FindManyUsersArgs) {
    return this.appService.getUsers(args);
  }

  @Mutation(() => Users, { name: 'create' })
  createUser(@Args() args: CreateOneUsersArgs) {
    return this.appService.createUsers(args);
  }
}
