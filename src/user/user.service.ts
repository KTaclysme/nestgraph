import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserEntity } from './user.entity';
import { validationErrorCatcher } from '../errors/validationErrorCatcher';
import { ValidationError, ValidationErrorItem } from 'sequelize';
import { apiErrorCatcher } from '../errors/apiErrorCatcher';
import { ApiErrorEnum } from '../errors/enums/ErrorEnum';

@Injectable()
export class UserService {
    constructor(private readonly _userRepository: UserRepository) {}

    async addUser(email: string): Promise<UserEntity> {
        try {
            const newUser = await this._userRepository.addUser(email);
            return newUser;
        } catch (error) {
            console.log('erreur', { error });
            if (error instanceof ValidationError) {
                const validationErrorItems: ValidationErrorItem[] =
                    error.errors;
                validationErrorCatcher(validationErrorItems);
            }
        }
    }

    async getUser(email: string): Promise<UserEntity> {
        try {
            const user = await this._userRepository.getUserByEmail(email);
            return user;
        } catch (error) {
            throw error;
        }
    }
    async getUserId(userId: number): Promise<UserEntity> {
        const userIdParsed = String(userId);

        if (isNaN(parseInt(userIdParsed)) && typeof userId !== 'number') {
            apiErrorCatcher(ApiErrorEnum.USER_ID_BAD_TYPE);
        }

        const user = await this._userRepository.getUserByUserId(userId);

        if (!user) {
            apiErrorCatcher(ApiErrorEnum.USER_NULL);
        }
        return user;
    }

    async resetData(): Promise<void> {
        try {
            // await this._userRepository.resetData();
        } catch (error) {
            throw error;
        }
    }
}
