import { Module, forwardRef } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { AppModule } from '../app.module';
import { TaskRepository } from './task.repository';

@Module({
    controllers: [TaskController],
    imports: [forwardRef(() => AppModule)],
    providers: [TaskService, TaskRepository],
    exports: [TaskService, TaskRepository],
})
export class TaskModule {}
