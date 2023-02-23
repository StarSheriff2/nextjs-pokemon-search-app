import React, { FC, useEffect } from 'react';
import { useFetchPokemonWithInfinityScroll } from './hooks/usePokemon';
import HomePage from '@/components/pages/HomePage';
import ContainerW1024 from '@/components/UI/atoms/ContainerW1024';
import MyBeatLoader from '@/components/UI/molecules/BeatLoader';
import useFetchNextPage from './hooks/useFetchNextPage';

const IndexPage: FC = (): JSX.Element => {
  const { data, isSuccess, hasNextPage, fetchNextPage, isInitialLoading } =
    useFetchPokemonWithInfinityScroll();

  useFetchNextPage(hasNextPage, fetchNextPage);

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
