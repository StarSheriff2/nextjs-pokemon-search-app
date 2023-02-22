import React, { FC } from 'react';
import DefaultTemplate from '@/components/templates/DefaultTemplate';
import { PokemonData } from '@/pages/hooks/types';
import PokemonCardDetails from '@/components/UI/molecules/PokemonCardDetails';

interface Props {
  pokemon: PokemonData;
}

const PokemonDetailsPage: FC<Props> = ({ pokemon }): JSX.Element => {
  return (
    <DefaultTemplate>
      <PokemonCardDetails pokemon={pokemon} />
    </DefaultTemplate>
  );
};

export default PokemonDetailsPage;
