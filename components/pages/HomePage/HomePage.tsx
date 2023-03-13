import DefaultTemplate from '@/components/templates/DefaultTemplate';
import ItemList from '@/components/UI/organisms/ItemList';
import PokemonList from '@/lib/types';
import {
  IMG_ALT_KEY,
  IMG_URL_KEY,
  LINK_PATH_KEY,
} from '@/utils/mapPokemonPaginatedResults';
import { InfiniteData } from '@tanstack/react-query';
import { FC } from 'react';

interface Props {
  pokemonList: InfiniteData<PokemonList>;
}

const HomePage: FC<Props> = ({ pokemonList }): JSX.Element => {
  return (
    <DefaultTemplate title="NextJS Pokemon Search App">
      <ItemList
        list={pokemonList}
        titleKey="name"
        imgSrcKey={IMG_URL_KEY}
        imgAltKey={IMG_ALT_KEY}
        linkPathKey={LINK_PATH_KEY}
      />
    </DefaultTemplate>
  );
};

export default HomePage;
