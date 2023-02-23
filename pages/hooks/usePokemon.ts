import useStore from '@/store/useStore';
import findPokemonSuggestions from '@/utils/findPokemonSuggestions';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import api from '../api/pokemon';
import PokemonList, { PokemonData } from './types';

const FETCH_LIMIT = 9;

const fetchPokemon = async (offset: number) => {
  const { data } = await api.get<PokemonList>(
    `/pokemon?limit=${FETCH_LIMIT}&offset=${offset}`
  );
  return data;
};

export const searchPokemon = async (query: string) => {
  const { data } = await api.get<PokemonData>(`/pokemon/${query}/`);
  return data;
};

// const { data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage } =
//   useInfiniteQuery(
//     'repos',
//     ({ pageParam = 1 }) => fetchRepositories(pageParam),
//     {
//       getNextPageParam: (lastPage, allPages) => {
//         const nextPage = allPages.length + 1;
//         return nextPage;
//       },
//     }
//   );

export const useFetchPokemonWithInfinityScroll = () => {
  // const { setData } = useStore((state) => state);
  return useInfiniteQuery(
    ['pokemon'],
    ({ pageParam = 1 }) => fetchPokemon(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 1;
        return nextPage;
      },
      // onSuccess: (data) => setData(data),
    }
  );
  // return useQuery(['pokemon'], () => fetchPokemon(offset), {
  //   onSuccess: (data) => setData(data),
  // });
};

export const useFetchPokemon = (offset: number = 0) => {
  const { setData } = useStore((state) => state);
  return useQuery(['pokemon'], () => fetchPokemon(offset), {
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
