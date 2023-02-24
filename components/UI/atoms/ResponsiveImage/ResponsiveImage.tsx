import React, { FC } from 'react';
import Image from 'next/image';
import { styled } from '@/stitches.config';
import { CSS } from '@stitches/react';

interface Props {
  src: string;
  alt?: string;
}

const ImageWrapper = styled('div', {
  position: 'relative',
  width: '$w100',
  borderRadius: '$1 $1 0px 0px',
  backgroundColor: '$w100',
});

const StyledImage = styled(Image, {
  objectFit: 'contain',
  background: 'transparent',
});

const ResponsiveImage: FC<Props> = ({ src, alt = '' }) => {
  return (
    <ImageWrapper>
      <StyledImage src={src} alt={alt} fill loading="lazy" />
    </ImageWrapper>
  );
};

export default ResponsiveImage;
