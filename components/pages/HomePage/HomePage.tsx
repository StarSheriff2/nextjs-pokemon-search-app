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
  return (
    <DefaultTemplate>
      <ItemList
        list={
          pokemonList.results.map((item) => ({
            ...item,
            [IMG_URL_KEY]: pokemonImgUrl(item.name),
          })) as Item[]
        }
        titleKey="name"
        imgSrcKey={IMG_URL_KEY}
      />
    </DefaultTemplate>
  );
};

export default HomePage;
