// import your function
import callApi from './fetch';
import { toF, toC } from './temp';
import './style.css';

document.querySelector('#submit').addEventListener('click', async (e) => {
  e.preventDefault();
  const results = document.querySelector('#results');
  results.innerHTML = '';

  const city = document.querySelector('#search');
  const data = await callApi(city.value);
  results.append(`${data.name},
                  ${data.weather[0].main},
                   Current: ${toF(data.main.temp)}/${toC(data.main.temp)},
                   High: ${toF(data.main.temp_max)}/${toC(data.main.temp_max)},
                   Low: ${toF(data.main.temp_min)}/${toC(data.main.temp_min)}`);

  city.value = '';
});
