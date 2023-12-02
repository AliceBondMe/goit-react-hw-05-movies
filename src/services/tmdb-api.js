import axios from 'axios';

export async function searchTrendingMovies() {
  const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day';
  const searchParams = new URLSearchParams({
    api_key: '81bc6a75d9ad77927c9b3f7e8ad30411',
  });

  const response = await axios.get(`${BASE_URL}?${searchParams}`);
  return response.data;
}

export async function searchMovieById(id) {
  const BASE_URL = 'https://api.themoviedb.org/3/movie/';
  const searchParams = new URLSearchParams({
    api_key: '81bc6a75d9ad77927c9b3f7e8ad30411',
  });

  const response = await axios.get(`${BASE_URL}/${id}?${searchParams}`);
  return response.data;
}
