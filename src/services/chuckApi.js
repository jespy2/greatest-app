import axios from 'axios';

export const URI = 'https://api.chucknorris.io/jokes/random';

export const getChuckFact = () => {
  return axios
      .get(URI)
      .then((res) => res.data)
      .catch(error => {
        console.log(error);
      })
  };