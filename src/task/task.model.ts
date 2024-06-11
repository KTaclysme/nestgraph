import {
    Column,
    DataType,
    // ForeignKey,
    Model,
    Table,
} from 'sequelize-typescript';
// import { User } from '../user/models/user.model';

@Table
export class Task extends Model {
    // @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
            min: 1,
        },
    })
    userId: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    })
    name: string;

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
