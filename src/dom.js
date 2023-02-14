import { leftBar } from './left';
import { rightBar } from './right';

function appendResults(content) {
  const results = document.querySelector('#results');
  results.innerHTML = content;
}

function hideContent() {
  document.querySelector('#results').classList.add('hidden');
  document.querySelector('#form').classList.add('hidden');
  document.querySelector('#title').classList.add('hidden');
}

function displayContent() {
  document.querySelector('#results').classList.remove('hidden');
  document.querySelector('#form').classList.remove('hidden');
  document.querySelector('#load').innerHTML = '';
}

function weatherCard(current, forcast) {
  appendResults(
    `
      ${leftBar(current)}
      ${rightBar(current, forcast)}
    `,
  );
}

export {
  appendResults, weatherCard, hideContent, displayContent,
};
