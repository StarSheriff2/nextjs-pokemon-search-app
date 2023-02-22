import React, { FC } from 'react';
import { styled } from '@stitches/react';
import Card from '../Card';
import { Item } from '@/components/types/types';

interface Props {
  list: Item[];
  titleKey: keyof Item;
  imgSrcKey: keyof Item;
}

const GridContainer = styled('div', {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'auto',
});

const ItemList: FC<Props> = ({ list, imgSrcKey, titleKey }) => {
  return (
    <GridContainer>
      {list.map((item) => (
        <Card
          key={item[titleKey]}
          cardHeight="360px"
          cardWidth="320px"
          imgSrc={item[imgSrcKey]}
          imgHeight="167px"
          imgAlt={item[titleKey]}
        />
      ))}
    </GridContainer>
  );
};

export default ItemList;
