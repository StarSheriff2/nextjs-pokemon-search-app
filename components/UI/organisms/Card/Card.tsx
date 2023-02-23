import React, { FC } from 'react';
import CardBody from '../../molecules/CardBody';
import ResponsiveImage from '../../atoms/ResponsiveImage';
import { styled } from '@stitches/react';

interface Props {
  imgSrc: string;
  imgAlt: string;
  imgHeight: string;
  cardHeight: string;
  cardWidth: string;
  title: string;
  linkPath: string;
}

const StyledCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '0px',
});

const Card: FC<Props> = ({
  imgSrc,
  imgAlt,
  imgHeight,
  cardHeight,
  cardWidth,
  title,
  linkPath,
}): JSX.Element => {
  return (
    <StyledCard
      css={{
        height: cardHeight,
        width: cardWidth,
      }}
    >
      <ResponsiveImage
        src={imgSrc}
        imageWrapperHeight={imgHeight}
        alt={imgAlt}
        bgd="white"
      />
      <CardBody title={title} linkText="Details →" linkPath={linkPath} />
    </StyledCard>
  );
};

export default Card;
