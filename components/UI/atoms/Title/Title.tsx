import { FC } from 'react';

interface Props {
  children: React.ReactNode;
}

const Title: FC<Props> = ({ children }) => {
  return (
    <h2
      style={{
        color: '#143c52',
      }}
    >
      {children}
    </h2>
  );
};

export default Title;
