import React, { CSSProperties, FC } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { searchPokemon, useSearchPokemon } from '@/pages/hooks/usePokemon';
import PokemonDetailsPage from '@/components/pages/PokemonDetails';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import ContainerW1024 from '@/components/UI/atoms/ContainerW1024';
import MyBeatLoader from '@/components/UI/molecules/BeatLoader';

const PokemonDetails: FC = (): JSX.Element => {
  const router = useRouter();
  const pokemonName =
    typeof router.query?.name === 'string' ? router.query.name : '';

  const {
    isSuccess: pokemonIsSuccess,
    data: pokemonDetails,
    isInitialLoading,
    isLoading,
    isFetching,
    isRefetching,
    isError: pokemonIsError,
  } = useSearchPokemon(pokemonName);

  if (isInitialLoading || isLoading || isFetching || isRefetching) {
    return (
      <ContainerW1024 page="spinner">
        <MyBeatLoader loading={pokemonIsSuccess} />
      </ContainerW1024>
    );
  }

  if (pokemonIsError) {
    return (
      <div>
        We couldn't find your pokemon{' '}
        <span role="img" aria-label="sad">
          😢
        </span>
      </div>
    );
  }

  if (pokemonIsSuccess) {
    return <PokemonDetailsPage pokemon={pokemonDetails} />;
  }

  return <></>;
};

export default PokemonDetails;

export const getStaticProps: GetStaticProps = async (context) => {
  const name = context.params?.name as string;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['searchPokemon', name], () =>
    searchPokemon(name)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};
