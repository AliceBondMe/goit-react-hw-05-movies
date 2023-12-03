import { Error } from 'pages/HomePage/HomePage.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesData } from 'services/tmdb-api';
import { Author, Item, Url } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!movieId) {
      return;
    }
    fetchMoviesData('reviews', movieId)
      .then(({ results }) => {
        if (!results.length) {
          setError('There are no reviews yet :(');
          return;
        }
        setReviews(results);
        setError('');
      })
      .catch(() =>
        setError(
          'We are sorry, but something went wrong :( Please, try again later'
        )
      );
  }, [movieId]);

  return (
    <div>
      {error === '' ? (
        <div>
          <ul>
            {reviews.map(review => (
              <Item key={review.id}>
                <Author>Author: {review.author}</Author>
                <p>
                  {review.content.length < 500
                    ? review.content
                    : `${review.content.slice(0, 500)}...`}
                </p>
                {review.content.length > 500 && (
                  <Url href={review.url} target="blank">
                    Read full review
                  </Url>
                )}
              </Item>
            ))}
          </ul>
        </div>
      ) : (
        <Error>{error}</Error>
      )}
    </div>
  );
};

export default Reviews;
