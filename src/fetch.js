import { appendResults, weatherCard } from './dom';
import { changeDegree } from './degree';
import { loading } from './load';

// clean up
async function callApi(city) {
  document.querySelector('#results').classList.add('hidden');
  document.querySelector('#form').classList.add('hidden');
  document.querySelector('#title').classList.add('hidden');
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
  document.querySelector('#results').classList.remove('hidden');
  document.querySelector('#form').classList.remove('hidden');
  document.querySelector('#load').innerHTML = '';

  document.querySelectorAll('.degree').forEach((btn) => {
    btn.addEventListener('click', () => {
      changeDegree();
    });
  });
}

export default callApi;
