export interface Pokemon {
  name: string;
  image: string;
  imageBack: string;
  type: PokemonType[];
}

export interface PokemonType {
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonCardProps {
  pokemon: Pokemon;
  index: number;
}

export interface PokemonDetail {
  name: string;
  image: string;
  forms: string[];
  height: number;
  weight: number;
  type: PokemonType[];
  imageBack: string;
  stat: any;
  abilities: AbilitySlot[];
}

export interface AbilitySlot {
  ability: {
    name: string;
    url: string;
  };
}

export interface PokemonEffects {
  effect_entries: {
    effect: string;
    language: {
      name: string;
    };
  }[];
}
