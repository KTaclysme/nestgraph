import { Injectable } from '@nestjs/common';
import { TaskRepository } from './task.repository';
import { TaskEntity } from './task.entity';
import { ValidationError, ValidationErrorItem } from 'sequelize';
import { validationErrorCatcher } from '../errors/validationErrorCatcher';
import { UserService } from '../user/user.service';
@Injectable()
export class TaskService {
    constructor(
        private readonly _taskRepository: TaskRepository,
        private readonly _userService: UserService,
    ) {}

    async addTask(
        name: string,
        userId: number,
        priority: number,
    ): Promise<TaskEntity> {
        try {
            console.log('popo1')
            const newTask = await this._taskRepository.addTask(
                name,
                userId,
                priority,
            );            
            console.log({newTask})
            return newTask;
        } catch (error) {
            console.log('popo2')
            console.log({error})
            if (error instanceof ValidationError) {
                const validationErrorItems: ValidationErrorItem[] =
                    error.errors;
                validationErrorCatcher(validationErrorItems);
            }
        }
    }

    async getTaskByName(name: string): Promise<TaskEntity> {
        try {
            return await this._taskRepository.getTaskByName(name);
        } catch (error) {
            throw error;
        }
    }

    async getUserTasks(): Promise<TaskEntity[]> {
        try {
            const tasks: TaskEntity[] =
                await this._taskRepository.getUserTasksById();
            return tasks;
        } catch (error) {
            throw error;
        }
    }

    async deleteTask(name: string): Promise<TaskEntity | null> {
        const taskToDelete = await this._taskRepository.getTaskByName(name);
        if (!taskToDelete) {
            return null; 
        }
        await this._taskRepository.deleteTask(name);
        return taskToDelete
    }
}
