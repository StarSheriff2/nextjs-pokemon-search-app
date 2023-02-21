import React, { FC } from 'react';
import Image from 'next/image';
import CardBody from '../../molecules/CardBody';
import CardImage from '../../molecules/CardImage';

interface Props {
  // imgSrc: string;
  // imgFilename: string;
  imgAlt: string;
  // imgWidth: number;
  // imgHeight: number;
  // title: string;
  // description: string;
  // ctaLink: string;
  // ctaText: string;
  // imgLoader?: () => void;
}

const Card: FC<Props> = ({
  // imgSrc,
  // imgFilename,
  imgAlt,
  // imgWidth,
  // imgHeight,
  // title,
  // description,
  // ctaLink,
  // ctaText,
  // imgLoader
}): JSX.Element => {
  return (
    <div>
      <CardImage>
        <Image
          src="https://img.pokemondb.net/artwork/large/pikachu.jpg"
          alt={imgAlt}
          width={100}
          height={24}
          priority
        />
      </CardImage>
      <CardBody />
    </div>
  );
};

export default Card;
