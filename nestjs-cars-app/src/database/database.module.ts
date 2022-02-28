import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { async } from 'rxjs';
import { Connection, getConnectionOptions } from 'typeorm';

@Module({
  imports:[TypeOrmModule.forRootAsync({
    useFactory: async() => (
      Object.assign(await getConnectionOptions(process.env.NODE_ENV === "production" ? "prod" : "default"))
    )
  })],
  exports:[TypeOrmModule]
})

export class DatabaseModule{
  constructor(connection: Connection) {
    if(connection.isConnected) console.log("DB Connected Successfully!")
  }
}