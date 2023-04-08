import avatar from '..//..//img/No-Image.jpg';
import { PropTypes } from 'prop-types';
import { MovieWrap, MovieImage, Info,TitleInfo, MovieTitle, Text } from './MovieInfo.styled';
const MovieInfo = ({ movie: {
    title,
    name,
    poster_path,
    vote_average,
    overview,
    genres,
} }) => {
    
     let movieGenres = '';

  if (genres) {
      movieGenres = genres.map(genre => genre.name).join(' ') || '';
      
  }
     return (
    <MovieWrap>
      <MovieImage
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/original/${poster_path}`
            : avatar
        }
        alt={title}
      />
      <Info>
        <MovieTitle>
          {title || name}
        </MovieTitle>
        <Text>
          User Score: {Math.round(vote_average * 10)}%
        </Text>
        {overview && (
        <>
          <TitleInfo>Overview</TitleInfo>
          <Text>{overview}</Text>
        </>
      )}
      {movieGenres && (
        <>
          <TitleInfo>Genres</TitleInfo>
          <Text>{movieGenres}</Text>
        </>
      )}         
      </Info>
    </MovieWrap>
  );
}

MovieInfo.propTypes = {
  movie: PropTypes.object.isRequired,
}

export default MovieInfo;