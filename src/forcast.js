/* eslint-disable */
import { toF, toC } from './conversion';
import { displayTemp } from './degree';

function forcastCards(forcast, i = 0, date = '', cards = '') {

  forcast.list.forEach((day) => {
    if (date != moment(day.dt_txt).format('MMM D') && i < 5 && day.weather[0].icon.includes('d')) {
      i += 1
      cards += 
       `
        <div class="bg-white flex flex-col items-center justify-center gap-y-3 py-3 rounded-lg shadow-md">
            <span class="text-md md:text-lg">${moment(day.dt_txt).format('MMM D')}</span> 
            <img class="w-[40px] h-[40px]"src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png">
            <div class="flex text-sm items-center justify-center gap-x-2">
              <div class="flex">
                <span data-f="${toF(day.main.temp_max)}" data-c="${toC(day.main.temp_max)}" class="temp">${displayTemp(day.main.temp_max)}</span>
                <div class="w-[5px] h-[5px] border-black border-[1.5px] rounded-full"></div>
              </div>
              <div class="flex text-gray-400">
              <span data-f="${toF(day.main.temp_min)}" data-c="${toC(day.main.temp_min)}" class="temp">${displayTemp(day.main.temp_min)}</span>
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
