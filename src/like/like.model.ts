import type {User} from "../user/user.model";
import type {Card} from "../card/card.model";

export interface Like {
    id: number;
}

export interface LikePayload extends Omit<Like, 'id'> {}