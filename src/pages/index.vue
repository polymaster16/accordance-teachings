<template>
  <div v-motion-fade>
 <div style="background-image: url('https://static.wixstatic.com/media/08e322_77bc8e217a404c93a3b00c23db69ba67~mv2.gif');
" class="herox">
        <div class="bler">
    <navbar></navbar>
    <p class="text-3xl text-center font-bold mt-10">
        Accordance teachings
    </p>
    <router-link to="/articles" class="text-red-600 mb-14 text-center grid justify-center font-bold text-sm mt-4 underline">
        View  our articles
    </router-link>
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
            <router-link
            to="/tags"
            class="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-950 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
          >
            Explore
          </router-link>
        </div>
        </div>
          </header>

   
        </div>
      </div>

      <div class="lg:col-span-2 lg:py-8 mt-4">
        <ul class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <li v-if="mainstore.loadingCategories" v-for="i in 6" class="flex flex-col justify-center gap-3">
         
    <div class="bg-gray-300 animate-pulse w-full rounded aspect-square">       
    </div>
    <div class="w-full  bg-gray-300 animate-pulse rounded"></div>
    <div class="w-full mt-[-10px] h-4 bg-gray-300 animate-pulse rounded"></div>
    <div class="w-full h-2 bg-gray-300 animate-pulse rounded"></div>
    <div class="w-full h-2 bg-gray-300 animate-pulse rounded"></div>
    <div class="w-full h-2 bg-gray-300 animate-pulse rounded"></div>

            </li>
          <li v-else v-for="category in mainstore.categories.slice(0,6)">
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

 <section class="on2 pb-10">
    <p class="font-bold text-center text-3xl text-red-500 pb-1 md:pb-4  pt-10">
   Top stories
    </p>
    <carousel  v-if="!mainstore.loadingBlog"  :wrapAround="false" :itemsToShow="1" :transition="500" >
    <slide  v-for="i in mainstore.blog.slice(0,5)" :key="i.title">
      <router-link :to="`/articles/${i.slug.current}`"  class="flex flex-row gap-2 px-2 pt-4">
           
           <img loading="lazy" style=" object-fit: cover;  object-position: center;"
            :src="CreateURL(i.mainImage, 110, 110  )" alt="" srcset="">
          
            <div class="flex flex-col gap-2">
            <p class="text-md">{{ i.title }}</p>
       <p class="text-xs text-red-500">{{ i.reads }} reads</p>
   </div>
   </router-link>
    </slide>

    <template #addons>
      <Navigation />
    </template>
  </carousel>

  
        <div v-else class=" h-[250px] bg-gray-300 animate-pulse mx-5 mt-5 "> {{ i }}</div>


 </section>


 <section class="p-5 on3" >
    <p class="font-bold text-center text-3xl text-red-500 mb-8 mt-5">
    Recent articles   </p>

<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-20">
    <div v-if="!mainstore.loadingBlog" v-for="i in mainstore.blog.slice(0,10)">
        <router-link :to="`/articles/${i.slug.current}`"  class="flex flex-row gap-2">
           
        <img loading="lazy" style=" object-fit: cover;  object-position: center;"
         :src="CreateURL(i.mainImage, 110, 110  )" alt="" srcset="">
       
         <div class="flex flex-col gap-2">
         <p class="text-md">{{ i.title }}</p>
    <p class="text-xs text-red-500">{{ i.reads }} reads</p>
</div>
</router-link>
    </div>

    <div v-else v-for="i in 10" class="flex flex-row justify-start gap-2">
        <div class="w-[120px] h-[110px] bg-gray-300 animate-pulse rounded"></div>
     
        <div class="flex flex-col justify-start gap-2">
                <div  class="w-[250px] h-3 bg-gray-300 animate-pulse rounded"></div>
                <div  class="w-[250px] h-3 bg-gray-300 animate-pulse rounded"></div>
                <div  class="w-[250px] h-3 bg-gray-300 animate-pulse rounded"></div>
                <div  class="w-[200px] h-3 bg-gray-300 animate-pulse rounded"></div>
            </div>
            </div>
</div>
 </section>
</div>
</template>

<script setup>
import navbar from '../components/navbar.vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { useMainstore } from '../stores/mainstore';
import {CreateURL} from '@/utils'
import { useHead } from '@vueuse/head'

const mainstore = useMainstore()

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
scrollToTop()


  
useHead({
      title: 'Home',
      meta: [
        { property: 'og:title', content: 'Home' },
        { property: 'og:description', content: 'Home page of our blog. Get the latest updates..'},
        { property: 'og:url', content: window.location.href },
      ],
    });
  

</script>

<style scoped>
.on{
    background: radial-gradient(#363636, #6dd5ed00);
}
.on2{
    background: radial-gradient(#481919, #6dd5ed00);
}
.on3{
    background: radial-gradient(#363636, #6dd5ed00);
}
</style>