import useStore from '@/store/useStore';
import findPokemonSuggestions from '@/utils/findPokemonSuggestions';
import { useQuery } from '@tanstack/react-query';
import api from '../api/pokemon';
import PokemonList, { PokemonData } from './types';

const fetchPokemon = async () => {
  const { data } = await api.get<PokemonList>('/pokemon?limit=10');
  return data;
};

export const searchPokemon = async (query: string) => {
  const { data } = await api.get<PokemonData>(`/pokemon/${query}/`);
  return data;
};

const useFetchPokemon = () => {
  const { setData } = useStore((state) => state);
  return useQuery(['pokemon'], fetchPokemon, {
    onSuccess: (data) => setData(data),
  });
};

export const useSearchPokemon = (query: string) => {
  return useQuery(['searchPokemon', query], () => searchPokemon(query), {
    enabled: query.length > 0,
    staleTime: Infinity,
  });
};

export const useFindPokemonSuggestions = (slug: string) => {
  return useQuery(
    ['findPokemonSuggestions', slug],
    () => findPokemonSuggestions(slug),
    {
      enabled: slug.length > 0,
    }
  );
};

export default useFetchPokemon;
