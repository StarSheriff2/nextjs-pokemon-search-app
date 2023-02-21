import { FC } from 'react';
import Input from '../../atoms/Input';
import Image from 'next/image';
import { styled } from '@stitches/react';
import Button from '../../atoms/Button';

interface Props {
  searchText?: string;
  setSearchText?: () => void;
}

const defaultProps = {
  searchText: '',
  setSearchText: () => {},
};

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

const SearchBar: FC<Props> = ({ searchText, setSearchText }): JSX.Element => {
  return (
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
        onChange={setSearchText!}
        value={searchText!}
      />
      <Button onClick={() => {}} text="Search" search />
    </StyledSearchBar>
  );
};

SearchBar.defaultProps = defaultProps;

export default SearchBar;
