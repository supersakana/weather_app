// import your function
import callApi from './fetch';
import './style.css';

document.querySelector('#submit').addEventListener('click', async (e) => {
  e.preventDefault();
  const city = document.querySelector('#search');
  callApi(city.value);
  city.value = '';
});
