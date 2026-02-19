import type {User} from "./user.model";

export interface UserDto extends User {}

export interface CreateUserDto extends Omit<User, 'id'> {
    password: string;
}