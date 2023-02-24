import { FC, useRef, useState } from 'react';
import Input from '../../atoms/Input';
import Image from 'next/image';
import Button from '../../atoms/Button';
import SearchResults from '../../atoms/SearchResults';
import useOnClickOutside from '@/hooks/useOnClickOutSide';
import { styled } from '@/stitches.config';
import { useRouter } from 'next/router';

interface Props {
  searchText: string;
  setSearchText: (value: string) => void;
  searchResults: string[];
}

const StyledSearchBarWrapper = styled('div', {
  margin: '0 $4',
  marginTop: 'calc(213px - $sizes$header)',
  position: 'relative',
  maxWidth: '629px',
  borderRadius: '$1',
  background: '$grey0',
  '& div': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '$4',
    gap: '$3',
    width: '$w100',
    borderRadius: '$1',
  },
});

const SearchBar: FC<Props> = ({
  searchText,
  setSearchText,
  searchResults,
}): JSX.Element => {
  const [showSearchResults, setShowSearchResults] = useState(true);
  const resultsContainer = useRef<HTMLDivElement>(null);
  useOnClickOutside(resultsContainer, () => setShowSearchResults(false));
  const router = useRouter();

  return (
    <StyledSearchBarWrapper
      ref={resultsContainer}
      role="button"
      onClick={() => {
        setShowSearchResults(true);
      }}
      onKeyDown={() => {}}
      tabIndex={0}
    >
      <div>
        <Image
          src="/svgs/searchIcon.svg"
          alt="Search icon"
          width={24}
          height={24}
          priority
        />
        <Input
          type="text"
          placeholder="Search..."
          onChange={({ target: { value } }) => setSearchText(value)}
          value={searchText}
        />
        <Button
          onClick={() =>
            searchText
              ? router.push(`/pokemon/${encodeURIComponent(searchText)}`)
              : {}
          }
          search
        >
          Search
        </Button>
      </div>
      <SearchResults
        searchResults={searchResults}
        showSearchResults={showSearchResults}
      />
    </StyledSearchBarWrapper>
  );
};

export default SearchBar;
