// import { parseInt } from 'lodash';
import { toF, toC } from './conversion';

/* eslint-disable */
function changeDegree() {
  const temps = document.querySelectorAll('.temp');
  const unit = document.querySelector('#results').dataset.temp

  // temps.forEach((temp) => {
  //   if (unit == 'f'){
  //     temp.innerHTML = Math.round((5/9) * (parseInt(temp.innerHTML) - 32))
  //   } else {
  //     temp.innerHTML = Math.round(((9/5) * parseInt(temp.innerHTML)) + 32)
  //   }
  // })
}

function displayTemp(temp) {
  if (document.querySelector('#results').dataset.temp === 'f') {
    return toC(temp);
  }
  return toF(temp);
}

export { changeDegree, displayTemp };
/* eslint-enable */
