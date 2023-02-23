import React, { FC } from 'react';

interface Props {
  children: React.ReactNode;
}

const Text: FC<Props> = ({ children }) => {
  return (
    <p
      style={{
        color: '#436070',
      }}
    >
      {children}
    </p>
  );
};

export default Text;
