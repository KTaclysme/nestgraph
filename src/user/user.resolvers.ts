import { Param, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { Resolver } from '@nestjs/graphql';
import { User } from './models/user.model';

@Resolver((of) => User)
export class UserController {
    constructor(private readonly userService: UserService) {}

    // @Post()
    // addUser(@Body() userToCreateDto: UserToCreateDto) {
    //     return this.userService.addUser(userToCreateDto.email);
    // }

    @Query((returns) => User)
    getUser(@Param('email') email: string) {
        // return this.userService.getUser(email);
    }

    // @Delete()
    // resetData() {
    //     return this.userService.resetData();
    // }
}
