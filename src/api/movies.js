import { API_HOST, API_KEY, LANG  } from "./constants";

const getNewsMovieApi = (page = 1) => {
  const url = `${API_HOST}/movie/now_playing?api_key=${API_KEY}&language=${LANG}&page=${page}`;
  console.log(url)
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    });
}

export default getNewsMovieApi