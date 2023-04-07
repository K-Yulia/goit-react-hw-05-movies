// import { useParams } from "react-router-dom";
import { useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieReviews } from "Services/movies-api";
import {ReviewItem } from './Reviews.styled';
const Reviews = () => {
    const { movieId } = useParams();
    const [movieReviews, setMovieReviews] = useState([]);
    
    useEffect(() => {
    async function getMovieReviews() {
      try {
        const data = await fetchMovieReviews(movieId);
        setMovieReviews(data);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieReviews();
  }, [movieId])
    return (
        <>
           <div>
      <ul>
        {movieReviews.length === 0 ? (
          <p>We don't have any reviews for this movie.</p>
        ) : (
          movieReviews.map(item => (
            <ReviewItem key={item.id}>
              <p>Author: {item.author}</p>
              <p> {item.content}</p>
            </ReviewItem>
          ))
        )}
      </ul>
            </div>
            </>
    )
}
export default Reviews;
