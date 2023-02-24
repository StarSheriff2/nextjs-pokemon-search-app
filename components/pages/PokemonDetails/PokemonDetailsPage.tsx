import React, { FC } from 'react';
import { PokemonData } from '@/lib/types';
import PokemonCardDetails from '@/components/UI/organisms/PokemonCardDetails';
import DetailsTemplate from '@/components/templates/DetailsTemplate';

interface Props {
  pokemon: PokemonData;
}

const PokemonDetailsPage: FC<Props> = ({ pokemon }): JSX.Element => {
  return (
    <DetailsTemplate
      backPath="/"
      backPathText="&lt; Back"
      title="Bannano Frontend Challenge"
    >
      <PokemonCardDetails pokemon={pokemon} />
    </DetailsTemplate>
  );
};

export default PokemonDetailsPage;
