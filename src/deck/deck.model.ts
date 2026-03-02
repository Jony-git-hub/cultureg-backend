import type {User} from "../user/user.model";
import type {Card} from "../card/card.model";
import type {Theme} from "../theme/theme.model";
import type {Language} from "../languages/language.model";

export interface Deck {
    id: number;
    name: string;
    timestamp: number;
    user: User;
    cards: Card[];
    theme: Theme;
    language: Language;
}

export interface DeckPayload extends Omit<Deck, 'id'> {}