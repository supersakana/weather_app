import { displayUnit } from './degree';
import { forcastCards } from './forcast';
import { highlightCards } from './highlights';

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
    ${highlightCards(current)}
  </div>
</div>
  `;
}

export { rightBar }; // eslint-disable-line
