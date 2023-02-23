import findPokemonSuggestions from '@/utils/findPokemonSuggestions';
import pokemonImgUrl from '@/utils/generatePokemonImageUrl';
import mapListResults from '@/utils/mapPokemonPaginatedResults';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import api from '../api/pokemon';
import PokemonList, { GenericItem, PokemonData, Result } from './types';

const FETCH_LIMIT = 9;

const fetchPokemon = async (offset: number) => {
  const { data } = await api.get<PokemonList>(
    `/pokemon?limit=${FETCH_LIMIT}&offset=${offset}`
  );
  data.results = mapListResults(data.results as Result[]);
  return data;
};

export const searchPokemon = async (query: string) => {
  const { data } = await api.get<PokemonData>(`/pokemon/${query}/`);
  return data;
};

export const useFetchPokemonWithInfinityScroll = () => {
  return useInfiniteQuery(
    ['pokemonList'],
    ({ pageParam = 0 }) => fetchPokemon(pageParam),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.next) {
          const url = new URL(lastPage.next!);
          return url.searchParams.get('offset');
        }
        return undefined;
      },
    }
  );
};

export const useSearchPokemon = (query: string) => {
  return useQuery(['searchPokemon', query], () => searchPokemon(query), {
    enabled: query.length > 0,
    staleTime: Infinity,
    retry: false,
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
