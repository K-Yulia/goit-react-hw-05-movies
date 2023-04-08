import PropTypes from 'prop-types';
import { Item, LinkStyled } from './MoviesList.styled';

const MoviesList = ({ movies, state }) => {
   
  return (
    <div>
         <ul>
          {movies.map(movie => {
            return (
              <Item key={movie.id}>
                         <LinkStyled to={`/movies/${movie.id}`} state={state}>
                  {movie.name || movie.title}
                </LinkStyled>
              </Item>
            );
          })}
        </ul>
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesList;