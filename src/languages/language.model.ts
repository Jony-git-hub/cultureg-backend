export interface Language {
    id: number;
    code: string;
    name: string;
}

export interface LanguagePayload extends Omit<Language, 'id'> {}