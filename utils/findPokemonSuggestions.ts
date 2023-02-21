import { ALL_POKEMON } from '@/constants/pokemonSpecies';

const findPokemonSuggestions = (query: string): Promise<string[]> => {
  return new Promise((resolve) => {
    const matchingPokemons = ALL_POKEMON.filter(({ name }) =>
      name.includes(query.toLowerCase())
    ).map(({ name }) => name);
    // Artificial timeout for demonstration purposes
    setTimeout(() => {
      resolve(matchingPokemons);
    }, 200);
  });
};

export default findPokemonSuggestions;
