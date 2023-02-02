import { toF, toC } from './temp';

function appendResults(content) {
  const results = document.querySelector('#results');
  results.innerHTML = content;
}

function weatherCard(data) {
  appendResults(`<span>${data.name},
                  ${data.weather[0].main},
                   Current: ${toF(data.main.temp)}/${toC(data.main.temp)},
                   High: ${toF(data.main.temp_max)}/${toC(data.main.temp_max)},
                   Low: ${toF(data.main.temp_min)}/${toC(data.main.temp_min)}</span>`);
}

export { appendResults, weatherCard };
