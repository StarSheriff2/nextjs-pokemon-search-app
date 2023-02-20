import React, { FC } from 'react';

interface Props {
  children: React.ReactNode;
}

const Text: FC<Props> = ({ children }) => {
  return <p>{children}</p>;
};

export default Text;
