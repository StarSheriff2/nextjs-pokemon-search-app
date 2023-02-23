import React, { FC } from 'react';
import Title from '../../atoms/Title';
import Text from '../../atoms/Text';
import { styled } from '@stitches/react';
import Link from 'next/link';
import queryClient from '@/pages/queryClient';

interface Props {
  title: string;
  linkText: string;
  linkPath: string;
  description?: string;
}

const StyledCardBody = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: '2rem',
  gap: '1.5rem',
  background: '#fafafa',
  borderRadius: '0px 0px 8px 8px',
  flex: 'none',
  order: 1,
  flexGrow: 2,
});

const CardBody: FC<Props> = ({ title, description, linkText, linkPath }) => {
  return (
    <StyledCardBody>
      <div>
        <Title>{title}</Title>
        {description && <Text>{description}</Text>}
      </div>
      <div>
        <p
          style={{
            fontWeight: 500,
            fontSize: '0.875rem',
            // color: '#408Ab6',
            color: queryClient.getQueryData([
              'searchPokemon',
              title.toLowerCase(),
            ])
              ? 'purple'
              : '#408ab6',
          }}
        >
          <Link href={linkPath}>{linkText}</Link>
        </p>
      </div>
    </StyledCardBody>
  );
};

export default CardBody;
