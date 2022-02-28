import { Car } from './entities/car';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsResolver } from './cars.resolver';
import { CarsService } from './cars.services';
import { Module } from "@nestjs/common";

@Module({
  imports: [TypeOrmModule.forFeature([Car])],
  providers: [CarsService, CarsResolver],
  exports: [CarsService]
})

export class CarsModule {

}