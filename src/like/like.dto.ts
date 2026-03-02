import type {Deck} from "./like.model";
import type {UserDto} from "../user/user.dto";

export interface LikeDto extends Omit<Deck, 'user' | 'cards'> {
    user: UserDto
}

export interface CreateLikeDto extends Omit<Deck, 'id' | 'user' | 'cards'> {
    userId: number;
}