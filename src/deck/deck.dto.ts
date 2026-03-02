import type {Deck} from "./deck.model";
import type {UserDto} from "../user/user.dto";
import type {ThemeDto} from "../theme/theme.dto";
import type {CardDto} from "../card/card.dto";
import type {LanguageDto} from "../languages/language.dto";

export interface DeckDto extends Omit<Deck, 'user' | 'cards' | 'language'> {
    user: UserDto;
    theme: ThemeDto;
    cards: CardDto[];
    language: LanguageDto;
}

export interface CreateDeckDto extends Omit<Deck, 'id' | 'user' | 'cards' | 'theme' | 'language'> {
    userId: number;
    themeId: number;
    languageId: number;
}