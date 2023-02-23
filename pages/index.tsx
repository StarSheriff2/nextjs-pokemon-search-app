import React, { FC, useEffect } from 'react';
import { useFetchPokemonWithInfinityScroll } from './hooks/usePokemon';
import HomePage from '@/components/pages/HomePage';
import ContainerW1024 from '@/components/UI/atoms/ContainerW1024';
import MyBeatLoader from '@/components/UI/molecules/BeatLoader';

const IndexPage: FC = (): JSX.Element => {
  // const {
  //   isLoading: pokemonIsLoading,
  //   isInitialLoading,
  //   isFetching,
  //   isRefetching,
  //   isSuccess: pokemonIsSuccess,
  //   data: pokemonList,
  // } = useFetchPokemon();

  const {
    data,
    isSuccess,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isInitialLoading,
  } = useFetchPokemonWithInfinityScroll();

  // data?.pages.map((p) => console.log('results: ', p.results));

  useEffect(() => {
    let fetching = false;
    const handleScroll = async (e: any) => {
      const { scrollHeight, scrollTop, clientHeight } =
        e.target.scrollingElement;
      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.2) {
        fetching = true;
        if (hasNextPage) await fetchNextPage();
        fetching = false;
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [fetchNextPage, hasNextPage]);

  if (isInitialLoading) {
    return (
      <ContainerW1024 page="spinner">
        <MyBeatLoader loading={isInitialLoading} />
      </ContainerW1024>
    );
  }

  if (isSuccess) {
    return <HomePage pokemonList={data} />;
  }

  return <></>;
};

export default IndexPage;
