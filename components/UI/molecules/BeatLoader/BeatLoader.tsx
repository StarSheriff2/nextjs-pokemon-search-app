import React, { CSSProperties, FC } from 'react';
import { BeatLoader } from 'react-spinners';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
  width: 'fit-content',
};

interface Props {
  loading: boolean;
}

const MyBeatLoader: FC<Props> = ({ loading }) => {
  return (
    <BeatLoader
      color="orange"
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default MyBeatLoader;
