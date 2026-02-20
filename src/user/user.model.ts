// format reponse 
export interface User {
    id: number;
    email: string;
    pseudo: string;
    firstName: string;
    lastName: string;
    role: string;
    elo: number;
}

// format requete
export interface UserPayload extends Omit<User, 'id'> {
    password: string;
}