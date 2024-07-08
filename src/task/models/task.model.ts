import { Field, ObjectType } from '@nestjs/graphql';
import {
    Column,
    DataType,
    Model,
    Table,
} from 'sequelize-typescript';


@Table
@ObjectType({ description: 'task' })
export class Task extends Model {
    @Field()
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
            min: 1,
        },
    })
    userId: number;

    @Field()
    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    })
    name: string;

    @Field()
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
            min: 1,
            max: 10,
        },
    })
    priority: number;
}
