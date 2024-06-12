import { User } from './models/user.model';

export class UserEntity extends User {
    id: number;
    email: string;
}
