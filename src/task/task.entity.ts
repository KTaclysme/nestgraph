import { Table } from 'sequelize-typescript';
import { Task } from './models/task.model';

@Table
export class TaskEntity extends Task {
    userId: number;
    name: string;
    priority: number;
}
