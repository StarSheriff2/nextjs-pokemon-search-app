import { styled } from '@/stitches.config';

const Container = styled('div', {
  defaultVariants: {
    page: 'template',
  },
  margin: '0 auto',
  variants: {
    page: {
      template: {
        maxWidth: 'calc($1024 + $fontSizes$7)',
        minHeight: 'calc($vw100 - 92px - 213px)',
      },
      spinner: {
        maxWidth: '$vw100',
        minHeight: '$vh100',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  },
  '& main': {
    padding: '$8 0',
  },
});

export default Container;
