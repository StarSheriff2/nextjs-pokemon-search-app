import { FC } from 'react';
import Input from '../../atoms/Input';
import Image from 'next/image';
import { styled } from '@stitches/react';
import Button from '../../atoms/Button';

interface Props {
  searchText: string;
  setSearchText: (value: string) => void;
  searchResult: string[];
}

const StyledSearchBar = styled('div', {
  marginTop: 'calc(213px - 92px)',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  paddingLeft: '1rem',
  gap: '12px',
  maxWidth: '629px',
  borderRadius: '8px',
  border: 'red solid 2px',
});

const StyledUl = styled('ul', {
  '& li': {
    borderBottom: '#004368 solid 2px',
    borderRight: '#004368 solid 2px',
    borderLeft: '#004368 solid 2px',
    padding: '0.25rem',
    width: '50%',
    marginLeft: '3rem',
  },
});

const SearchBar: FC<Props> = ({
  searchText,
  setSearchText,
  searchResult,
}): JSX.Element => {
  return (
    <>
      <StyledSearchBar>
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
      </StyledSearchBar>
      <div>
        Results
        <StyledUl>
          {searchResult.map((result) => {
            return <li key={result}>{result}</li>;
          })}
        </StyledUl>
      </div>
    </>
  );
};

export default SearchBar;
