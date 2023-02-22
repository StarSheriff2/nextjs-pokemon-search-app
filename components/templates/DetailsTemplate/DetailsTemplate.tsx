import React, { FC } from 'react';
import Head from 'next/head';
import Header from '@/components/UI/molecules/Header';
import ContainerW1024 from '@/components/UI/atoms/ContainerW1024';
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
      <Link href={backPath}>
        <Text>{backPathText}</Text>
      </Link>
      <ContainerW1024>
        <main>{children}</main>
      </ContainerW1024>
    </div>
  );
};

export default DetailsTemplate;
