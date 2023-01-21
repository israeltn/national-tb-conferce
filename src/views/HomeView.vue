
<template>				  
    
    <div class="md:flex justify-between z-30 items-center md:pt-4 px-2 max-w-screen-xl max-h-72 mx-auto mb-0 ">
      <div class="w-full justify-center items-center">
        <div class="flex justify-start items-center w-full md:py-8 pt-2">
          <span class="flex items-center justify-start bg-green-900 md:h-14 h-9 text-xl shadow-lg">
          <h1 class="font-bold px-2 tracking-tighter leading-tight md:text-4xl text-xl text-white">National TB Conference 2023 </h1>
          <img src="" alt="">
        </span>
        </div>
        <div class="w-full md:py-2">
          <span class="flex justify-start text-xl">
          <h1 class="font-bold tracking-tighter leading-tight text-xl text-green-700">THEME: </h1>
          <img src="" alt="">
        </span>
        </div>
        <div class="py-0"> 
          <span class="md:text-2xl">
          SUSTAINING A RESILIENT
        </span>
        </div>
        <div class="py-0">
          <span class="font-bold md:text-2xl">
          TB RESPONSE IN NIGERIA:
        </span>
        </div>
        
        <span class="font-semibold md:text-2xl text-red-600">
          ADDRESSING THE IMPACT OF COVID-19 AND OTHER DESEASES
        </span>
        <div class="flex pt-2 space-x-2 justify-start items-center">
          <span class="font-bold text-2xl text-black">
          Venue: 
        </span>
        </div>
        <div class="flex justify-start items-start font-semibold text-md">
          <span>
            <p class="text-start">Zankli Medical Centre, No 1 Ibrahim Tahir Street, Lane 900108, Abuja, Federal Capital Territory</p>
          </span>         
        </div>
      </div>

      <div class="md:flex md:px-2 pt-4 justify-center items-center lg:relative">
        <img class="md:h-[22rem] w-[38rem] md:pt-10" src="../assets/NTC.png" alt="">
        <!-- Counter -->
        <div class="flex px-0 lg:absolute md:mt-72 md:ml-64 pt-2 justify-center items-center ">
       
          <div class="justify-center items-center text-center">
              <div class="mx-1 w-10  p-1 bg-gray-900 text-white rounded-lg">
                <div class="font-mono leading-none" x-text="days">{{ displayDays }}</div>
                <div class="font-mono uppercase font-bold text-xs leading-none">Days</div>
            </div>
          </div>
          <div class="justify-center items-center text-center">
            <div class="w-10  mx-1 p-1  bg-gray-900 text-white rounded-lg">
              <div class="font-mono leading-none" x-text="hours">{{ displayHours }}</div>
              <div class="font-mono uppercase font-bold text-xs leading-none">H</div>
            </div>
          </div>
          <div class="justify-center items-center text-center">
            <div class="w-8  mx-1 p-1 bg-gray-900 text-white rounded-lg">
              <div class="font-mono leading-none" x-text="minutes">{{ displayMinutes }}</div>
              <div class="font-mono uppercase font-bold text-xs leading-none">M</div>
            </div>
          </div>
          <div class="justify-center items-center text-center">
            <div class="w-8  mx-1 p-1 bg-gray-900 text-white rounded-lg">
              <div class="font-mono leading-none" x-text="minutes">{{ displaySeconds }}</div>
              <div class="font-mono uppercase font-bold text-xs leading-none">S</div>
            </div>
          </div>
        </div>
      </div>
    </div>   


<div class="justify-between max-w-screen-xl mx-auto items-center md:px-12 lg:px-48 md:pt-14 pt-[22rem]">
        <div class="md:mt-10 text-center md:justify-between md:max-w-screen-xl mx-auto md:items-center lg:w-7/12">
            <h2 class="text-2xl text-red-700 font-bold md:text-4xl">Our Sponsors & Partners</h2>
        </div>
        <swiper class=" flex justify-between max-w-screen-xl mx-auto items-center cursor-pointer"
                    :slides-per-view="3"
                        :space-between="30"
                        :modules="modules"
                        :pagination="{ clickable: true }"                       
                        :scrollbar="{ draggable: true }"
                        :loop="true"            
                        :autoplay="{ delay: 1000}"
                        :speed="4000"
                    >
                <swiper-slide class="">
                    <img class="py-8 w-60"  src="../assets/USAID.png" alt="">						
                </swiper-slide>
                <swiper-slide class="">
                    <img class="py-8 w-60"  src="../assets/who.png" alt="">						
                </swiper-slide>
                <swiper-slide class="">
                    <img class="py-8 w-60"  src="../assets/StopTB+UNOPS.png">						
                </swiper-slide>
                
                <swiper-slide class="">
                     <img class="py-8  px-2 w-60"  src="../assets/kncv.png" alt="">						
                </swiper-slide>
                <!-- Four -->
                <swiper-slide class="">
                    <img class="py-8 w-60"  src="../assets/fhi360.png" alt="">						
                </swiper-slide>
                <swiper-slide class="">
                    <img class="py-8 w-60"  src="../assets/DevComs.png" alt="">						
                </swiper-slide>
                <swiper-slide class="">
                    <img class="py-8 w-60"  src="../assets/DFB.png">						
                </swiper-slide>
                <swiper-slide class="">
                     <img class="py-8  px-2 w-60"  src="../assets/TBPeopleNigeria.jpg" alt="">						
                </swiper-slide>
                <!-- Four -->
                <swiper-slide class="">
                    <img class="py-8 w-60"  src="../assets/StopTB+UNOPS.png" alt="">						
                </swiper-slide>
                <swiper-slide class="">
                    <img class="py-8 w-60"  src="../assets/NigeriaTBCaucus.png" alt="">						
                </swiper-slide>
                <swiper-slide class="">
                    <img class="py-8 w-60"  src="../assets/NTCF.png">						
                </swiper-slide>
                <swiper-slide class="">
                     <img class="py-8  px-2 w-60"  src="../assets/CfDCLogo.jpg" alt="">						
                </swiper-slide>
                  <!-- Four -->
                  
                <swiper-slide class="">
                    <img class="py-8 w-60"  src="../assets/Zankli.jpg" alt="">						
                </swiper-slide>
                <swiper-slide class="">
                    <img class="py-8 w-60"  src="../assets/ARFH.png" alt="">						
                </swiper-slide>
                <swiper-slide class="">
                    <img class="py-8 w-60"  src="../assets/BA.png">						
                </swiper-slide>
                <swiper-slide class="">
                     <img class="py-8  px-2 w-60"  src="../assets/APIN.png" alt="">						
                </swiper-slide>
                  <!-- Four -->
                
        </swiper>
</div>
 
   
  
</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import {Autoplay, Pagination} from 'swiper'
import 'swiper/swiper.min.css'

export default {
	components: {
    Autoplay,
    Pagination,
    Swiper,
    SwiperSlide
  
	},
  name: 'HelloWorld',
  data() {
    return {
          displayDays: 0,
          dislayHours: 0,
          displayMinutes: 0,
          displaySeconds: 0,
          modules: [Pagination]
                
    }
          
     },
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


