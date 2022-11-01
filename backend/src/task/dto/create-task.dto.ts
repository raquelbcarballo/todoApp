import { ApiProperty } from "@nestjs/swagger";

export class CreateTaskDto {

    @ApiProperty()
    readonly id: string;

    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly priority: string;

    constructor(id: string, name: string, priority: string) {
        this.id = id;
        this.name = name;
        this.priority = priority;
    }
}
