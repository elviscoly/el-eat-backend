/* eslint-disable prettier/prettier */
import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsString, Length } from 'class-validator';
import { CoreEntity } from 'src/common/entities/core.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToMany } from 'typeorm';
import { Category } from './category.entity';

@InputType('RestaurantInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class Restaurant extends CoreEntity {

  @Field(() => String)
  @Column()
  @IsString()
  @Length(5)
  name: string;

  @Field(() => String)
  @Column()
  @IsString()
  coverImage: string

  @Field(() => String, { defaultValue: 'get' })
  @Column()
  @IsString()
  address: string;

  @Field(() => Category, {nullable: true})
  @ManyToMany(() => Category, category => category.restaurants, {nullable: true, onDelete: 'SET NULL'})
  category: Category;

  @Field(() => User)
  @ManyToMany(() => User, user => user.restaurants, {onDelete: 'CASCADE'})
  owner: User;
}
