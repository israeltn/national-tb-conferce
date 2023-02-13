import React from 'react'

export const Countdown = ({timerDays,timerHours,timerMinutes,timerSeconds}) => {
     
  return (
     
     <div class="lg:flex lg:px-2 pt-4 lg:pt-0 justify-center items-center lg:relative">
        <img class="lg:h-[24rem] w-[38rem] lg:pt-8" src={require('../../assets/NTC.png')} alt="" />
        {/* <!-- Counter --> */}
        <div class="lg:absolute">
          <h1 class="lg:mt-60 lg:ml-52 ml-24 pt-2 font-semibold text-md">Countdown</h1>
        </div>
        <div class="flex px-0 lg:absolute  lg:mt-80 mr-14 lg:ml-[17rem] pt-3  justify-center items-center ">
            
          <div class="justify-center items-center text-center">
              <div class="mx-1 w-10  p-1 font-semibold border-2 border-spacing-2 border-gray-800 bg-gray-900 text-white rounded-lg">
                <div class="font-mono leading-none" x-text="days">{timerDays}</div>
                <div class="font-mono uppercase font-semibold text-xs leading-none">Days</div>
            </div>
          </div>
          <div class="justify-center items-center text-center">
            <div class="w-10  mx-1 p-1 font-semibold border-2  border-spacing-2 border-gray-800 bg-gray-900 text-white rounded-lg">
              <div class="font-mono leading-none" x-text="hours">{timerHours}</div>
              <div class="font-mono uppercase font-semibold text-xs leading-none">H</div>
            </div>
          </div>
          <div class="justify-center items-center text-center">
            <div class="w-8  mx-1 p-1 font-semibold border-2 border-spacing-2 border-gray-800 bg-gray-900 text-white rounded-lg">
              <div class="font-mono leading-none" x-text="minutes">{timerMinutes}</div>
              <div class="font-mono uppercase font-semibold text-xs leading-none">M</div>
            </div>
          </div>
          <div class="justify-center items-center text-center">
            <div class="w-8  mx-1 p-1 font-semibold border-2 border-spacing-2 border-gray-800 bg-gray-900 text-white rounded-lg">
              <div class="font-mono leading-none" x-text="minutes">{timerSeconds}</div>
              <div class="font-mono uppercase font-semibold text-xs leading-none">S</div>
            </div>
          </div>
        </div>
      </div>
  )
 
}
Countdown.defaultProps={timerDays:10,timerHours:10, timerMinutes:10,timerSeconds:10}
