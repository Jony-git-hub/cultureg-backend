import type {Card} from "./card.model";

export interface CardDto extends Card{
    id: number;
    name: string;
    question: string;
    correctAnswer: string;
    wrongAnswer1: string;
    wrongAnswer2: string;
    wrongAnswer3: string;
}

export interface CreateCardDto extends Omit<Card, 'id'> {
    deckId: number;
}