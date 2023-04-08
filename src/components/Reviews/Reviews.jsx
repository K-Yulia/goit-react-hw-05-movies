import { useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieReviews } from "Services/movies-api";
import {ReviewList, ReviewText,  ReviewItem } from './Reviews.styled';

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
      <ReviewList>
        {movieReviews.length === 0 ? (
          <ReviewText>We don't have any reviews for this movie.</ReviewText>
        ) : (
          movieReviews.map(item => (
            <ReviewItem key={item.id}>
              <ReviewText>Author: {item.author}</ReviewText>
              <p> {item.content}</p>
            </ReviewItem>
          ))
        )}
      </ReviewList>
            </div>
            </>
    )
}
export default Reviews;
