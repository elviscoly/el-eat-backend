/* eslint-disable prettier/prettier */
import { Field, InputType, Int, ObjectType, PartialType } from "@nestjs/graphql";
import { CoreOutput } from "src/common/dtos/output.dto";
import { CreateRestaurantInput } from "./create-restaurant.dto";


@InputType()
export class EditRestaurantInput extends PartialType(CreateRestaurantInput) {
  @Field(() => Int)
  restaurantId: number;
}


@ObjectType()
export class EditRestaurantOutput extends CoreOutput {}