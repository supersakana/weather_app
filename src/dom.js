import {
  toF, toC, toTime, sunRiseSet, toMph, // eslint-disable-line
} from './conversion';
import { displayTemp, displayUnit } from './degree';
import { forcastCards } from './forcast';

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
    /* eslint-disable */
    `
      <!-- LEFT -->
      <div class="bg-white flex flex-col py-2 px-3 rounded-t-xl md:rounded-r-none md:rounded-l-xl justify-evenly">

        <!-- City -->
        <div class="flex flex-col gap-y-2 my-[20px] md:my-0">
          <h3 class="self-center text-3xl text-center">${current.name}</h3>

          <!-- Date time -->
          <div class="flex justify-center items-center gap-x-1 text-lg">
            <span>${toTime(current.timezone, 'dddd')}</span>
            <span>${toTime(current.timezone, 'h:mm A')}</span>
          </div>
          <hr class="border-gray-200">
        </div>

        <!-- Temp -->
        <div class="flex justify-center">
          <span data-f="${toF(current.main.temp)}" data-c="${toC(current.main.temp)}" class="temp text-6xl md:text-7xl">${displayTemp(current.main.temp)}</span>
          <div class="w-[10px] h-[10px] border-black border-[2px] rounded-full mx-[3px]"></div>
          <span class="unit text-4xl">${displayUnit()}</span>
        </div>

        <!-- High/Low -->
        <div class="flex gap-x-3 text-xl justify-center">

          <!-- High -->
          <div class="flex text-black">
            <span data-f="${toF(current.main.temp_max)}" data-c="${toC(current.main.temp_max)}" class="temp">${displayTemp(current.main.temp_max)}</span>
            <div class="w-[5px] h-[5px] border-black border-[1.5px] rounded-full"></div>
            <span class="unit">${displayUnit()}</span>
          </div>

          <!-- Low -->
          <div class="flex text-gray-400">
            <span data-f="${toF(current.main.temp_min)}" data-c="${toC(current.main.temp_min)}" class="temp">${displayTemp(current.main.temp_min)}</span>
            <div class="w-[5px] h-[5px] border-gray-400 border-[1.5px] rounded-full"></div>
            <span class="unit">${displayUnit()}</span>
          </div>
        </div>

        <!-- Icon -->
        <div class="self-center flex justify-center items-center">
          <img class="w-[50px] h-[50px]"src="http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png">
          <h3 class="text-lg">${current.weather[0].main}</h3>
        </div>
      </div>

        <!-- RIGHT -->
        <div class="my-3 mx-3 md:mx-9 flex flex-col gap-y-3">

        <div class="flex justify-between">
        <span class="cursor-pointer text-2xl text-center md:text-left">5-day Forcast</span>

        <div class="degree flex items-center justify-center bg-white text-black rounded-full w-[30px] h-[30px] shadow-md cursor-pointer">
            <div class="flex">
              <div class="w-[5px] h-[5px] border-black border-[1px] rounded-full m-[1px]"></div>
              <span class="unit text-sm">${displayUnit()}</span>
            </div>
        </div>
      </div>  

        <!-- Forcast -->
        <div class="grid grid-cols-5 gap-1 md:gap-3">
          ${forcastCards(forcast)}
        </div>

        <!-- Todays Highlights -->

        <h5 class="text-2xl my-1 text-center md:text-left">Today's Highlights</h5>

        <div class=" h-[100%] grid grid-cols-2 md:grid-cols-3 gap-4">
          
          <!-- Humidity -->
          <div class="bg-white flex flex-col justify-center gap-y-5 px-4 py-3 rounded-lg shadow-md">
            <div class="flex justify-between items-center">
              <span class="text-md">Humidity</span>
              <ion-icon class="text-blue-600 text-2xl" name="water"></ion-icon>
            </div>
            <div class="flex">
              <span class="text-4xl">${current.main.humidity}</span>
              <span>%</span>
            </div>
          </div>

          <!-- Visibility -->
          <div class="bg-white flex flex-col justify-center gap-y-5 px-4 py-3 rounded-lg shadow-md">
            <div class="flex justify-between items-center">
              <span class="text-md">Visibility</span>
              <ion-icon class="text-2xl text-teal-400" name="eye"></ion-icon>
            </div>
            <span class="text-4xl">${Math.floor(current.visibility / 1000)}k</span>
          </div>

          <!-- Sun rise/set -->
          <div class="bg-white flex flex-col justify-center gap-y-2 px-4 py-3 rounded-lg shadow-md">
            <div class="flex justify-between items-center">
              <span class="text-md">Sunset & Sunrise</span>
              <ion-icon class="text-amber-400 text-2xl" name="sunny"></ion-icon>
            </div>
            <div>
              <div class="flex items-center gap-x-2">
                <ion-icon class="text-black" name="arrow-up"></ion-icon>
                <span class="text-md">${sunRiseSet(current.sys.sunrise, current.timezone)}</span>
              </div>
              <div class="flex items-center gap-x-2">
                <ion-icon class="text-black" name="arrow-down"></ion-icon>
                <span class="text-md">${sunRiseSet(current.sys.sunset, current.timezone)}</span>
              </div>
            </div>
          </div>

          <!-- CLOUDINESS -->
          <div class="bg-white flex flex-col justify-center gap-y-5 px-4 py-3 rounded-lg shadow-md">
            <div class="flex justify-between items-center">
              <span class="text-md">Cloudiness</span>
              <ion-icon class="text-violet-400 text-2xl" name="cloud"></ion-icon>
            </div>
            <div class="flex">
              <span class="text-4xl">${current.clouds.all}</span>
              <span>%</span>
            </div>
          </div>

          <!-- WIND -->
          <div class="bg-white flex flex-col justify-center gap-y-5 px-4 py-3 rounded-lg shadow-md">
            <div class="flex justify-between items-center">
              <span class="text-md">Wind speed</span>
              <ion-icon class="text-rose-400 text-2xl" name="speedometer"></ion-icon>
            </div>
            <div class="flex">
              <span class="text-4xl">${toMph(current.wind.speed)}mph</span>
            </div>
          </div>

          <!-- DIRECTION -->
          <div class="bg-white flex flex-col justify-center gap-y-5 px-4 py-3 rounded-lg shadow-md">
            <div class="flex justify-between items-center">
              <span class="text-md">Wind direction</span>
              <ion-icon class="text-cyan-500 text-2xl" name="compass"></ion-icon>
            </div>
            <div class="flex">
              <span class="text-4xl">${current.wind.deg}</span>
              <div class="w-[7px] h-[7px] border-black border-[2px] rounded-full mx-[3px]"></div>
            </div>
          </div>

        </div>
      </div>
    `,
  );
  /* eslint-enable */
}

export {
  appendResults, weatherCard, hideContent, displayContent,
};
