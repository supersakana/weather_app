import { toF, toC } from './temp';
import appendResults from './dom';

async function callApi(city) {
  appendResults('Loading...');
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e7775dd9f2432256b7d57eb357896009`, { mode: 'cors' });
    const data = await response.json();

    appendResults(`${data.name},
                  ${data.weather[0].main},
                   Current: ${toF(data.main.temp)}/${toC(data.main.temp)},
                   High: ${toF(data.main.temp_max)}/${toC(data.main.temp_max)},
                   Low: ${toF(data.main.temp_min)}/${toC(data.main.temp_min)}`);
  } catch {
    appendResults(`Invalid search for "${city}"`);
  }
}

export default callApi;
