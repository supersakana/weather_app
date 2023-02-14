import { toF, toC, toTime } from './conversion';
import { displayTemp, displayUnit } from './degree';

function leftBar(current) {
  return `
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
    `;
}

export { leftBar }; // eslint-disable-line