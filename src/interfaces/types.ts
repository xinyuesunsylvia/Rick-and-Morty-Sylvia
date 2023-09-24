export interface HeaderProps {
  title: string;
}
export interface Character {
  id: number;
  name: string;
  image: string;
}

export interface CardListProps {
  currPage: number;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
}

export interface CharacterDetailProps extends Character {
  status: string;
  species: string;
  origin: {
    name: string;
    url: string;
  };
  episode: string[];
}
