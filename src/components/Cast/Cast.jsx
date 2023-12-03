import { Error } from 'pages/HomePage/HomePage.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesData } from 'services/tmdb-api';
import { Info, Item, List, Name, Photo, PhotoWrap } from './Cast.styled';

const POSTERS_URL = 'https://image.tmdb.org/t/p/';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!movieId) {
      return;
    }
    fetchMoviesData('cast', movieId)
      .then(({ cast }) => {
        if (!cast.length) {
          setError(
            'We are sorry, but something went wrong :( Please, try again later'
          );
          return;
        }
        setCast(cast);
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
          <List>
            {cast.map(actor => (
              <Item key={actor.id}>
                <PhotoWrap>
                  <Photo
                    src={
                      actor.profile_path
                        ? `${POSTERS_URL}w200${actor.profile_path}`
                        : 'https://cdn.pixabay.com/photo/2013/05/30/18/21/cat-114782_1280.jpg'
                    }
                    alt={actor.name}
                  />
                </PhotoWrap>
                <Name>{actor.name}</Name>
                <Info>as {actor.character}</Info>
              </Item>
            ))}
          </List>
        </div>
      ) : (
        <Error>{error}</Error>
      )}
    </div>
  );
};

export default Cast;
