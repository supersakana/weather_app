import { appendResults, weatherCard } from './dom';

async function callApi(city) {
  appendResults('Loading...');
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e7775dd9f2432256b7d57eb357896009`, { mode: 'cors' });
    const data = await response.json();
    weatherCard(data);
  } catch {
    appendResults(`<p>Invalid search for "${city}"</p>`);
  }
}

export default callApi;
