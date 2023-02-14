import {
  appendResults, weatherCard, hideContent, displayContent,
} from './dom';
import { changeDegree } from './degree';
import { loading } from './load';

async function callApi(city) {
  hideContent();
  loading();
  try {
    const response1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e7775dd9f2432256b7d57eb357896009`, { mode: 'cors' });
    const current = await response1.json();

    const response2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${current.coord.lat}&lon=${current.coord.lon}&appid=e7775dd9f2432256b7d57eb357896009`);
    const forcast = await response2.json();

    weatherCard(current, forcast);
  } catch {
    appendResults(`<p>Invalid search for "${city}"</p>`);
  }
  displayContent();
  document.querySelectorAll('.degree').forEach((btn) => btn.addEventListener('click', changeDegree));
}

export default callApi;
