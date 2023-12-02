import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { searchTrendingMovies } from 'services/tmdb-api';
import { PageTitle } from './HomePage.styled';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchTrendingMovies().then(({ results }) => setMovies(results));
  }, []);

  return (
    <div>
      <PageTitle>Popular today:</PageTitle>
      <MoviesList movies={movies} />
    </div>
  );
};

export default HomePage;
