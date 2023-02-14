import { displayUnit } from './degree';
import { forcastCards } from './forcast';
import { sunRiseSet, toMph } from './conversion';

function rightBar(current, forcast) {
  return `
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
  `;
}

export { rightBar }; // eslint-disable-line
