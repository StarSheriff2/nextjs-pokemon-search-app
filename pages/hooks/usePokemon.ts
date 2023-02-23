import findPokemonSuggestions from '@/utils/findPokemonSuggestions';
import pokemonImgUrl from '@/utils/generatePokemonImageUrl';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import api from '../api/pokemon';
import PokemonList, { GenericItem, PokemonData } from './types';

const FETCH_LIMIT = 9;
export const IMG_URL_KEY = 'imgUrl';
export const IMG_ALT_KEY = 'imgAlt';
export const LINK_PATH_KEY = 'linkPath';

const fetchPokemon = async (offset: number) => {
  const { data } = await api.get<PokemonList>(
    `/pokemon?limit=${FETCH_LIMIT}&offset=${offset}`
  );

  const mappedResults: GenericItem[] = data.results.map((item) => ({
    ...item,
    name: `${item.name.slice(0, 1).toUpperCase() + item.name.slice(1)}`,
    [IMG_URL_KEY]: pokemonImgUrl(item.name),
    [LINK_PATH_KEY]: `/pokemon/${encodeURIComponent(item.name)}`,
    [IMG_ALT_KEY]: `${item.name} artwork`,
  }));

  data.results = mappedResults;

  console.log({ data });
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
