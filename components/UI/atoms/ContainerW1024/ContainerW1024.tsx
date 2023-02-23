import { styled } from '@stitches/react';
import React, { FC } from 'react';

type Page = 'spinner' | 'template';
interface Props {
  children: React.ReactNode;
  page?: Page;
}

const defaultProps: {
  page: Page;
} = {
  page: 'template',
};

const StyledContainer = styled('div', {
  // background: '#f0f0f0',
  margin: '0 auto',
  variants: {
    page: {
      template: {
        maxWidth: '1024px',
        minHeight: 'calc(100vh - 92px - 213px)',
      },
      spinner: {
        maxWidth: '100vw',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      },
    },
  },
  '& main': {
    padding: '3.5rem 0',
  },
});

const ContainerW1024: FC<Props> = ({ children, page }): JSX.Element => {
  return <StyledContainer page={page}>{children}</StyledContainer>;
};

ContainerW1024.defaultProps = defaultProps;

export default ContainerW1024;
