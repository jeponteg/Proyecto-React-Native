import { API_HOST, API_KEY, LANG  } from "./constants";

const getMovieById = (id) => {

    const url = `${API_HOST}/movie/${id}?api_key=${API_KEY}&language=${LANG}`;
  
    return fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        return result;
      });
  }

export default getMovieById