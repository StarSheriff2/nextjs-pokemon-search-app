import React, { FC } from 'react';

interface Props {
  cars?: [];
  children?: React.ReactNode;
}

const Layout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <>
      <h1>This is header</h1>
      <div>{children}</div>
      <h1>This is footer</h1>
    </>
  );
};

export default Layout;
