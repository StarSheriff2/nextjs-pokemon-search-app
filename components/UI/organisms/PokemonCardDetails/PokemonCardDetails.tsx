import { PokemonData } from '@/pages/hooks/types';
import { styled } from '@stitches/react';
import { FC } from 'react';
import ResponsiveImage from '../../atoms/ResponsiveImage';

interface Props {
  pokemon: PokemonData;
}

const DetailsCard = styled('div', {
  height: '400px',
  maxWidth: '300px',
  margin: '0 auto',
  background: 'lightgreen',
  borderRadius: '8px 8px 8px 8px',
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
        bgd="orange"
      />
      <PokemonInfo>
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
        <li>
          <p>
            <a
              onClick={() => {}}
              // onClick={() => setPostId(post.id)}
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              // style={
              //   // We can access the query data here to show bold links for
              //   // ones that are cached
              //   queryClient.getQueryData(['post', post.id])
              //     ? {
              //         fontWeight: 'bold',
              //         color: 'green',
              //       }
              //     : {}
              // }
            >
              {/* {post.title} */}
              {/* {linkText} */}
              some link
            </a>
          </p>
        </li>
      </PokemonInfo>
    </DetailsCard>
  );
};

export default PokemonCardDetails;
