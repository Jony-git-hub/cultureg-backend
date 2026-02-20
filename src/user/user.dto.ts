import type {User} from "./user.model";

export interface UserDto extends User {}


export interface AuthenticationUserDto extends User {
    password: string;
}

export interface CreateUserDto extends Omit<User, 'id'> {
    password: string;
}