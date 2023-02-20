import { FC } from 'react';

interface Props {
  searchText: string;
  setSearchText: (query: string) => void;
}

const SearchBar: FC<Props> = ({ searchText, setSearchText }): JSX.Element => {
  return (
    <input
      type="text"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      placeholder="Search..."
    />
  );
};

export default SearchBar;
