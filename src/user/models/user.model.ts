import { Field, ObjectType } from '@nestjs/graphql';
import { Model, Table } from 'sequelize-typescript';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType({ description: 'user' })
@Table
export class User extends Model {
    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column('text', { nullable: false })
    email: string;
}
