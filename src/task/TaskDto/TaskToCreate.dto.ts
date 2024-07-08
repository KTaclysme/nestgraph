import { InputType, Field, Int, Float } from '@nestjs/graphql';

@InputType()
export class TaskToCreateDto {
  @Field()
  name: string;

  @Field(() => Int)
  userId: number;

  @Field(() => Float)
  priority: number;
}