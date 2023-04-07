
import { Suspense, useRef, useState, useEffect } from "react";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import MovieInfo from 'components/MovieInfo/MovieInfo';
import { fetchMovieDetails } from "Services/movies-api";
import { GoBackBtn, Title, List} from '../components/MovieInfo/MovieInfo.styled';


const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  
    
    useEffect(() => {
    async function getMovieDetails() {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieDetails();
  }, [movieId])
     return <>
       <GoBackBtn to={backLinkLocationRef.current}> ← Go back</GoBackBtn>
       {movie && <MovieInfo movie={movie} />}

       <Title>Additional information</Title>
      <List>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
         </List>
         <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
    </>
}
export default MovieDetails;