import { CardLink, Image, List, Rating, Title } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
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
          <CardLink to={`movies/${movie.id}`}>
            <Image
              src={`${POSTERS_URL}w200${movie.poster_path}`}
              alt={movie.title}
            />
            <Title>{movie.title}</Title>
            <p>
              {new Date(movie.release_date).toLocaleDateString(
                'en-US',
                dateOptions
              )}
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
