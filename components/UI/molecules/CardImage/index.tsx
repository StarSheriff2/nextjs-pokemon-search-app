import React, { FC } from 'react';

interface Props {
  children: React.ReactNode;
}

const CardImage: FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default CardImage;
