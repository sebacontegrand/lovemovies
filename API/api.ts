import axios, { AxiosResponse } from 'axios';
export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const fetchMovies = async (): Promise<Movie[]> => {
const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/discover/movie',
  params: {
    include_adult: 'false',
    include_video: 'false',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc'
  },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMGMyOGE5ZjUxYTk2MzljNWNiNmVkNGI0YTk4YzI3NSIsInN1YiI6IjY1NDI1NjkyMjg2NmZhMDBlMWVjZGNmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zD9ZX9bGmYs6enr8r8riY0T86o5PgQe3P4qge1wHHXA'
  }
};

try {
  const response: AxiosResponse<{ results: Movie[] }> = await axios.request(options);
  return response.data.results;
} catch (error) {
  console.error(error);
  throw error;
}

}