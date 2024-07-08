import { Task } from './models/task.model';

export class TaskRepository {
    constructor() {}
    async addTask(name: string, userId: number, priority: number) {
        return await Task.create({ name, userId, priority });
    }

    async getTaskByName(name: string): Promise<Task | null> {
        return await Task.findOne({ where: { name } });
    }

    async getUserTasksById(): Promise<Task[]> {
        return await Task.findAll();
    }

    async deleteTask(name: string) {
        await Task.destroy({ where: {name} });
    }
}
