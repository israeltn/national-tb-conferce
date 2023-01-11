<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
export default {
  components: {
    Header,    
   
  }
}
</script>

<template>  
  <div class="w-full min-h-screen font-sans">		
    <Header />
    <RouterView />
  </div>
</template>


