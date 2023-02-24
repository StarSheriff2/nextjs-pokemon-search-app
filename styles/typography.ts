import { globalCss } from '@/stitches.config';

const typography = globalCss({
  h1: {
    fontSize: '$8',
    fontFamily: '$quicksand',
    fontWeight: '$4',
    letterSpacing: '$1',
  },
  h2: {
    fontSize: '$7',
    fontFamily: '$quicksand',
    fontWeight: '$4',
    letterSpacing: '$1',
  },
  h3: {
    fontSize: '$6',
    fontFamily: '$quicksand',
    fontWeight: '$4',
    letterSpacing: '$1',
  },
  h4: {
    fontSize: '$5',
    fontFamily: '$quicksand',
    fontWeight: '$4',
    letterSpacing: '$1',
  },
  h5: {
    fontSize: '20px',
    fontFamily: '$quicksand',
    fontWeight: '$4',
    letterSpacing: '$1',
  },
  h6: {
    fontSize: '$4',
    fontFamily: '$quicksand',
    fontWeight: '$4',
    letterSpacing: 0,
  },
});

export default typography;
