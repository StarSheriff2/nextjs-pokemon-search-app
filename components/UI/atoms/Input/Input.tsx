import { styled } from '@stitches/react';
import React, { FC } from 'react';

interface Props {
  type: string;
  value: string;
  placeholder: string;
  onChange: () => void;
}

const StyledInput = styled('input', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '16px',
  gap: '12px',
  background: '#FFFFFF',
  borderRadius: '10px 0px 0px 10px',
  flex: 'none',
  order: 0,
  alignSelf: 'stretch',
  flexGrow: 0,
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
