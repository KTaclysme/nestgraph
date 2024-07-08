import { Module, forwardRef } from '@nestjs/common';
import { TaskService } from './task.service';
import { AppModule } from '../app.module';
import { TaskRepository } from './task.repository';
import { TaskResolver } from './task.resolvers';

@Module({
    imports: [forwardRef(() => AppModule)],
    providers: [TaskResolver,TaskService, TaskRepository],
    exports: [TaskResolver, TaskService, TaskRepository],
})
export class TaskModule {}
