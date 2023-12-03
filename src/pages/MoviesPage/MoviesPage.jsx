import MoviesList from 'components/MoviesList/MoviesList';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Error } from 'pages/HomePage/HomePage.styled';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesData } from 'services/tmdb-api';

const MoviesPage = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) return;

    fetchMoviesData('searchByQuery', 0, query)
      .then(({ results }) => {
        if (!results.length) {
          setError(
            `We couldn't find movies, mentioning ${query.toUpperCase()}. Try something else`
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
  }, [searchParams]);

  return (
    <div>
      <Searchbar />
      {error === '' ? <MoviesList movies={movies} /> : <Error>{error}</Error>}
    </div>
  );
};

export default MoviesPage;
