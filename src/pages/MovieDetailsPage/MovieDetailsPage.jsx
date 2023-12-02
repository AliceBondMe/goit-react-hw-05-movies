import { Suspense, useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
import { searchMovieById } from 'services/tmdb-api';
import {
  Container,
  Information,
  LineHeader,
  Title,
} from './MovieDetailsPage.styled';

const POSTERS_URL = 'https://image.tmdb.org/t/p/';

const dateOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    searchMovieById(Number(movieId)).then(results => setMovieData(results));
  }, [movieId]);

  if (!movieData) {
    return;
  }
  return (
    <>
      <Link to="/">Go back</Link>

      <Container>
        <img
          src={`${POSTERS_URL}w300${movieData.poster_path}`}
          alt={movieData.title}
        />
        <Information>
          <Title>{`${movieData.title} (${new Date(
            movieData.release_date
          ).getFullYear()})`}</Title>
          <p>
            <LineHeader>Release date:</LineHeader>{' '}
            {new Date(movieData.release_date).toLocaleDateString(
              'en-US',
              dateOptions
            )}
          </p>
          <p>
            <LineHeader>Rating: </LineHeader>
            {movieData.vote_average === 0
              ? 'Not rated'
              : `${Math.round(movieData.vote_average * 10)}%`}
          </p>
          <p>
            <LineHeader>Genres:</LineHeader>{' '}
            {movieData.genres.map(({ name }) => name).join(', ') || 'None'}
          </p>
          <p>
            <LineHeader>Promo:</LineHeader> {movieData.tagline || 'None'}
          </p>
          <p>
            <LineHeader>Overview:</LineHeader> {movieData.overview || 'None'}
          </p>
        </Information>
      </Container>
      <h2>Additional information</h2>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
