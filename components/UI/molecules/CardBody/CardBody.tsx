import React, { FC } from 'react';
import Title from '../../atoms/Title';
import Text from '../../atoms/Text';
import Link from 'next/link';
import queryClient from '@/pages/queryClient';
import { styled } from '@/stitches.config';

interface Props {
  title: string;
  linkText: string;
  linkPath: string;
  description?: string;
}

const StyledCardBody = styled('div', {
  width: '$w100',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: '$6',
  gap: '$5',
  background: '#fafafa',
  borderRadius: '0px 0px $2 $2',
  flex: 'none',
  order: 1,
  flexGrow: 2,

  '& div:last-child': {
    display: 'flex',
    alignItems: 'flex-end',
  },
});

const CardBody: FC<Props> = ({ title, description, linkText, linkPath }) => {
  return (
    <StyledCardBody>
      <div>
        <Title as="h6" css={{ color: '$b20' }}>
          {title}
        </Title>
        {description && <Text>{description}</Text>}
      </div>
      <div>
        <Text
          textStyle={'textSmall'}
          css={{
            color: queryClient.getQueryData([
              'searchPokemon',
              title.toLowerCase(),
            ])
              ? '$oceanDark'
              : '$oceanMid',
          }}
        >
          <Link href={linkPath}>{linkText}</Link>
        </Text>
      </div>
    </StyledCardBody>
  );
};

export default CardBody;
