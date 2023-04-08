import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { GoSearch } from 'react-icons/go';
import { Header, SearchForm, SearchFormBtn, SearchFormInput} from './Searchbar.styled'


const Searchbar = ({onSubmit}) => {
  const [query, setQuery] = useState('');
  
const handleInput = event => {
   setQuery(event.target.value.toLowerCase());
  };

  const handleFormSUbmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      toast.error('Please, enter some text', {
        position: 'top-center',
        duration: 3000,
          });
      return;
    }
    onSubmit(query);
    setQuery('');
  };
 
    return (
      <Header className="Searchbar">
        <SearchForm onSubmit={handleFormSUbmit}>
          <SearchFormBtn type="submit" className="SearchFormButton">
            <GoSearch style={{ width: 20, height: 20 }} />
          </SearchFormBtn>
          <SearchFormInput
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            name="query"
            value={query}
            autoFocus
            onChange={handleInput}
            placeholder="Search movies"
          />
        </SearchForm>
      </Header>
    );
  }


Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;