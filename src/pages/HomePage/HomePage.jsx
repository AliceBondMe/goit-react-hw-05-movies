import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { fetchMoviesData } from 'services/tmdb-api';
import { Error, PageTitle } from './HomePage.styled';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchMoviesData('trending')
      .then(({ results }) => {
        if (!results.length) {
          setError(
            'We are sorry, but something went wrong :( Please, try again later'
          );
          return;
        }
        setMovies(results);
        setError('');
      })
      .catch(() =>
        setError(
          'We are sorry, but something went wrong :( Please, try again later'
        )
      );
  }, []);

  return (
    <div>
      <PageTitle>Popular today:</PageTitle>
      {error === '' ? <MoviesList movies={movies} /> : <Error>{error}</Error>}
    </div>
  );
};

export default HomePage;
