import type {User} from "../user/user.model";

export interface Card {
    id: number;
    name: string;
    question: string;
    correctAnswer: string;
    wrongAnswer1: string;
    wrongAnswer2: string;
    wrongAnswer3: string;
}

export interface CardPayload extends Omit<Card, 'id'> {}