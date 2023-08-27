import { AppService } from './app.service';
import { Resolver, Query } from '@nestjs/graphql';
import { HelloType } from './dto/app.output';

@Resolver(() => HelloType)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Query(() => HelloType, { name: 'teste' })
  getHello() {
    return HelloType;
  }
}
