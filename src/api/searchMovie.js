import { API_HOST, API_KEY, LANG  } from "./constants";

const searchMovie = (search) => {

  const url = `${API_HOST}/search/movie?api_key=${API_KEY}&language=${LANG}&query=${search}`
  
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    });
}

export default searchMovie