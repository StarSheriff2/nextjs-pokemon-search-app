import { FC } from 'react';
import Input from '../../atoms/Input';
import Image from 'next/image';
import { styled } from '@stitches/react';
import Button from '../../atoms/Button';
import SearchResults from '../../atoms/SearchResults';

interface Props {
  searchText: string;
  setSearchText: (value: string) => void;
  searchResults: string[];
}

const StyledSearchBarWrapper = styled('div', {
  marginTop: 'calc(213px - 92px)',
  position: 'relative',
  maxWidth: '629px',
  borderRadius: '8px',
  background: '#ffffff',
  border: 'red solid 2px',
  '& div': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '1rem',
    gap: '12px',
    width: '100%',
    borderRadius: '8px',
  },
});

const SearchBar: FC<Props> = ({
  searchText,
  setSearchText,
  searchResults,
}): JSX.Element => {
  return (
    <StyledSearchBarWrapper>
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
          onChange={setSearchText}
          value={searchText}
        />
        <Button onClick={() => {}} text="Search" search />
      </div>
      <SearchResults searchResults={searchResults} />
    </StyledSearchBarWrapper>
  );
};

export default SearchBar;
