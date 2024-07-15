/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ManoWhereInput } from "./ManoWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ManoOrderByInput } from "./ManoOrderByInput";

@ArgsType()
class ManoFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ManoWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ManoWhereInput, { nullable: true })
  @Type(() => ManoWhereInput)
  where?: ManoWhereInput;

  @ApiProperty({
    required: false,
    type: [ManoOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ManoOrderByInput], { nullable: true })
  @Type(() => ManoOrderByInput)
  orderBy?: Array<ManoOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ManoFindManyArgs as ManoFindManyArgs };
