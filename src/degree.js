// import { parseInt } from 'lodash';
import { toF, toC } from './conversion';

/* eslint-disable */
function updateUnit(unit){
  const units = document.querySelectorAll('.unit')

  if (unit.dataset.temp == 'f'){
    unit.dataset.temp = 'c'
    units.forEach((u) => u.innerHTML = 'C')

  } else {
    unit.dataset.temp = 'f'
    units.forEach((u) => u.innerHTML = 'F')
  }
}

function changeDegree() {
  const temps = document.querySelectorAll('.temp');
  let unit = document.querySelector('#results')

  temps.forEach((temp) => {
    (unit.dataset.temp == 'f') ? temp.innerHTML = temp.dataset.c : temp.innerHTML = temp.dataset.f
  })
  updateUnit(unit)
}

function displayTemp(temp) {
  if (document.querySelector('#results').dataset.temp === 'c') {
    return toC(temp);
  }
  return toF(temp);
}

function displayUnit(){
  if (document.querySelector('#results').dataset.temp == 'c') {
    return 'C'
  } else {
    return 'F'
  }
}

export { changeDegree, displayTemp, displayUnit };
/* eslint-enable */
