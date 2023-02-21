import { styled } from '@stitches/react';
import React, { FC } from 'react';
import { Quicksand } from '@next/font/google';

const quicksand = Quicksand({
  weight: ['400', '600', '700'],
  style: 'normal',
});

interface Props {
  type: string;
  value: string;
  placeholder: string;
  onChange: () => void;
}

const StyledInput = styled('input', {
  background: '#FFFFFF',
  borderRadius: '0',
  flex: 'none',
  order: 1,
  alignSelf: 'stretch',
  flexGrow: 1,
  fontWeight: 600,
  fontFamily: 'Quicksand',
  letterSpacing: '-0.02em',
  color: '#8a9da8',
  fontSize: '1rem',
  outline: 'none',
  '&::placeholder': {
    fontFamily: quicksand.style.fontFamily,
  },
  '&::-moz-placeholder': {
    fontFamily: quicksand.style.fontFamily,
  },
  '&::-ms-input-placeholder': {
    fontFamily: quicksand.style.fontFamily,
  },
});

const Input: FC<Props> = ({ type, value, placeholder, onChange }) => (
  <StyledInput
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
);

export default Input;
