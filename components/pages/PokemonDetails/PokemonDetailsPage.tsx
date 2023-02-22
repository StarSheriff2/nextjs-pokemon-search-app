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

const StyledPokemonInfo = styled('ul', {
  '& li': {
    padding: '0.1rem',
  },
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
        <StyledPokemonInfo>
          <li>
            <strong>Name:</strong>{' '}
            {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
          </li>
          <li>
            <strong>Stats:</strong>{' '}
            {pokemon.stats.map((stat) => `${stat.stat.name}, `)}
          </li>
          <li>
            <strong>Abilities:</strong>{' '}
            {pokemon.abilities.map((ability) => `${ability.ability.name}, `)}
          </li>
          <li>
            <strong>Some Moves:</strong>{' '}
            {pokemon.moves.slice(0, 5).map((move) => `${move.move.name}, `)}
          </li>
        </StyledPokemonInfo>
      </StyledDetailsCard>
    </DefaultTemplate>
  );
};

export default PokemonDetailsPage;
