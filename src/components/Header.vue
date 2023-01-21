<template>
       <nav class="flex items-center justify-between pt-4 pb-4 md:px-0 px-2 text-black max-w-screen-xl mx-auto">
          <div class="items-center justify-start">
          <img class="h-auto md:w-96 w-60 " src="../assets/StopTBlogo.png" alt="">
          </div>
          <div class="items-center justify-center">
          <img class="h-auto md:w-96 w-60 " src="../assets/NationalTBLogo.jpg" alt="">
          </div>
          <div class="items-center justify-end">
          <img class="md:w-96 w-60  h-auto " src="../assets/NTLCPLogo.png" alt="">
          </div>
     </nav>
    <div class="flex max-w-screen-xl mx-auto py-2 justify-between items-center bg-red-800">
     <button class="inline-block justify-end items-end cursor-pointer md:hidden px-3" @click="showMenu = !showMenu">
            <div class="bg-white w-8 h-6 mb-1" style="height: 3px;"></div>
            <div class="bg-white w-8 h-6 mb-1" style="height: 3px;"></div>
            <div class="bg-white w-8 h-6" style="height: 3px;"></div>
     </button>
    </div>
    
    <div class="md:flex md:h-12 hidden pt-1 px-2 md:max-w-screen-xl mx-auto  relative  md:justify-center md:items-center bg-red-800">
      <nav class="flex absolute items-center justify-end pb-2 text-gray-50 ">
      
      <ul class="md:flex items-center md:space-x-6 text-sm font-bold">
        <li class="hover:text-white hover:shadow-md  hover:bg-red-700 py-2 px-2 cursor-pointer  transition-transform duration-300 ease-out rounded-sm ">
          <router-link :to="{ name: 'home' }" :class="{ 'active': $route.name === 'home' }">Home</router-link>
        </li>
        <li class="hover:text-white hover:bg-red-700 py-2 px-2 cursor-pointer  transition-transform duration-300 ease-out rounded-sm ">
          <router-link :to="{ name: 'about' }" :class="{ 'active': $route.name === 'about' }">About</router-link>
        </li>
        <li class="hover:text-white hover:bg-red-700 py-2 px-2 cursor-pointer  transition-transform duration-300 ease-out rounded-sm ">
           <router-link :to="{ name: 'speakers' }" :class="{ 'active': $route.name === 'speakers' }">Speakers</router-link>
        </li>
        <li class="hover:text-white hover:bg-red-700 py-2 px-2 cursor-pointer  transition-transform duration-300 ease-out rounded-sm ">
           <router-link :to="{ name: 'delegates' }" :class="{ 'active': $route.name === 'delegates' }">Planning  Committees</router-link>
        </li>
        <li class="hover:text-white hover:bg-red-700 p-2 cursor-pointer  transition-transform duration-300 ease-out rounded-sm ">
           <router-link :to="{ name: 'registration' }" :class="{ 'active': $route.name === 'registration' }">Registration</router-link>
        </li>
        <li class="hover:text-white hover:bg-red-700 py-2 px-2 cursor-pointer  transition-transform duration-300 ease-out rounded-sm ">Abstract Submission</li>
        <li class="hover:text-white hover:bg-red-700 py-2 px-2 cursor-pointer  transition-transform duration-300 ease-out rounded-sm ">
         
          <router-link :to="{ name: 'sponsors' }" :class="{ 'active': $route.name === 'sponsors' }">Sponsorship & Advert</router-link>
        </li>
        <li @click="showNav = !showNav" class="relative flex cursor-pointer hover:bg-red-700 py-2 px-2">
            <button  class="rounded-lg px-4 text-white ">
              Past Conferences 
            </button>
            <div v-if="showNav" class="absolute right-0 z-10 bg-red-800 rounded-lg py-2 mt-6">
              <a href="#" class="block px-4 py-2  hover:bg-red-700">2019</a>
              <a href="#" class="block px-4 py-2  hover:bg-red-700">2021</a>
             
            </div>
        </li>
        <li class="hover:text-white hover:bg-red-700 py-2 px-2 cursor-pointer transition-transform duration-400 ease-out rounded-sm">
           <router-link :to="{ name: 'conferences' }" :class="{ 'active': $route.name === 'conferences' }">Contact</router-link>
        </li>
          
      </ul>
     
     
        </nav>	
    </div>
    <!-- Mobile View Menu -->
    
    <div v-if="showMenu"  class="flex h-[20rem] pt-1 md:hidde z-40  px-2 md:max-w-screen-xl mx-auto  relative  md:justify-center md:items-center shadow-md bg-red-800 rounded-sm">
      <nav class="flex absolute items-center justify-end pb-2 text-gray-50 ">
      
          <ul class="py-2 text-sm font-bold" >
        <li class="hover:text-white hover:shadow-md  hover:bg-red-700 py-1 px-2 pointer  transition-transform duration-300 ease-out rounded-sm "><RouterLink to="/">Home</RouterLink></li>
        <li class="hover:text-white hover:bg-red-700 py-1 px-2 pointer  transition-transform duration-300 ease-out rounded-sm "><RouterLink to="/about">About</RouterLink></li>
        <li class="hover:text-white hover:bg-red-700 py-2 px-2 pointer  transition-transform duration-300 ease-out rounded-sm "><RouterLink to="/speakers">Speakers</RouterLink></li>
        <li class="hover:text-white hover:bg-red-700 py-2 px-2 pointer  transition-transform duration-300 ease-out rounded-sm "><RouterLink to="/delegates">Planning  Committees</RouterLink></li>
        <li class="hover:text-white hover:bg-red-700 py-1 px-2 pointer  transition-transform duration-300 ease-out rounded-sm ">
          <RouterLink to="/registration">Registration</RouterLink>
        </li>
        <li class="hover:text-white hover:bg-red-700 py-1 px-2 pointer  transition-transform duration-300 ease-out rounded-sm ">Abstract Submission</li>
        <li class="hover:text-white hover:bg-red-700 py-2 px-2 pointer  transition-transform duration-300 ease-out rounded-sm ">
          <RouterLink to="/sponsors">Sponsorship & Advert</RouterLink>
        </li>
        <li @click="showNav = !showNav" class="relative flex cursor-pointer hover:bg-red-700 py-2 px-2">
            <button  class="rounded-lg  text-white ">
              Past Conferences 
            </button>
            <div v-if="showNav" class="absolute right-0 z-10 bg-red-800 rounded-lg py-2 mt-6">
              <a href="#" class="block px-4 py-2  hover:bg-red-700">2019</a>
              <a href="#" class="block px-4 py-2  hover:bg-red-700">2021</a>
             
            </div>
          </li>
          <li class="hover:text-white hover:bg-red-700 py-2 px-2 pointer  transition-transform duration-300 ease-out rounded-sm ">
            <RouterLink to="/conferences">Contact</RouterLink>
          </li>
      </ul>
      <button v-show="isVisible" class="sm:hidden"  @click="toggle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
     </button>
     
        </nav>	
    </div>


</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
      showNav:false
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    
  },
};
</script>

<style>
.active {
  @apply font-bold text-gray-200 bg-red-700 p-2;
}
</style>