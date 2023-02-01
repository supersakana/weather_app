import { toF, toC } from './temp';

async function callApi(city) {
  console.log('loading');
  const results = document.querySelector('#results');
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e7775dd9f2432256b7d57eb357896009`, { mode: 'cors' });
    const data = await response.json();
    results.innerHTML = '';

    results.append(`${data.name},
                  ${data.weather[0].main},
                   Current: ${toF(data.main.temp)}/${toC(data.main.temp)},
                   High: ${toF(data.main.temp_max)}/${toC(data.main.temp_max)},
                   Low: ${toF(data.main.temp_min)}/${toC(data.main.temp_min)}`);
  } catch {
    const err = `Invalid search for "${city}"`;
    results.append(err);
  } finally {
    console.log('finished');
  }
}

export default callApi;

// e7775dd9f2432256b7d57eb357896009
