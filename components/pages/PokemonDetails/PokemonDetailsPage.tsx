import React, { FC } from 'react';
import { PokemonData } from '@/pages/hooks/types';
import PokemonCardDetails from '@/components/UI/molecules/PokemonCardDetails';
import DetailsTemplate from '@/components/templates/DetailsTemplate';

interface Props {
  pokemon: PokemonData;
}

const PokemonDetailsPage: FC<Props> = ({ pokemon }): JSX.Element => {
  return (
    <DetailsTemplate backPath="/" backPathText="&lt; Back">
      <PokemonCardDetails pokemon={pokemon} />
    </DetailsTemplate>
  );
};

export default PokemonDetailsPage;
