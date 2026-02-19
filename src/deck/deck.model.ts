import type {User} from "../user/user.model";
import type {Card} from "../card/card.model";

export interface Deck {
    id: number;
    name: string;
    timestamp: number;
    user: User;
    cards: Card[];
}

export interface DeckPayload extends Omit<Deck, 'id'> {}