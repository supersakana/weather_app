/* eslint-disable */

// make it so only 5 cards max can be produced

import { toF, toC } from './conversion';

function forcastCards(forcast) {
  let date = '';
  let cards = '';
  let i = 0

  forcast.list.forEach((day) => {
    if (date != moment(day.dt_txt).format('MMM D') && i < 5) {
      i += 1
      cards += 
       `
        <div class="bg-white flex flex-col items-center justify-center gap-y-3 py-3 rounded-lg shadow-md">
            <span class="text-md md:text-lg">${moment(day.dt_txt).format('MMM D')}</span> 
            <img class="w-[40px] h-[40px]"src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png">
            <div class="flex text-sm items-center justify-center gap-x-2">
              <div class="flex">
                <span>${toF(day.main.temp_max)}</span>
                <div class="w-[5px] h-[5px] border-black border-[1.5px] rounded-full"></div>
              </div>
              <div class="flex text-gray-400">
                <span>${toF(day.main.temp_min)}</span>
                <div class="w-[5px] h-[5px] border-gray-400 border-[1.5px] rounded-full"></div>
              </div>
            </div>
          </div>
        `;
      date = moment(day.dt_txt).format('MMM D');
    }
  });
  return cards;
}

export { forcastCards };
/* eslint-enable */
