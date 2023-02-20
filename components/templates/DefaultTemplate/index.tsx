import React, { FC } from 'react';
import Head from 'next/head';

interface Props {
  cars?: [];
  children?: React.ReactNode;
}

const DefaultTemplate: FC<Props> = ({ children }): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Pokemon List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>This is header</h1>
      <main>{children}</main>
      <h1>This is footer</h1>
    </div>
  );
};

export default DefaultTemplate;
