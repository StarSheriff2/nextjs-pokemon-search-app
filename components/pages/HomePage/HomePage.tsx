import DefaultTemplate from '@/components/templates/DefaultTemplate';
import { Item } from '@/components/types/types';
import ItemList from '@/components/UI/organisms/ItemList';
import PokemonList from '@/pages/hooks/types';
import pokemonImgUrl from '@/utils/generatePokemonImageUrl';
import { FC } from 'react';

interface Props {
  pokemonList: PokemonList;
}

const HomePage: FC<Props> = ({ pokemonList }): JSX.Element => {
  const IMG_URL_KEY = 'imgUrl';
  const IMG_ALT_KEY = 'imgAlt';
  const LINK_PATH_KEY = 'linkPath';

  return (
    <DefaultTemplate>
      <ItemList
        list={
          pokemonList.results.map((item) => ({
            ...item,
            name: `${item.name.slice(0, 1).toUpperCase() + item.name.slice(1)}`,
            [IMG_URL_KEY]: pokemonImgUrl(item.name),
            [LINK_PATH_KEY]: `/pokemon/${encodeURIComponent(item.name)}`,
            [IMG_ALT_KEY]: `${item.name} artwork`,
          })) as Item[]
        }
        titleKey="name"
        imgSrcKey={IMG_URL_KEY}
        imgAltKey={IMG_ALT_KEY}
        linkPathKey={LINK_PATH_KEY}
      />
    </DefaultTemplate>
  );
};

export default HomePage;
