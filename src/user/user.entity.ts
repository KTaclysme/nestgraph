import { User } from './models/user.model';

export class UserEntity extends User {
    id: string;
    email: string;
}
