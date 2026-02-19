import type {Deck} from "./deck.model";
import type {UserDto} from "../user/user.dto";

export interface DeckDto extends Omit<Deck, 'user' | 'cards'> {
    user: UserDto
}

export interface CreateDeckDto extends Omit<Deck, 'id' | 'user' | 'cards'> {
    userId: number;
}