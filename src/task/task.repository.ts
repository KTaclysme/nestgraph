import { Task } from './task.model';

export class TaskRepository {
    constructor() {}
    async addTask(name: string, userId: number, priority: number) {
        return await Task.create({ name, userId, priority });
    }

    async getTaskByName(name: string): Promise<Task | null> {
        return await Task.findOne({ where: { name } });
    }

    async getUserTasksById(userId: number): Promise<Task[]> {
        return await Task.findAll({ where: { userId } });
    }

    async resetData() {
        return await Task.destroy({ where: {}, truncate: true });
    }
}
