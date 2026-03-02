export interface Theme {
    id: number;
    name: string;
}

export interface ThemePayload extends Omit<Theme, 'id'> {}