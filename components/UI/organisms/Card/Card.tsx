import React, { FC } from 'react';
import CardBody from '../../molecules/CardBody';
import ResponsiveImage from '../../atoms/ResponsiveImage';

interface Props {
  imgSrc: string;
  // imgFilename: string;
  imgAlt: string;
  // imgWidth: number;
  imgHeight: string;
  cardHeight: string;
  cardWidth: string;
  // title: string;
  // description: string;
  // ctaLink: string;
  // ctaText: string;
  // imgLoader?: () => void;
}

const Card: FC<Props> = ({
  imgSrc,
  // imgFilename,
  imgAlt,
  // imgWidth,
  imgHeight,
  cardHeight,
  cardWidth,
  // title,
  // description,
  // ctaLink,
  // ctaText,
  // imgLoader
}): JSX.Element => {
  console.log({ imgSrc });
  return (
    <div
      style={{
        height: cardHeight,
        width: cardWidth,
      }}
    >
      <ResponsiveImage
        src={imgSrc}
        imageWrapperHeight={imgHeight}
        alt={imgAlt}
      />
      <CardBody />
    </div>
  );
};

export default Card;
