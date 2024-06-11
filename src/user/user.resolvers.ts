import { UserService } from './user.service';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { User } from './models/user.model';
import { UserToCreateDto } from './UserDto/UserToCreate.dto';

@Resolver((of) => User)
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    // @Post()
    // addUser(@Body() userToCreateDto: UserToCreateDto) {
    //     return this.userService.addUser(userToCreateDto.email);
    // }
    @Mutation(returns => User)
    async addUser(@Args('email') email :string): Promise<User> {
        //return this.userService.addUser(email);
    }
    
    @Query(returns => User)
  async user(@Args('id') id: string): Promise<User> {
    // return this.userService.findById(id);
  }

    @Query(returns => User)
    getUser(@Args('email') email: string): Promise<User> {
        // return this.userService.getUser(email);
    }

    
    // @Delete()
    // resetData() {
    //     return this.userService.resetData();
    // }
}
