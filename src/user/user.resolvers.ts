import { UserService } from './user.service';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { User } from './models/user.model';
// import { UserToCreateDto } from './UserDto/UserToCreate.dto';

@Resolver((of) => User)
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Mutation((returns) => User)
    async addUser(@Args('email') email: string): Promise<User> {
        console.log('popo1');
        return this.userService.addUser(email);
    }

    @Query((returns) => User)
    async user(@Args('id') id: number): Promise<User> {
        return this.userService.getUserId(id);
    }

    @Query((returns) => User)
    getUser(@Args('email') email: string): Promise<User> {
        return this.userService.getUser(email);
    }

    //ajouter un delete
    // @Delete()
    // resetData() {
    //     return this.userService.resetData();
    // }
}
