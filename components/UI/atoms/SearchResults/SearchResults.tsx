import React, { FC } from 'react';
import Link from 'next/link';
import { styled } from '@/stitches.config';

interface Props {
  searchResults: Array<string | object>;
  showSearchResults: boolean;
}

const StyledUl = styled('ul', {
  maxHeight: '390px',
  display: 'none',
  overflow: 'scroll',
  position: 'absolute',
  width: '$w100',
  top: '60px',
  zIndex: 1,
  variants: {
    show: {
      true: {
        display: 'block',
      },
    },
  },
  '& li': {
    width: '$w100',
    backgroundColor: '$w100',
    fontSize: '$4',
    color: '$grey500MutedColour',
    '& a': {
      padding: '$1',
      display: 'block',
      width: '$w100',
    },
    '&:hover': {
      backgroundColor: '$colors$seafoamPale',
      color: '$color$w100',
    },
  },
});

const SearchResults: FC<Props> = ({ searchResults, showSearchResults }) => {
  return (
    <StyledUl show={showSearchResults}>
      {(searchResults as string[]).map((result) => {
        return (
          <li key={result}>
            <Link href={`/pokemon/${encodeURIComponent(result)}`}>
              {result}
            </Link>
          </li>
        );
      })}
    </StyledUl>
  );
};

export default SearchResults;
