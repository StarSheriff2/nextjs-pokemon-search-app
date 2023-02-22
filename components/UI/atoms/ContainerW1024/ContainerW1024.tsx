import { styled } from '@stitches/react';
import React, { FC } from 'react';

interface Props {
  children: React.ReactNode;
}

const StyledContainer = styled('div', {
  background: '#f0f0f0',
  maxWidth: '1024px',
  margin: '0 auto',
  minHeight: 'calc(100vh - 92px - 213px)',
  '& main': {
    padding: '3.5rem 0',
  },
});

const ContainerW1024: FC<Props> = ({ children }): JSX.Element => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default ContainerW1024;
