import { styled } from '@/stitches.config';
import { Quicksand } from '@next/font/google';

const quicksand = Quicksand({
  weight: ['400', '600', '700'],
  style: 'normal',
});

const Input = styled('input', {
  background: '$w100',
  borderRadius: 0,
  flex: 'none',
  order: 1,
  alignSelf: 'stretch',
  flexGrow: 1,
  fontWeight: '$3',
  letterSpacing: '$1',
  color: '$b60',
  fontSize: '$3',
  outline: 'none',
});

export default Input;
