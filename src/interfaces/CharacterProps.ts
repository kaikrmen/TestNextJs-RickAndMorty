export interface CharacterProps {
    id: number;
    name: string;
    species: string;
    status: string;
    image: string;
}

export type Characters = CharacterProps[];
