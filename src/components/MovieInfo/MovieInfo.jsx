import avatar from '..//..//img/No-Image.jpg';
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
        <TitleInfo>Overview</TitleInfo>
        <Text>{overview}</Text>
        <TitleInfo>Genres</TitleInfo>
        <Text> 
          {movieGenres}
        </Text>
      </Info>
    </MovieWrap>
  );
}

export default MovieInfo;