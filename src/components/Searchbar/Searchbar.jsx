import { Formik } from 'formik';
import {
  SearchForm,
  SearchFormButton,
  ButtonLabel,
  SearchInput,
  ButtonImg,
} from './Searchbar.styled';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Searchbar = () => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState('');

  const handleChange = ({ target: { value } }) => {
    if (!value) setSearchParams({});
    setQuery(value);
  };

  const handleSearch = () => {
    if (query === '') {
      setError('Please enter your search query');
      return;
    }
    setSearchParams({ query: query });
    setError('');
  };

  useEffect(() => {
    const value = searchParams.get('query');
    if (value) {
      setQuery(value);
    }
  }, [searchParams]);

  return (
    <>
      <Formik initialValues={{ searchQuery: '' }} onSubmit={handleSearch}>
        <SearchForm>
          <SearchInput
            value={query}
            name="searchQuery"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search films"
            onChange={handleChange}
          />

          <SearchFormButton type="submit">
            <ButtonImg />
            <ButtonLabel>Search</ButtonLabel>
          </SearchFormButton>
        </SearchForm>
      </Formik>

      {error === '' ? '' : <div>{error}</div>}
    </>
  );
};
