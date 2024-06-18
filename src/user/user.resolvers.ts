import { UserService } from './user.service';
import { Resolver, Query, Args, Mutation, Parent } from '@nestjs/graphql';
import { User } from './models/user.model';
// import { UserToCreateDto } from './UserDto/UserToCreate.dto';

@Resolver((of) => User)
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Mutation((returns) => User)
    async addUser(@Args('email') email: string): Promise<User> {
        return await this.userService.addUser(email);
    }

    @Query((returns) => User)
    async user(@Args('id') id: number): Promise<User> {
        return await this.userService.getUserId(id);
    }

    @Query((returns) => User)
    async getUser(@Args('email') email: string): Promise<User> {
        return await this.userService.getUser(email);
    }

    @Mutation((returns) => User)
    async deleteUser(@Args('id') id: number): Promise<number> {
        return await this.userService.deleteUser(id);
    }

    @Query((returns) => [User])
    async getAllUser(): Promise<User[]> {
        return await this.userService.getAllUserId();
    }
}
