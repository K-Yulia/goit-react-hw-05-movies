import { useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieCredits } from "Services/movies-api";
import avatar from '..//..//img/no-foto.jpg';
import {CastList, CastItem, CastImg, CastTitle} from './Cast.styled';
const Cast = () => {
    const { movieId } = useParams();
    const [movieCast, setMovieCast] = useState([]);
    
    useEffect(() => {
    async function getMovieCredits() {
      try {
        const data = await fetchMovieCredits(movieId);
        setMovieCast(data);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieCredits();
  }, [movieId])
    return (
        <>
           <div>
      <CastList>
        {movieCast.length === 0 ? (
          <p>We don't have any cast for this movie.</p>
        ) : (
          movieCast.map(item => (
            <CastItem key={item.cast_id}>
              <CastImg
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/original/${item.profile_path}`
                    : avatar
                }
                alt="{item.name}"
              />
              <CastTitle>{item.name}</CastTitle>
              <CastTitle>Character: {item.character}</CastTitle>
            </CastItem>
          ))
        )}
      </CastList>
            </div>
            </>
    )
}
export default Cast;
