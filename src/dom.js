import { toF, toC } from './temp';

function appendResults(content) {
  const results = document.querySelector('#results');
  results.innerHTML = content;
}

function weatherCard(data) {
  appendResults(
    `
    <!-- LEFT -->
      <div class="bg-white flex flex-col py-2 px-3 rounded-t-xl md:rounded-r-none md:rounded-l-xl justify-evenly">
        <!-- Icon -->
        <ion-icon class="self-center text-amber-400 text-9xl" name="sunny-outline"></ion-icon>
        <!-- Temp -->
        <div class="flex justify-center">
          <span class="text-6xl">${toF(data.main.temp)}</span>
          <div class="w-[10px] h-[10px] border-black border-[2px] rounded-full mx-[3px]"></div>
          <span class="text-4xl">F</span>
        </div>
        <!-- High/Low -->
        <div class="flex gap-x-3 text-xl justify-center">
          <!-- High -->
          <div class="flex text-orange-500">
            <span>${toF(data.main.temp_max)}</span>
            <div class="w-[5px] h-[5px] border-orange-500 border-[1.5px] rounded-full"></div>
            <span>F</span>
          </div>
          <!-- Low -->
          <div class="flex text-sky-500">
            <span>${toF(data.main.temp_min)}</span>
            <div class="w-[5px] h-[5px] border-sky-500 border-[1.5px] rounded-full"></div>
            <span>F</span>
          </div>
        </div>
        <!-- Date time -->
        <div class="flex justify-center items-center gap-x-1 text-xl">
          <span>Monday</span>
          <span class="text-gray-500">16:00</span>
        </div>
        <hr class="border-gray-200">
        <!-- City -->
        <h3 class="self-center text-3xl text-center">${data.name}</h3>
      </div>
      <!-- RIGHT -->
      <div></div>
    `,
  );
}

export { appendResults, weatherCard };
