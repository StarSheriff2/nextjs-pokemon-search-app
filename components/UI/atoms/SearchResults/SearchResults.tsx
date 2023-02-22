import { styled } from '@stitches/react';
import React, { FC } from 'react';

interface Props {
  searchResults: Array<string | object>;
}

const StyledUl = styled('ul', {
  maxHeight: '390px',
  overflow: 'scroll',
  position: 'absolute',
  width: '60%',
  top: '60px',
  paddingLeft: '3rem',
  '& li': {
    borderBottom: '#004368 solid 2px',
    borderRight: '#004368 solid 2px',
    borderLeft: '#004368 solid 2px',
    padding: '0.25rem',
    width: '100%',
    backgroundColor: '#ffffff',
  },
});

const SearchResults: FC<Props> = ({ searchResults }) => {
  return (
    <StyledUl>
      {(searchResults as string[]).map((result) => {
        return <li key={result}>{result}</li>;
      })}
    </StyledUl>
  );
};

export default SearchResults;
