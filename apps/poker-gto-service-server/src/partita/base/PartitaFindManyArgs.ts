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
import { PartitaWhereInput } from "./PartitaWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PartitaOrderByInput } from "./PartitaOrderByInput";

@ArgsType()
class PartitaFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PartitaWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PartitaWhereInput, { nullable: true })
  @Type(() => PartitaWhereInput)
  where?: PartitaWhereInput;

  @ApiProperty({
    required: false,
    type: [PartitaOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PartitaOrderByInput], { nullable: true })
  @Type(() => PartitaOrderByInput)
  orderBy?: Array<PartitaOrderByInput>;

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

export { PartitaFindManyArgs as PartitaFindManyArgs };
