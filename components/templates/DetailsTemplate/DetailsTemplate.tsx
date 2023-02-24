import React, { FC } from 'react';
import Head from 'next/head';
import Header from '@/components/UI/molecules/Header';
import Container from '@/components/UI/atoms/Container';
import Link from 'next/link';
import Text from '@/components/UI/atoms/Text';

interface Props {
  children?: React.ReactNode;
  backPath: string;
  backPathText: string;
}

const DetailsTemplate: FC<Props> = ({
  children,
  backPath,
  backPathText,
}): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Pokemon Data</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container>
        <Link href={backPath}>
          <Text
            textStyle={'textParagraph'}
            css={{
              color: '$seafoamDark',
              marginTop: '$4',
            }}
          >
            <strong>{backPathText}</strong>
          </Text>
        </Link>
        <main>{children}</main>
      </Container>
    </div>
  );
};

export default DetailsTemplate;
