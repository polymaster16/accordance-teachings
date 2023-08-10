<template>
    <div v-motion-fade>
        <div >
 <div style="background-image: url('https://blogs.articulate.com/rapid-elearning/wp-content/uploads/sites/7/2018/09/how-to-animated-gif.gif');
" class="herox">
        <div class="bler">
    <navbar></navbar>
    <p class="text-3xl text-center font-bold mt-10">
      All tags
    </p>

    <p class="mx-6 mt-4">
        <v-text-field v-model="searchTerm" variant="solo" label="🔍 Search">

        </v-text-field>
    </p>

    </div>
    </div>
</div>




<section class="on" >
    <div  class="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
      <div class="grid p-6 bg-red-800 rounded place-content-center sm:p-8">
        <div class="max-w-md mx-auto text-center lg:text-left">
          <header class="flex flex-row gap-4">
            <div class="grid justify-center py-4">
            <img loading="lazy" class="mb-4" style="border-radius: 100%; width: 200px; height: 100%; object-fit: cover;" 
            src="https://markateur.com/wp-content/uploads/2017/04/articles.jpg">
        </div>
        <div>
            <h2 class="text-xl text-left font-bold text-gray-50 sm:text-3xl">Hello world!</h2>

            <p class="mt-4 text-gray-300 text-left text-white">
 Explore our large collection of articles
            </p>
            <div class="flex flex-row justify-start">
            <a
            href="#"
            class="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-950 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
          >
            Explore
          </a>
        </div>
        </div>
          </header>

   
        </div>
      </div>

      <div class="lg:col-span-2 lg:py-8 mt-4">
        <ul class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <li v-if="mainstore.loadingCategories" v-for="i in 12" class="flex flex-col justify-center gap-3">
         
         <div class="bg-gray-300 animate-pulse w-full rounded aspect-square">       
         </div>
         <div class="w-full h-4 bg-gray-300 animate-pulse rounded"></div>
         <div class="w-full h-2 bg-gray-300 animate-pulse rounded"></div>
         <div class="w-full h-2 bg-gray-300 animate-pulse rounded"></div>
         <div class="w-full h-2 bg-gray-300 animate-pulse rounded"></div>
     
                 </li>
          <li v-else v-for="category in (searchTerm? categories: mainstore.categories)">
            <router-link :to="`/tags/${category.title}`" class="block group">
              <img
                :src="CreateURL(category.image)"
                alt=""
                class="object-cover w-full rounded aspect-square"
                loading="lazy"
              />

              <div class="mt-3">
                <h3
                  class="font-medium text-gray-50 group-hover:underline group-hover:underline-offset-4"
                >
                  {{ category.title }}
                </h3>

                <p class="mt-1 text-xs text-gray-50">{{ category.description.slice(0,180) }}</p>
              </div>
            </router-link>
          </li>

        
        </ul>
      </div>
    </div>
</div>
 </section>









    </div>
</template>

<script setup>
import navbar from '../../components/navbar.vue';
import { useMainstore } from '../../stores/mainstore';
import {CreateURL} from '@/utils'
import {computed, ref, watch} from 'vue'

const mainstore = useMainstore()
const searchTerm = ref('')
const categories = ref([])

watch( searchTerm,()=>{
    categories.value = mainstore.categories.filter( x => x.title.toLowerCase().includes(searchTerm.value.toLowerCase()))
})

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
scrollToTop()

</script>

<style scoped>
.on{
    background: radial-gradient(#363636, #6dd5ed00);
}
</style>