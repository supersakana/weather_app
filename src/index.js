// import your function
import callApi from './fetch';
import './style.css';

document.querySelector('#submit').addEventListener('click', async (e) => {
  e.preventDefault();
  const results = document.querySelector('#results');
  results.innerHTML = '';

  const city = document.querySelector('#search');
  const data = await callApi(city.value);
  results.append(`${data.name}, ${data.weather[0].main}, Current: ${data.main.temp}, High: ${data.main.temp_max}, Low: ${data.main.temp_min}`);

  city.value = '';
});
