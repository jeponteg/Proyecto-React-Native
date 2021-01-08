import { API_HOST, API_KEY, LANG  } from "./constants";

const getNewsMovieApi = (page = 1) => {

  const url = `${API_HOST}/movie/popular?api_key=${API_KEY}&language=${LANG}&page=${page}`
  
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    });
}

export default getNewsMovieApi

