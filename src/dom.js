import {
  toF, toC, toTime, sunRiseSet, toMph,
} from './conversion';

function appendResults(content) {
  const results = document.querySelector('#results');
  results.innerHTML = content;
}

function weatherCard(current, forcast) {
  console.log(forcast);
  appendResults(
    `
      <!-- LEFT -->
      <div class="bg-white flex flex-col py-2 px-3 rounded-t-xl md:rounded-r-none md:rounded-l-xl justify-evenly">

        <!-- City -->
        <div class="flex flex-col gap-y-2">
          <h3 class="self-center text-3xl text-center">${current.name}</h3>

          <!-- Date time -->
          <div class="flex justify-center items-center gap-x-1 text-lg">
            <span>${toTime(current.timezone, 'dddd')}</span>
            <span class="text-gray-400">${toTime(current.timezone, 'h:mm A')}</span>
          </div>
          <hr class="border-gray-200 mt-[10px]">
        </div>

        <!-- Temp -->
        <div class="flex justify-center">
          <span class="text-6xl md:text-7xl">${toF(current.main.temp)}</span>
          <div class="w-[10px] h-[10px] border-black border-[2px] rounded-full mx-[3px]"></div>
          <span class="text-4xl">F</span>
        </div>

        <!-- High/Low -->
        <div class="flex gap-x-3 text-xl justify-center">

          <!-- High -->
          <div class="flex text-orange-500">
            <span>${toF(current.main.temp_max)}</span>
            <div class="w-[5px] h-[5px] border-orange-500 border-[1.5px] rounded-full"></div>
            <span>F</span>
          </div>

          <!-- Low -->
          <div class="flex text-sky-500">
            <span>${toF(current.main.temp_min)}</span>
            <div class="w-[5px] h-[5px] border-sky-500 border-[1.5px] rounded-full"></div>
            <span>F</span>
          </div>
        </div>

        <!-- Icon -->
        <div class="self-center flex justify-center items-center">
          <img class="w-[50px] h-[50px]"src="http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png">
          <h3 class="text-lg">${current.weather[0].main}</h3>
        </div>
      </div>

      <!-- RIGHT -->
      <div class="m-3">

        <!-- TOP -->
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
}

export { appendResults, weatherCard };
