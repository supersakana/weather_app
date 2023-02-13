// import { parseInt } from 'lodash';
import { toF, toC } from './conversion';

/* eslint-disable */
function updateUnit(unit){
  if (unit.dataset.temp == 'f'){
    unit.dataset.temp = 'c'
  } else {
    unit.dataset.temp = 'f'
  }
}

function changeDegree() {
  const temps = document.querySelectorAll('.temp');
  let unit = document.querySelector('#results')
  console.log(unit.dataset.temp)

  temps.forEach((temp) => {
    if (unit.dataset.temp == 'f'){
      temp.innerHTML = temp.dataset.c
    } else {
      temp.innerHTML = temp.dataset.f
    }
  })
  updateUnit(unit)
}

function displayTemp(temp) {
  if (document.querySelector('#results').dataset.temp === 'c') {
    return toC(temp);
  }
  return toF(temp);
}

export { changeDegree, displayTemp };
/* eslint-enable */
