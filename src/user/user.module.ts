import { Module, forwardRef } from '@nestjs/common';
// import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { AppModule } from '../app.module';
import { UserResolver } from './user.resolvers';
@Module({
    // controllers: [UserResolver],
    imports: [forwardRef(() => AppModule)],
    providers: [UserResolver, UserService, UserRepository],
    exports: [UserResolver, UserService, UserRepository],
})
export class UserModule {}
