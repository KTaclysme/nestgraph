import { UserService } from './user.service';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { User } from './models/user.model';

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
    async deleteUser(@Args('id') id: number): Promise<User | null> {
        const deletedUser = await this.userService.deleteUser(id);
        return deletedUser; 
    }

    @Query((returns) => [User])
    async getAllUser(): Promise<User[]> {
        return await this.userService.getAllUserId();
    }
}
