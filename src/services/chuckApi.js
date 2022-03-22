import axios from 'axios';

export const URI = 'https://api.chucknorris.io/jokes/random?category=dev';

export const getChuckFact = () => {
  return axios
      .get(URI)
      .then((res) => {return res.data})
      .catch(error => {return error.toJSON()})
  };