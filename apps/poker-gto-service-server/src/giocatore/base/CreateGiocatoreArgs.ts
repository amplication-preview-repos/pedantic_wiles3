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
import { GiocatoreCreateInput } from "./GiocatoreCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateGiocatoreArgs {
  @ApiProperty({
    required: true,
    type: () => GiocatoreCreateInput,
  })
  @ValidateNested()
  @Type(() => GiocatoreCreateInput)
  @Field(() => GiocatoreCreateInput, { nullable: false })
  data!: GiocatoreCreateInput;
}

export { CreateGiocatoreArgs as CreateGiocatoreArgs };
