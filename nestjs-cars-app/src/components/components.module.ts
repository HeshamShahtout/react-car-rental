import { CarsModule } from '../components/cars/cars.module';
import { Module } from "@nestjs/common";

@Module({
  imports: [CarsModule]
})

export class ComponentsModule{

}