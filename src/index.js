// import your function
import fetchApi from './fetch';
// import { changeDegree } from './degree';
import './style.css';

document.querySelector('#submit').addEventListener('click', async (e) => {
  e.preventDefault();
  const city = document.querySelector('#search');
  fetchApi(city.value);
  city.value = '';
});
