import React, { FC } from 'react';
import Image from 'next/image';
import DefaultTemplate from '@/components/templates/DefaultTemplate';
import { PokemonData } from '@/pages/hooks/types';
import { styled } from '@stitches/react';
// import PokemonCard from '../../components/PokemonCard';

interface Props {
  pokemon: PokemonData;
}

const StyledDetailsCard = styled('div', {
  height: '400px',
  border: 'orange solid 2px',
  maxWidth: '300px',
  margin: '0 auto',
  background: 'lightgreen',
});

const StyledImageWrapper = styled('div', {
  position: 'relative',
  width: '100%',
  height: '200px',
  background: 'red',
});

const PokemonDetailsPage: FC<Props> = ({ pokemon }): JSX.Element => {
  return (
    <DefaultTemplate>
      <StyledDetailsCard>
        <StyledImageWrapper>
          <Image
            src={pokemon.sprites?.other['official-artwork']?.front_default}
            alt={`${pokemon.name} artwork`}
            fill
            style={{
              objectFit: 'contain',
              background: 'white',
            }}
          />
        </StyledImageWrapper>
      </StyledDetailsCard>
    </DefaultTemplate>
  );
};

export default PokemonDetailsPage;
