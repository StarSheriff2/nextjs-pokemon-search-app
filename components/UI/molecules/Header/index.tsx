import { FC } from 'react';
import { styled } from '@stitches/react';

const StyledHeader = styled('header', {
  backgroundColor: '#fafafa',
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.07)',
  color: 'white',
  padding: '10px 20px',
  // textAlign: 'center',
  height: '92px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& h5': {
    color: '#143c52',
  },
});

const Header: FC = () => {
  return (
    <StyledHeader>
      <h5>Bannano Frontend Challenge</h5>
    </StyledHeader>
  );
};

export default Header;
