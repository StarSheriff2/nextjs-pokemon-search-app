import React, { FC } from 'react';
import Image from 'next/image';
import { styled } from '@/stitches.config';
import { CSS } from '@stitches/react';

interface Props {
  src: string;
  css: CSS<{}>;
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

const ResponsiveImage: FC<Props> = ({ src, alt = '', css }) => {
  return (
    <ImageWrapper
      css={{
        ...css,
      }}
    >
      <StyledImage src={src} alt={alt} fill loading="lazy" />
    </ImageWrapper>
  );
};

export default ResponsiveImage;
