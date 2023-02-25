import { styled } from '@/stitches.config';

const Container = styled('div', {
  defaultVariants: {
    page: 'template',
  },
  margin: '0 auto',
  variants: {
    padding: {
      p1: {
        padding: '$space$1',
      },
      p2: {
        padding: '$space$2',
      },
      p3: {
        padding: '$space$3',
      },
      p4: {
        padding: '$space$4',
      },
    },
    page: {
      template: {
        maxWidth: 'calc($1024 + $fontSizes$7)',
        minHeight: 'calc($vh100 - 92px - 213px)',
        minWidth: '300px',
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
