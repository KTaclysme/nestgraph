import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserToCreateDto } from './UserDto/UserToCreate.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    addUser(@Body() userToCreateDto: UserToCreateDto) {
        return this.userService.addUser(userToCreateDto.email);
    }

    @Get(':email')
    getUser(@Param('email') email: string) {
        return this.userService.getUser(email);
    }

    @Delete()
    resetData() {
        return this.userService.resetData();
    }
}
