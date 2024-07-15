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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ManoListRelationFilter } from "../../mano/base/ManoListRelationFilter";
import { MossaListRelationFilter } from "../../mossa/base/MossaListRelationFilter";

@InputType()
class GiocatoreWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  nome?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  saldo?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ManoListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ManoListRelationFilter)
  @IsOptional()
  @Field(() => ManoListRelationFilter, {
    nullable: true,
  })
  manos?: ManoListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => MossaListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MossaListRelationFilter)
  @IsOptional()
  @Field(() => MossaListRelationFilter, {
    nullable: true,
  })
  mossas?: MossaListRelationFilter;
}

export { GiocatoreWhereInput as GiocatoreWhereInput };
