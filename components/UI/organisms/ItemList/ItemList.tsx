import React, { FC } from 'react';
import { styled } from '@stitches/react';
import Card from '../Card';
import { Item } from '@/components/types/types';

const CARD_WIDTH = '320px';
const CARD_HEIGHT = '360px';
const IMG_HEIGHT = '167px';
interface Props {
  list: Item[];
  titleKey: keyof Item;
  imgSrcKey: keyof Item;
  imgAltKey: keyof Item;
  linkPathKey: keyof Item;
}

const GridContainer = styled('div', {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fit, minmax(${CARD_WIDTH}, 1fr))`,
  gap: '2rem',
  justifyItems: 'center',
});

const ItemList: FC<Props> = ({
  list,
  imgSrcKey,
  titleKey,
  imgAltKey,
  linkPathKey,
}) => {
  return (
    <GridContainer>
      {list.map((item) => (
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
