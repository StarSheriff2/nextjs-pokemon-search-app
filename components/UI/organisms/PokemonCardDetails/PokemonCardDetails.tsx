import { FC } from 'react';
import { styled, theme } from '@/stitches.config';
import { PokemonData } from '@/lib/types';
import ResponsiveImage from '../../atoms/ResponsiveImage';
import Text from '../../atoms/Text';

interface Props {
  pokemon: PokemonData;
}

const DetailsCard = styled('div', {
  height: '600px',
  maxWidth: '400px',
  margin: '0 auto',
  background: '$mango',
  borderRadius: '$1 $1 $1 $1',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: 0,
  '& div:first-child': {
    backgroundColor: '$seafoamMid',
    height: '300px',
  },
  '& div:last-child': {
    width: '$w100',
    flexGrow: '1',
    paddingBottom: '$6',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  '& ul': {
    padding: '$4',
    '& li': {
      padding: '$1',
    },
  },
});

const PokemonCardDetails: FC<Props> = ({ pokemon }): JSX.Element => {
  return (
    <DetailsCard>
      <ResponsiveImage
        src={pokemon.sprites?.other['official-artwork']?.front_default}
        alt={`${pokemon.name} artwork`}
        imageBpWidths={[theme.sizes.cardImgWidthBp2.value]}
      />
      <ul>
        <li>
          <strong>Name:</strong>{' '}
          {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
        </li>
        <li>
          <strong>Type:</strong>{' '}
          {pokemon.types.map((type) => type.type.name).join(', ')}
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
      </ul>
      <div>
        <Text
          textStyle={'textLead'}
          css={{
            color: '$infoDark',
            textAlign: 'center',
          }}
        >
          <a
            href={`https://bulbapedia.bulbagarden.net/wiki/${pokemon.name} `}
            target="_blank"
            rel="noopener noreferrer"
          >
            More details at bulbapedia →
          </a>
        </Text>
      </div>
    </DetailsCard>
  );
};

export default PokemonCardDetails;
