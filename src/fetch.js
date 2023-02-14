import {
  hideContent, displayError, displayResults,
} from './dom';
import { loading } from './load';

async function fetchApi(city) {
  hideContent();
  loading();
  try {
    const response1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e7775dd9f2432256b7d57eb357896009`, { mode: 'cors' });
    const current = await response1.json();

    const response2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${current.coord.lat}&lon=${current.coord.lon}&appid=e7775dd9f2432256b7d57eb357896009`);
    const forcast = await response2.json();

    displayResults(current, forcast);
  } catch {
    displayError(city);
  }
}

export default fetchApi;
