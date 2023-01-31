// import your function
import test from './one';
import './style.css';

function component() {
  const element = document.createElement('div');

  element.textContent = test('Zac');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());
