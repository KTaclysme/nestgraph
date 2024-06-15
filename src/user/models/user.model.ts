import { Field, ObjectType } from '@nestjs/graphql';
import { Model, Table, Column, AutoIncrement, PrimaryKey } from 'sequelize-typescript';

@Table
@ObjectType({ description: 'user' })
export class User extends Model {
    @Field()
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Field()
    @Column({
        type: 'text',
        allowNull: false
    })
    email: string;
}
