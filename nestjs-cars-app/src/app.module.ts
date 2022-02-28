import { ComponentsModule } from './components/components.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, GraphQLModule.forRoot<ApolloDriverConfig>({
    playground: true,
    debug: true,
    autoSchemaFile: true,
    driver: ApolloDriver,
    cors: {
      origin: 'http://localhost:3000',
      credentials: true,
    },
  }),
  ComponentsModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
