import { styled } from '@stitches/react';

const Button = styled('button', {
  padding: '12px 16px',
  background: '#004368',
  borderRadius: '0px 8px 8px 0px',
  color: 'white',
  height: '58px',
  width: '95px',
  fontSize: '1rem',
  fontWeight: '700',
  variants: {
    search: {
      true: {
        order: 3,
        alignSelf: 'end',
      },
    },
  },
  '&:hover': {
    cursor: 'pointer',
  },
});

export default Button;
