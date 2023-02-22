import React, { FC, useState } from 'react';
import Head from 'next/head';
import Header from '@/components/UI/molecules/Header';
import SearchBar from '@/components/UI/molecules/SearchBar';
import useDebounce from '@/pages/hooks/useDebounce';
import { useFindPokemonSuggestions } from '@/pages/hooks/usePokemon';
import ContainerW1024 from '@/components/UI/atoms/ContainerW1024';

interface Props {
  children?: React.ReactNode;
}

const DefaultTemplate: FC<Props> = ({ children }): JSX.Element => {
  const [searchValue, setSearchValue] = useState('');
  const debounedSearchValue = useDebounce(searchValue, 300);

  const { data: pokemon } = useFindPokemonSuggestions(debounedSearchValue);

  const handleSetSearchValue = (value: string) => {
    setSearchValue(value);
  };

  return (
    <div>
      <Head>
        <title>Pokemon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ContainerW1024>
        <SearchBar
          setSearchText={handleSetSearchValue}
          searchText={searchValue}
          searchResults={pokemon ?? []}
        />
        <main>{children}</main>
      </ContainerW1024>
    </div>
  );
};

export default DefaultTemplate;
