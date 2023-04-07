import axios from 'axios';


const API_KEY = '597f9408c4003b5df23df8b028e83258';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';


export async function fetchTrendingMovies() {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
}


export async function fetchMovieDetails(id) {
  const response = await axios.get(`movie/${id}?api_key=${API_KEY}`);
  return response.data;
}  


export async function fetchMovieCredits(id) {
  const response = await axios.get(`movie/${id}/credits?api_key=${API_KEY}`);
  return response.data.cast;
}  

export async function fetchMovieReviews(id) {
  const response = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}`);
  return response.data.results;
} 

export async function fetchSearchMovies(query) {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}&page=1`
  );
  return response.data.results;
} 