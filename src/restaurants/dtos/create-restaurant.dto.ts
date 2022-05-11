/* eslint-disable prettier/prettier */
import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dtos/output.dto';
import { Restaurant } from '../entities/restaurants.entity';

@InputType()
export class CreateRestaurantInput extends PickType(Restaurant, ['name', 'address', 'coverImage']) {
  @Field(() => String)
  categoryName: string;
}


@ObjectType()
export class CreateRestaurantOutput extends CoreOutput {}