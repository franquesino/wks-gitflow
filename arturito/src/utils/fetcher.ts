import axios from 'axios';

// Possible alternative: 'https://swapi.dev/api'
const baseURL = 'https://swapi.dev/api';
const starshipsURL = 'https://swapi.dev/api/starships/';

export const swGet = (url: string) =>
  axios.get(url, { baseURL }).then((res) => res.data);




export const starGet = (url: string) =>
  //axios.get(starshipsURL + url).then((res) => res.data);
  axios.get(starshipsURL).then((res) => res.data);

