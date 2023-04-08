import { fetchSearchMovies} from 'Services/movies-api';
import { useEffect, useState} from 'react';
import { useSearchParams, useLocation} from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';
import Searchbar from '../components/Searchbar/Searchbar';


const Movies = () => {
   const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('query');
    const location = useLocation();
    useEffect(() => {
    if (!query) {
      return;
    }
    async function getSearchMovie() {
      try {
        const data = await fetchSearchMovies(query);
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    }
    getSearchMovie();
    }, [query]);
    
    function handleFormSubmit(query) {
    setSearchParams({ query });
  }
    
    return (
        <>
    <Searchbar onSubmit={handleFormSubmit} />
      {movies && (<MoviesList movies={movies} state={{ from: location }} />
    )}
        </>)
}
export default Movies;