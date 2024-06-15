import { UserService } from './user.service';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { User } from './models/user.model';
// import { UserToCreateDto } from './UserDto/UserToCreate.dto';

@Resolver(of => User)
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Mutation(returns => User)
    async addUser(@Args('email') email: string): Promise<User> {
        console.log('popo1 UserResolver', {email});
        return await this.userService.addUser(email);
    }

    @Query(returns => User)
    async user(@Args('id') id: number): Promise<User> {
        return await this.userService.getUserId(id);
    }

    @Query(returns => User)
    async getUser(@Args('email') email: string): Promise<User> {
        return await this.userService.getUser(email);
    }

    //ajouter un delete
    // @Delete()
    // resetData() {
    //     return this.userService.resetData();
    // }
}
