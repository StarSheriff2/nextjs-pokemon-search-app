import { PokemonData } from '@/pages/hooks/types';
import { styled } from '@stitches/react';
import Image from 'next/image';
import { FC } from 'react';

interface Props {
  pokemon: PokemonData;
}

const DetailsCard = styled('div', {
  height: '400px',
  border: 'orange solid 2px',
  maxWidth: '300px',
  margin: '0 auto',
  background: 'lightgreen',
});

const ImageWrapper = styled('div', {
  position: 'relative',
  width: '100%',
  height: '200px',
  background: 'red',
});

const PokemonInfo = styled('ul', {
  '& li': {
    padding: '0.1rem',
  },
});

const PokemonCardDetails: FC<Props> = ({ pokemon }): JSX.Element => {
  return (
    <DetailsCard>
      <ImageWrapper>
        <Image
          src={pokemon.sprites?.other['official-artwork']?.front_default}
          alt={`${pokemon.name} artwork`}
          fill
          style={{
            objectFit: 'contain',
            background: 'white',
          }}
        />
      </ImageWrapper>
      <PokemonInfo>
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
      </PokemonInfo>
    </DetailsCard>
  );
};

export default PokemonCardDetails;
