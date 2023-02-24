import React, { FC } from 'react';
import { useFetchPokemonWithInfinityScroll } from './hooks/usePokemon';
import HomePage from '@/components/pages/HomePage';
import MyBeatLoader from '@/components/UI/molecules/BeatLoader';
import useFetchNextPage from './hooks/useFetchNextPage';
import Container from '@/components/UI/atoms/Container';

const IndexPage: FC = (): JSX.Element => {
  const { data, isSuccess, hasNextPage, fetchNextPage, isInitialLoading } =
    useFetchPokemonWithInfinityScroll();

  useFetchNextPage(hasNextPage, fetchNextPage);

  if (isInitialLoading) {
    return (
      <Container page="spinner">
        <MyBeatLoader loading={isInitialLoading} />
      </Container>
    );
  }

  if (isSuccess) {
    return <HomePage pokemonList={data} />;
  }

  return <></>;
};

export default IndexPage;
