import { FC } from 'react';
import Input from '../../atoms/Input';

interface Props {
  searchText?: string;
  setSearchText?: () => void;
}

const defaultProps = {
  searchText: '',
  setSearchText: () => {},
};

const SearchBar: FC<Props> = ({ searchText, setSearchText }): JSX.Element => {
  return (
    <div>
      <Input
        type="search"
        placeholder="Search"
        onChange={setSearchText!}
        value={searchText!}
      />
    </div>
    // <input
    //   type="text"
    //   value={searchText}
    //   onChange={() => {}}
    //   // onChange={(e) => setSearchText(e.target.value)}
    //   placeholder="Search..."
    // />
  );
};

SearchBar.defaultProps = defaultProps;

export default SearchBar;
