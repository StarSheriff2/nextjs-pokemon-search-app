import React, { FC } from 'react';
import { styled } from '@stitches/react';
import Card from '../Card';
import PokemonList, { GenericItem } from '@/pages/hooks/types';
import { InfiniteData } from '@tanstack/react-query';

const CARD_WIDTH = '320px';
const CARD_HEIGHT = '360px';
const IMG_HEIGHT = '167px';
interface Props {
  list: InfiniteData<PokemonList>;
  titleKey: keyof GenericItem;
  imgSrcKey: keyof GenericItem;
  imgAltKey: keyof GenericItem;
  linkPathKey: keyof GenericItem;
}

const GridContainer = styled('div', {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fit, minmax(${CARD_WIDTH}, 1fr))`,
  gap: '2rem',
  justifyItems: 'center',
  padding: '0 1rem',
});

const ItemList: FC<Props> = ({
  list,
  imgSrcKey,
  titleKey,
  imgAltKey,
  linkPathKey,
}) => {
  const flattenedData: GenericItem[] =
    list?.pages.flatMap((page) => page.results as GenericItem[]) || [];

  return (
    <GridContainer>
      {flattenedData.map((item) => (
        <Card
          key={item[titleKey]}
          cardHeight={CARD_HEIGHT}
          cardWidth={CARD_WIDTH}
          imgSrc={item[imgSrcKey]}
          imgHeight={IMG_HEIGHT}
          imgAlt={item[imgAltKey]}
          title={item[titleKey]}
          linkPath={item[linkPathKey]}
        />
      ))}
    </GridContainer>
  );
};

export default ItemList;
