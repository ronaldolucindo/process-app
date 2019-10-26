import { useState } from 'react';
import { useHistory } from 'react-router';

function useSearch(initialValue) {
  const history = useHistory();
  const [searchValue, setSearchValue] = useState(initialValue);

  const handleSearchChange = e => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
    const searchParam = encodeURI(searchValue);
    history.push(`/search/${searchParam}`);
  };

  return [searchValue, handleSearchChange, handleSearchSubmit];
}

export default useSearch;
