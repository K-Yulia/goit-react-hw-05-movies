import { fetchTrendingMovies} from 'Services/movies-api';
import { useEffect, useState, } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';
import { Title } from '../components/MoviesList/MoviesList.styled';

const Home = () => {
 const [movies, setMovies] = useState([]);

   const location = useLocation();
  // useEffect(() => {
  //       getTrendingMovies().then(data => setMovies(data));
  // }, []);
  useEffect(() => {
    async function getMovies() {
      try {
        const data = await fetchTrendingMovies();
        setMovies(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getMovies();
  }, []);
    return (<div>
    <Title>Trending today</Title>
       <MoviesList movies={movies} state={{ from: location }} />
    </div>)
}
export default Home;