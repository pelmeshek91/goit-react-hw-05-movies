import { Button, Form, Input } from './SearchForm.styled';

const SearchForm = ({ resultBySearch, setSearchParams, querySearch }) => {
  const handleChange = ({ target: { value } }) => {
    const nextParams = value !== '' ? { search: value } : {};
    setSearchParams(nextParams);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    resultBySearch();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        <Input
          onChange={handleChange}
          type="text"
          name="search"
          value={querySearch}
        />
      </label>
      <Button>Search</Button>
    </Form>
  );
};

export default SearchForm;
