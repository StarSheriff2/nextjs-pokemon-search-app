import { globalCss } from '@/stitches.config';

const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },
  'html, body': {
    maxWidth: '$100vw',
    overflowX: 'hidden',
    backgroundColor: '$grey100BackgroundColour',
    fontFamily: '$quicksand',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
  'ul, li': {
    listStyle: 'none',
  },
  'input, button': {
    boxShadow: 'none',
    border: 0,
    margin: 0,
    padding: 0,
    borderRadius: 0,
  },
});

export default globalStyles;
