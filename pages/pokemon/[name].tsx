import React, { FC } from 'react';
import { useRouter } from 'next/router';
import DefaultTemplate from '@/components/templates/DefaultTemplate';
import useFetchPokemon, { useSearchPokemon } from '@/pages/hooks/usePokemon';
import PokemonDetailsPage from '@/components/pages/PokemonDetails';
import { BeatLoader } from 'react-spinners';
// import PokemonCard from '../../components/PokemonCard';

const PokemonDetails: FC = (): JSX.Element => {
  const router = useRouter();
  const pokemonName =
    typeof router.query?.name === 'string' ? router.query.name : '';

  const {
    isSuccess: pokemonIsSuccess,
    data: pokemonDetails,
    isLoading: pokemonIsLoading,
    isError: pokemonIsError,
  } = useSearchPokemon(pokemonName);

  if (pokemonIsSuccess) {
    console.log({ pokemonDetails });
    return <PokemonDetailsPage pokemon={pokemonDetails} />;
  }

  if (pokemonIsLoading) {
    return <BeatLoader color="#fff" />;
  }

  if (pokemonIsError) {
    return (
      <div className="center">
        We couldn't find your pokemon{' '}
        <span role="img" aria-label="sad">
          😢
        </span>
      </div>
    );
  }

  return <></>;
};

export default PokemonDetails;
