import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';

import { fetchMoviesData } from 'services/tmdb-api';
import { Loader } from 'components/Loader/Loader';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import { Error } from 'pages/HomePage/HomePage.styled';
import {
  AdditionalNav,
  BackLink,
  NavLinkStyled,
  NavList,
} from './MovieDetailsPage.styled';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState('');
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetchMoviesData('movieById', Number(movieId))
      .then(results => {
        setMovieData(results);
        setError('');
      })
      .catch(err => {
        setError(
          'We are sorry, but something went wrong :( Please, try again later. You will be automatically redirected to Home page.'
        );
        setTimeout(() => {
          navigate('/');
        }, 2000);
      });
  }, [movieId, navigate]);

  return (
    <>
      <BackLink to={state?.from ?? '/'}>Go back</BackLink>

      {error === '' && movieData ? (
        <>
          <MovieInfo movieData={movieData} />

          <AdditionalNav>
            <h2>Additional information: </h2>
            <NavList>
              <li>
                <NavLinkStyled to="cast" state={{ from: state?.from }}>
                  Cast
                </NavLinkStyled>
              </li>
              <li>
                <NavLinkStyled to="reviews" state={{ from: state?.from }}>
                  Reviews
                </NavLinkStyled>
              </li>
            </NavList>
          </AdditionalNav>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      ) : (
        <Error>{error}</Error>
      )}
    </>
  );
};

export default MovieDetailsPage;
