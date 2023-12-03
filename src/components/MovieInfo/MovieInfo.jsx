import {
  Container,
  Information,
  LineHeader,
  Poster,
  Title,
} from './MovieInfo.styled';

const POSTERS_URL = 'https://image.tmdb.org/t/p/';

const dateOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const MovieInfo = ({ movieData }) => {
  return (
    <Container>
      <Poster
        src={
          movieData.poster_path
            ? `${POSTERS_URL}w300${movieData.poster_path}`
            : 'https://cdn.pixabay.com/photo/2014/01/21/16/01/backdrop-249158_1280.jpg'
        }
        alt={movieData.title}
      />
      <Information>
        <Title>{`${movieData.title} (${
          movieData.release_date
            ? new Date(movieData.release_date).getFullYear()
            : 'year unknown'
        })`}</Title>
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
  );
};
export default MovieInfo;
