import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { Task } from './models/task.model';

@Resolver((of) => Task)
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Mutation(() => Task)
    async addTask(
        @Args('name') name: string,
        @Args('priority') priority: number,
        @Args('userId') userId: number,
      ): Promise<Task> {
        try {
            console.log('popo')
            return await this.taskService.addTask(name, priority, userId);
          } catch (error) {
            throw new Error(`Failed to create task: ${error.message}`);
          }
    }

  @Query(() => Task)
  async getTaskByName(@Args('name') name: string): Promise<Task> {
    return await this.taskService.getTaskByName(name);
  }

  @Query(() => [Task])
  async getUserTasks(): Promise<Task[]> {
    return await this.taskService.getUserTasks();
  }

  @Mutation(() => Task)
  async deleteTask(@Args('name') name: string): Promise<Task | null> {
    const deleteTask = await this.taskService.deleteTask(name);
    return deleteTask ;
  }
}
