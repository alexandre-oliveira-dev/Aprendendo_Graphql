import { ObjectType } from '@nestjs/graphql';
import { Prisma, Users } from '@prisma/client';

@ObjectType()
class UsersModel extends Prisma. {}

@ObjectType()
export class UsersOutput {
  UsersModel;
}
