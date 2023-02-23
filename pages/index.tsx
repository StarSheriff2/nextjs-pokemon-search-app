import React, { FC, useEffect } from 'react';
import useFetchPokemon, {
  useFetchPokemonWithInfinityScroll,
} from './hooks/usePokemon';
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

  const { data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useFetchPokemonWithInfinityScroll();

  console.log({ data });

  // if (isInitialLoading || pokemonIsLoading || isFetching || isRefetching) {
  //   return (
  //     <ContainerW1024 page="spinner">
  //       <MyBeatLoader loading={pokemonIsSuccess} />
  //     </ContainerW1024>
  //   );
  // }

  if (isSuccess) {
    return <HomePage pokemonList={data} />;
  }

  return <></>;
};

export default IndexPage;
