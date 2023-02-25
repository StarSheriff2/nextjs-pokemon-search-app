import React, { FC } from 'react';
import CardBody from '../../molecules/CardBody';
import ResponsiveImage from '../../atoms/ResponsiveImage';
import { styled, theme } from '@/stitches.config';

interface Props {
  imgSrc: string;
  imgAlt: string;
  size: 'large';
  title: string;
  linkPath: string;
}

const StyledCard = styled('div', {
  defaultVariants: {
    size: 'large',
  },
  variants: {
    size: {
      large: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 0,
        height: '$sizes$cardHeight',
        width: '$sizes$cardWidth',
        '& div': {
          height: '$cardImgHeight',
        },
        '& div img': {
          padding: '$4',
        },
      },
    },
  },
});

const Card: FC<Props> = ({
  imgSrc,
  imgAlt,
  title,
  linkPath,
  size,
}): JSX.Element => {
  return (
    <StyledCard size={size}>
      <ResponsiveImage
        src={imgSrc}
        alt={imgAlt}
        imageBpWidths={[theme.sizes.cardImgWidthBp2.value]}
      />
      <CardBody title={title} linkText="Details →" linkPath={linkPath} />
    </StyledCard>
  );
};

export default Card;
