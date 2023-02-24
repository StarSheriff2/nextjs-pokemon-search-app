import React, { FC } from 'react';
import Image from 'next/image';
import { styled } from '@/stitches.config';

interface Props {
  src: string;
  alt?: string;
  fill?: boolean;
}

const ImageWrapper = styled('div', {
  position: 'relative',
  width: '$w100',
  borderRadius: '$1 $1 0px 0px',
  backgroundColor: '$w100',
  textAlign: 'center',
});

const StyledImage = styled(Image, {
  defaultVariants: {
    size: 'auto',
  },
  variants: {
    size: {
      auto: { objectFit: 'contain', background: 'transparent' },
    },
  },
});

const ResponsiveImage: FC<Props> = ({ src, alt = '', fill = false }) => {
  return (
    <ImageWrapper>
      {fill ? (
        <StyledImage src={src} alt={alt} loading="lazy" fill size={'auto'} />
      ) : (
        <StyledImage
          src={src}
          width={300}
          height={300}
          alt={alt}
          loading="lazy"
        />
      )}
    </ImageWrapper>
  );
};

export default ResponsiveImage;
