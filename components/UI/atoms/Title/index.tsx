import { FC } from 'react';

interface Props {
  children: React.ReactNode;
}

const Title: FC<Props> = ({ children }) => {
  return <h2>{children}</h2>;
};

export default Title;
