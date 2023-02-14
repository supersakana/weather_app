import { leftBar } from './left';
import { rightBar } from './right';
import { changeDegree } from './degree';

function appendResults(content) {
  const results = document.querySelector('#results');
  results.innerHTML = content;
}

function hideContent() {
  document.querySelector('#results').classList.add('hidden');
  document.querySelector('#form').classList.add('hidden');
  document.querySelector('#title').classList.add('hidden');
  document.querySelector('#error').innerHTML = '';
}

function displayContent() {
  document.querySelector('#results').classList.remove('hidden');
  document.querySelector('#form').classList.remove('hidden');
  document.querySelector('#load').innerHTML = '';
}

function displayError(city) {
  document.querySelector('#form').classList.remove('hidden');
  document.querySelector('#load').innerHTML = '';
  document.querySelector('#error').innerHTML = `Invalid search for "${city}"`;
}

function weatherCard(current, forcast) {
  appendResults(
    `
      ${leftBar(current)}
      ${rightBar(current, forcast)}
    `,
  );
}

function displayResults(current, forcast) {
  weatherCard(current, forcast);
  displayContent();
  document.querySelectorAll('.degree').forEach((btn) => btn.addEventListener('click', changeDegree));
}

export {
  appendResults, weatherCard, hideContent, displayContent, displayError, displayResults,
};
