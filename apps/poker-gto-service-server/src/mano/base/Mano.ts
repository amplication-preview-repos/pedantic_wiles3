/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

import {
  IsString,
  IsDate,
  MaxLength,
  IsOptional,
  IsNumber,
  Min,
  Max,
  ValidateNested,
} from "class-validator";

import { Type } from "class-transformer";
import { Giocatore } from "../../giocatore/base/Giocatore";
import { Mossa } from "../../mossa/base/Mossa";

@ObjectType()
class Mano {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  carte!: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  puntata!: number | null;

  @ApiProperty({
    required: false,
    type: () => Giocatore,
  })
  @ValidateNested()
  @Type(() => Giocatore)
  @IsOptional()
  giocatore?: Giocatore | null;

  @ApiProperty({
    required: false,
    type: () => [Mossa],
  })
  @ValidateNested()
  @Type(() => Mossa)
  @IsOptional()
  mossas?: Array<Mossa>;
}

export { Mano as Mano };