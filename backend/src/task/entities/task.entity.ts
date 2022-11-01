import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tasks')
export class TaskEntity {

    @PrimaryGeneratedColumn("uuid")
    readonly taskId: string;

    @Column({
        unique: true
    })
    readonly name: string;

    @Column({
        unique: true
    })
    readonly priority: string;

    constructor(taskId: string, name: string, priority: string) {
        this.taskId = taskId;
        this.name = name;
        this.priority = priority;
    }

}