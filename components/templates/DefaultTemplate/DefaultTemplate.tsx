import React, { FC, useState } from 'react';
import Head from 'next/head';
import Header from '@/components/UI/molecules/Header';
import SearchBar from '@/components/UI/molecules/SearchBar';
import useDebounce from '@/pages/hooks/useDebounce';
import { useFindPokemonSuggestions } from '@/pages/hooks/usePokemon';
import Container from '@/components/UI/atoms/Container';
import { styled } from '@/stitches.config';

interface Props {
  children?: React.ReactNode;
}

const StyledDiv = styled('div', {
  background: '#f0f0f0',
});

const DefaultTemplate: FC<Props> = ({ children }): JSX.Element => {
  const [searchValue, setSearchValue] = useState('');
  const debounedSearchValue = useDebounce(searchValue, 300);

  const { data: pokemon } = useFindPokemonSuggestions(debounedSearchValue);

  const handleSetSearchValue = (value: string) => {
    setSearchValue(value);
  };

  return (
    <StyledDiv>
      <Head>
        <title>Pokemon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container>
        <SearchBar
          setSearchText={handleSetSearchValue}
          searchText={searchValue}
          searchResults={pokemon ?? []}
        />
        <main>{children}</main>
      </Container>
    </StyledDiv>
  );
};

export default DefaultTemplate;
