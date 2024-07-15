/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MossaWhereInput } from "./MossaWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MossaListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MossaWhereInput,
  })
  @ValidateNested()
  @Type(() => MossaWhereInput)
  @IsOptional()
  @Field(() => MossaWhereInput, {
    nullable: true,
  })
  every?: MossaWhereInput;

  @ApiProperty({
    required: false,
    type: () => MossaWhereInput,
  })
  @ValidateNested()
  @Type(() => MossaWhereInput)
  @IsOptional()
  @Field(() => MossaWhereInput, {
    nullable: true,
  })
  some?: MossaWhereInput;

  @ApiProperty({
    required: false,
    type: () => MossaWhereInput,
  })
  @ValidateNested()
  @Type(() => MossaWhereInput)
  @IsOptional()
  @Field(() => MossaWhereInput, {
    nullable: true,
  })
  none?: MossaWhereInput;
}
export { MossaListRelationFilter as MossaListRelationFilter };
