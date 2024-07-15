/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { MossaWhereUniqueInput } from "../../mossa/base/MossaWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MossaUpdateManyWithoutGiocatoresInput {
  @Field(() => [MossaWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MossaWhereUniqueInput],
  })
  connect?: Array<MossaWhereUniqueInput>;

  @Field(() => [MossaWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MossaWhereUniqueInput],
  })
  disconnect?: Array<MossaWhereUniqueInput>;

  @Field(() => [MossaWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MossaWhereUniqueInput],
  })
  set?: Array<MossaWhereUniqueInput>;
}

export { MossaUpdateManyWithoutGiocatoresInput as MossaUpdateManyWithoutGiocatoresInput };
