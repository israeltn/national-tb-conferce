
<template>				  
    
    <div class="md:flex justify-between items-center md:py-8 px-4 max-w-screen-xl mx-auto">
      <div class="w-full justify-center items-center">
        <div class="flex justify-start items-center w-full py-8">
          <span class="flex items-center justify-start bg-green-900 h-14 text-xl shadow-lg">
          <h1 class="font-bold px-2 tracking-tighter leading-tight md:text-4xl text-xl text-white">National TB Conference 2023 </h1>
          <img src="" alt="">
        </span>
        </div>
        <div class="w-full py-2">
          <span class="flex justify-start text-xl">
          <h1 class="font-bold tracking-tighter leading-tight text-xl text-green-700">THEME: </h1>
          <img src="" alt="">
        </span>
        </div>
        <div class="py-0"> 
          <span class="text-2xl">
          SUSTAINING A RESILIENT
        </span>
        </div>
        <div class="py-0">
          <span class="font-bold text-2xl">
          TB RESPONSE IN NIGERIA:
        </span>
        </div>
        
        <span class="font-semibold text-2xl text-red-600">
          ADDRESSING THE IMPACT OF COVID-19 AND OTHER DESEASES
        </span>
        <!-- <div class="flex pt-8 space-x-6">
          <button class="flex justify-items-center items-center h-10 px-6 font-medium rounded-xl hover:shadow-xl hover:bg-bg-yellow-600 transition-shadow bg-yellow-400">Get Started</button>
          <button class="flex justify-center items-center h-10 px-6 border font-medium rounded-xl border-gray-900 hover:shadow-xl">Explore More</button>
        </div> -->
      </div>

      <div class="md:flex px-8 pt-4 justify-center items-center">
        <img src="../assets/NTC.png" alt="">
      </div>
    </div>
    <!-- Counter -->
<div class="min-w-screen min-h-[20%] bg-gradient-to-tr from-red-800 via-red-800 to-red-800 shadow-md flex items-center justify-center px-4 py-2" x-data="beer()" x-init="start()">
  <div class="text-white">
      <h1 class="md:text-xl text-base font-sans font-bold text-center mb-2 ">COUNT DOWN:</h1>
      <div class="text-4xl text-center flex w-full items-center justify-center">
          
          <div class="px-4">
            <div class="mx-1 md:w-24 w-16 p-1 bg-white text-red-700 rounded-lg">
              <div class="font-mono leading-none" x-text="days">{{ displayDays }}</div>
              <div class="font-mono uppercase text-sm leading-none">Days</div>
          </div>
          </div>
          <div class="px-4">
            <div class="md:w-20 w-14 mx-1 p-1 bg-white text-red-700 rounded-lg">
              <div class="font-mono leading-none" x-text="hours">{{ displayHours }}</div>
              <div class="font-mono uppercase text-sm leading-none">Hours</div>
          </div>
          </div>
          <div class="px-4">
            <div class="md:w-20 w-14 mx-1 p-1 bg-white text-red-700 rounded-lg">
              <div class="font-mono leading-none" x-text="minutes">{{ displayMinutes }}</div>
              <div class="font-mono uppercase text-sm leading-none">Minutes</div>
          </div>
          </div>
          
          <div class="px-4">
          <div class="md:w-20 w-14 mx-1 pb-2 bg-white text-red-700 rounded-lg">
              <div class="font-mono leading-none" x-text="seconds">{{ displaySeconds }}</div>
              <div class="font-mono uppercase text-sm leading-none">Seconds</div>
          </div>
          </div>
      </div>
      
  </div>
</div>
    <!-- <div class="flex justify-between items-center px-24 py-4 max-w-screen-xl mx-auto ">
                  
        <div class="">
          <img class="py-2 w-60"  src="../assets/USAID.png" alt="">						
        </div>
        <div class="">
          <img class="py-2 w-60"  src="../assets/who.png" alt="">						
        </div>
        <div class="">
          <img class="py-2 w-60"  src="../assets/kncv.png">						
        </div>
        <div class="">
          <img class="py-2  px-2 w-60"  src="../assets/unops.png" alt="">						
        </div>
        
    </div> -->
   
  
</template>

<script>

export default {
	comments: {
		
	},
  name: 'HelloWorld',
  data: () =>({
          displayDays: 0,
          dislayHours: 0,
          displayMinutes: 0,
          displaySeconds: 0
     }),
     computed: {
          _seconds: () =>1000,
          _minutes() {
               return this._seconds * 60;
          },
          _hours() {
               return this._minutes *60;
          },
          _days() {
               return this._hours * 24;
          },          
     },
     mounted(){
          this.showRemaining();
     },
     methods: {
          showRemaining(){
               const timer = setInterval(() =>{
                    const now = new Date();
                    const end = new Date(2023, 4,22, 10, 10, 10, 10);
                    const distance = end.getTime() - now.getTime();

                    if(distance < 0){
                         clearInterval(timer);
                         return
                    }

                    const days = Math.floor(distance / this._days);
                    const hours = Math.floor((distance % this._days) / this._hours);
                    const minutes = Math.floor((distance % this._hours) / this._minutes);
                    const seconds = Math.floor((distance % this._minutes) / this._seconds);
                    this.displayMinutes = minutes < 10 ? "0" + minutes : minutes;
                    this.displaySeconds = seconds < 10 ? "0" + seconds : seconds;
                    this.displayHours = hours < 10 ? "0" + hours : hours;
                    this.displayDays = days < 10 ? "0" + days : days;

               }, 1000);
     }

}

}
</script>


