import { User } from './models/user.model';

export class UserRepository {
    async addUser(email: string): Promise<User> {
        return await User.create({ email });
    }

    async getUserByEmail(email: string): Promise<User | null> {
        return await User.findOne({ where: { email } });
    }

    async getUserByUserId(userId: number): Promise<User | null> {
        return await User.findOne({ where: { id: userId } });
    }

    // async resetData() {
    //     return await User.destroy({ where: {}, truncate: true });
    // }
}
