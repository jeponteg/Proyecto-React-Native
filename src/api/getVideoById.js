import { API_HOST, API_KEY } from "./constants";

const getVideoById = (idmovie) => {

    const url = `${API_HOST}/movie/${idmovie}/videos?api_key=${API_KEY}`;
        return fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          return result;
        });
    
}

export default getVideoById
