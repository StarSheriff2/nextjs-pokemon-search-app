import { styled } from '@stitches/react';
import React, { FC } from 'react';
import Image from 'next/image';

interface Props {
  src: string;
  bgd?: string;
  alt?: string;
  imageWrapperHeight: string;
}

const ImageWrapper = styled('div', {
  position: 'relative',
  width: '100%',
  borderRadius: '8px 8px 0px 0px',
});

const ResponsiveImage: FC<Props> = ({
  src,
  alt = '',
  bgd = 'white',
  imageWrapperHeight,
}) => {
  return (
    <ImageWrapper
      css={{
        height: imageWrapperHeight,
        background: bgd,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        style={{
          objectFit: 'contain',
          background: 'transparent',
        }}
        loading="lazy"
      />
    </ImageWrapper>
  );
};

export default ResponsiveImage;
