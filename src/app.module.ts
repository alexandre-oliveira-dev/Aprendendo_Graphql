import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GqlModuleOptions, GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './aprendendo-graphql/app.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      useFactory: () => {
        const endpoint = 'graphql';
        const schemaModuleOptions: Partial<GqlModuleOptions> = {
          autoSchemaFile: true,
          sortSchema: true,
        };
        return {
          path: endpoint,
          playground: {
            endpoint: endpoint,
          },
          introspection: true,
          ...schemaModuleOptions,
        };
      },
    }),
    UsersModule,
  ],
})
export class AppModule {}
