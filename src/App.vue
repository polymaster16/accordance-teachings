<script setup>
import { RouterView } from 'vue-router'
import navbar from './components/navbar.vue';
import { useMainstore } from './stores/mainstore';
import {onMounted} from 'vue'

const mainstore = useMainstore()

onMounted(()=>{
  mainstore.getCategories()
  mainstore.getBlog()

})

</script>

<template>
  <div data-theme="dark" class="ff bg-black">
 
  <RouterView />
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Poppins:wght@500&display=swap');
.ff{
font-family: Poppins;
}

</style>
