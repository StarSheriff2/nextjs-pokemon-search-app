import { styled } from '@/stitches.config';

const Header = styled('header', {
  backgroundColor: '#fafafa',
  width: '$w100',
  boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.07)',
  color: 'white',
  padding: '10px 20px',
  height: '$header',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& h5': {
    color: '$b20',
  },
});

export default Header;
