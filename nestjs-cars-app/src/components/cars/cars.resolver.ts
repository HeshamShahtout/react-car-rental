import { InternalServerErrorException } from '@nestjs/common';
import { NewCarInput } from './dto/new-car.input';
import { Car } from './entities/car';
import { CarsService } from './cars.services';
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class CarsResolver{
  constructor(private carsService: CarsService){}

  @Query(returns =>[Car])
  public async cars(): Promise<Car[]>{
    return await this.carsService.getAllCars().catch((err) => {
      throw err;
    })
  }

  @Mutation(returns => Car)
  public async addNewCar(@Args("newCarData") newcarData: NewCarInput): Promise<Car> {
    return await this.carsService.addCar(newcarData).catch(err =>{
      throw err;
    })
  }
}