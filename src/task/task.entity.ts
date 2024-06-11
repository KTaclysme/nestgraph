import { Table } from 'sequelize-typescript';
import { Task } from './task.model';

@Table
export class TaskEntity extends Task {
    userId: number;
    name: string;
    priority: number;
}
