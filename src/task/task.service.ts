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
            const newTask = await this._taskRepository.addTask(
                name,
                userId,
                priority,
            );
            return newTask;
        } catch (error) {
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

    async getUserTasks(userId: number): Promise<TaskEntity[]> {
        await this._userService.getUserId(userId);

        try {
            const tasks: TaskEntity[] =
                await this._taskRepository.getUserTasksById(userId);
            return tasks;
        } catch (error) {
            throw error;
        }
    }

    async resetData(): Promise<void> {
        try {
            await this._taskRepository.resetData();
        } catch (error) {
            throw error;
        }
    }
}
