import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
class StartPartitaDto {
    @Field(() => [String])
    @ApiProperty({
        required: true,
        type: () => [String]
    })
    @Type(() => String)
    giocatori!: string;

    @Field(() => Date)
    @Type(() => Date)
    data!: Date;
}

export { StartPartitaDto as StartPartitaDto };