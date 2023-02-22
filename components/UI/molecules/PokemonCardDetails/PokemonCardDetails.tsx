import { PokemonData } from '@/pages/hooks/types';
import { styled } from '@stitches/react';
import { FC } from 'react';
import ResponsiveImage from '../../atoms/ResponsiveImage';

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

const PokemonInfo = styled('ul', {
  padding: '1rem',
  '& li': {
    padding: '0.1rem',
  },
});

const PokemonCardDetails: FC<Props> = ({ pokemon }): JSX.Element => {
  return (
    <DetailsCard>
      <ResponsiveImage
        src={pokemon.sprites?.other['official-artwork']?.front_default}
        alt={`${pokemon.name} artwork`}
        imageWrapperHeight="200px"
      />
      <PokemonInfo>
        <li>
          <strong>Name:</strong>{' '}
          {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
        </li>
        <li>
          <strong>Stats:</strong>{' '}
          {pokemon.stats.map((stat) => stat.stat.name).join(', ')}
        </li>
        <li>
          <strong>Abilities:</strong>{' '}
          {pokemon.abilities
            .slice(0, 5)
            .map((ability) => ability.ability.name)
            .join(', ')}
        </li>
        <li>
          <strong>Some Moves:</strong>{' '}
          {pokemon.moves
            .slice(0, 5)
            .map((move) => move.move.name)
            .join(', ')}
        </li>
      </PokemonInfo>
    </DetailsCard>
  );
};

export default PokemonCardDetails;
