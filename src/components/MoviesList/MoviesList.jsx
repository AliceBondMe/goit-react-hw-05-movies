import { useLocation } from 'react-router-dom';
import {
  CardLink,
  Image,
  ImgWrap,
  List,
  Rating,
  Title,
} from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  const POSTERS_URL = 'https://image.tmdb.org/t/p/';

  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <List>
      {movies.map(movie => (
        <li key={movie.id}>
          <CardLink
            to={
              location.pathname === '/' ? `movies/${movie.id}` : `${movie.id}`
            }
            state={{ from: location }}
          >
            <ImgWrap>
              <Image
                src={
                  movie.poster_path
                    ? `${POSTERS_URL}w200${movie.poster_path}`
                    : 'https://cdn.pixabay.com/photo/2014/01/21/16/01/backdrop-249158_1280.jpg'
                }
                alt={movie.title}
              />
            </ImgWrap>
            <Title>{movie.title}</Title>
            <p>
              {movie.release_date
                ? new Date(movie.release_date).toLocaleDateString(
                    'en-US',
                    dateOptions
                  )
                : ''}
            </p>
            <Rating
              $color={ratingColorDetect(Math.round(movie.vote_average * 10))}
            >
              {movie.vote_average === 0
                ? 'NR'
                : `${Math.round(movie.vote_average * 10)}%`}
            </Rating>
          </CardLink>
        </li>
      ))}
    </List>
  );
};

export default MoviesList;

function ratingColorDetect(number) {
  let color;
  if (!number) {
    color = 'grey';
  } else if (number < 50) {
    color = 'red';
  } else if (number < 70) {
    color = 'orange';
  } else if (number >= 70) {
    color = 'green';
  }
  return color;
}
