import { styled } from '@stitches/react';
import React, { FC } from 'react';

interface Props {
  onClick: () => void;
  text: string;
  search?: boolean;
}

const defaultProps = {
  search: false,
};

const StyledButton = styled('button', {
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

const Button: FC<Props> = ({ onClick, text, search }): JSX.Element => {
  return (
    <StyledButton onClick={onClick} search={search}>
      {text}
    </StyledButton>
  );
};

Button.defaultProps = defaultProps;

export default Button;
