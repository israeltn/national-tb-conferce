<template>
       <nav class="flex items-center justify-between pt-4 pb-4 md:px-0 px-2 text-black max-w-screen-xl mx-auto">
          <div class="items-center justify-start">
          <img class="h-auto md:w-96 w-60 " src="../assets/StopTBlogo.png" alt="">
          </div>
          <div class="items-center justify-end">
          <img class="md:w-96 w-60  h-auto " src="../assets/NTLCPLogo.png" alt="">
          </div>
     </nav>
    <div class="flex max-w-screen-xl mx-auto py-2 justify-between items-center bg-red-800">
     <button class="inline-block justify-end items-end cursor-pointer md:hidden px-3" @click="toggleMenu">
            <div class="bg-white w-8 h-6 mb-1" style="height: 3px;"></div>
            <div class="bg-white w-8 h-6 mb-1" style="height: 3px;"></div>
            <div class="bg-white w-8 h-6" style="height: 3px;"></div>
     </button>
    </div>
    
    <div class="md:flex md:h-12 hidden pt-1 px-2 md:max-w-screen-xl mx-auto  relative  md:justify-center md:items-center bg-red-800">
      <nav class="flex absolute items-center justify-end pb-2 text-gray-50 ">
      
      <ul class="md:flex items-center md:space-x-10 text-sm font-bold">
        <li class="hover:text-white hover:shadow-md  hover:bg-red-700 py-2 px-2 pointer  transition-transform duration-300 ease-out rounded-sm "><RouterLink to="/">Home</RouterLink></li>
        <li class="hover:text-white hover:bg-red-700 py-2 px-2 pointer  transition-transform duration-300 ease-out rounded-sm "><RouterLink to="/about">About</RouterLink></li>
        <li class="hover:text-white hover:bg-red-700 py-2 px-2 pointer  transition-transform duration-300 ease-out rounded-sm "><RouterLink to="/speakers">Speakers</RouterLink></li>
        <li class="hover:text-white hover:bg-red-700 py-2 px-2 pointer  transition-transform duration-300 ease-out rounded-sm "><RouterLink to="/delegates">Delegates</RouterLink></li>
        <li class="hover:text-white hover:bg-red-700 py-1 px-2 pointer  transition-transform duration-300 ease-out rounded-sm ">
          <RouterLink to="/registration">Registration</RouterLink>
        </li>
        <li class="hover:text-white hover:bg-red-700 py-2 px-2 pointer  transition-transform duration-300 ease-out rounded-sm ">Abstract Submission</li>
        <li class="hover:text-white hover:bg-red-700 py-2 px-2 pointer  transition-transform duration-300 ease-out rounded-sm ">
          <RouterLink to="/sponsors">Sponsors & Partners</RouterLink>
          </li>
        <li class="hover:text-white hover:bg-red-700 py-2 px-2 pointer  transition-transform duration-300 ease-out rounded-sm ">
          <a  href="http://stoptbnigeria.org/">Past Conferences</a>
        </li>
      </ul>
     
     
        </nav>	
    </div>
    <!-- Mobile View Menu -->
    
    <div v-if="showMenu"  class="flex h-52 pt-1 md:hidde z-50  px-2 md:max-w-screen-xl mx-auto  relative  md:justify-center md:items-center shadow-md bg-red-800 rounded-sm">
      <nav class="flex absolute items-center justify-end pb-2 text-gray-50 ">
      
          <ul class="py-2 text-sm font-bold" >
        <li class="hover:text-white hover:shadow-md  hover:bg-red-700 py-1 px-2 pointer  transition-transform duration-300 ease-out rounded-sm "><RouterLink to="/">Home</RouterLink></li>
        <li class="hover:text-white hover:bg-red-700 py-1 px-2 pointer  transition-transform duration-300 ease-out rounded-sm "><RouterLink to="/about">About</RouterLink></li>
        <li class="hover:text-white hover:bg-red-700 py-2 px-2 pointer  transition-transform duration-300 ease-out rounded-sm "><RouterLink to="/speakers">Speakers</RouterLink></li>
        <li class="hover:text-white hover:bg-red-700 py-2 px-2 pointer  transition-transform duration-300 ease-out rounded-sm "><RouterLink to="/delegates">Delegates</RouterLink></li>
        <li class="hover:text-white hover:bg-red-700 py-1 px-2 pointer  transition-transform duration-300 ease-out rounded-sm ">
          <RouterLink to="/registration">Registration</RouterLink>
        </li>
        <li class="hover:text-white hover:bg-red-700 py-1 px-2 pointer  transition-transform duration-300 ease-out rounded-sm ">Abstract Submission</li>
        <li class="hover:text-white hover:bg-red-700 py-1 px-2 pointer  transition-transform duration-300 ease-out rounded-sm ">Sponsors & Partners</li>
        <li class="hover:text-white hover:bg-red-700 py-1 px-2 pointer  transition-transform duration-300 ease-out rounded-sm ">
          <a  href="http://stoptbnigeria.org/">Past Conferences</a>
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
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>
