import { useState } from 'react';
import { Button, Form, Input } from './SearchForm.styled';

const SearchForm = ({ resultBySearch }) => {
  const [search, setSearch] = useState('');

  const handleChange = ({ target: { value } }) => {
    const nextParams = value !== '' ? { query: value } : {};
    setSearch(nextParams);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    resultBySearch(search);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        <Input
          onChange={handleChange}
          type="text"
          name="search"
          value={search?.query ? search.query : ''}
        />
      </label>
      <Button>Search</Button>
    </Form>
  );
};

export default SearchForm;
