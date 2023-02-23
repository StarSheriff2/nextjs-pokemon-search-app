import { styled } from '@stitches/react';

const Container = styled('div', {
  defaultVariants: {
    page: 'template',
  },
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
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  },
  '& main': {
    padding: '3.5rem 0',
  },
});

export default Container;
