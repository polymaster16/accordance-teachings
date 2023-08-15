<template>
    <div v-motion-fade class="on3">
        <navbar/>
        <section class="px-5 pb-5 " >
            
    <p class="font-bold text-center text-3xl text-red-500 mb-4 mt-5">
    All articles   </p>

    <p class="mb-6">
        <v-text-field v-model="searchTerm" variant="solo" label="🔍 Search">

        </v-text-field>
    </p>

<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-20">
    <div v-if="!mainstore.loadingBlog" v-for="i in (searchTerm? filteredPosts : mainstore.blog)">
        <router-link :to="`/articles/${i.slug.current}`"  class="flex flex-row gap-2">
           
        <img loading="lazy" style=" object-fit: cover;  object-position: center;"
         :src="CreateURL(i.mainImage, 110, 110  )" alt="" srcset="">
       
         <div class="flex flex-col gap-2">
         <p class="text-md">{{ i.title }}</p>
    <p class="text-xs text-red-500">{{ i.reads }} reads</p>
</div>
</router-link>

    </div>

    <div v-else v-for="i in 300" class="flex flex-row justify-start gap-2">
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
import {CreateURL} from '@/utils'
import { useMainstore } from '../../stores/mainstore';
import navbar from '../../components/navbar.vue';
import { useHead } from '@vueuse/head'
import {ref, watch} from 'vue'


const mainstore = useMainstore()
const filteredPosts = ref([])
const searchTerm = ref('')

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
scrollToTop()

watch( searchTerm,()=>{
    filteredPosts.value = mainstore.blog.filter( x => x.title.toLowerCase().includes(searchTerm.value.toLowerCase()))
})


  
useHead({
      title: 'Search',
      meta: [
        { property: 'og:title', content: 'Search' },
        { property: 'og:description', content: 'Search a topic from our wide range of articles'},
        { property: 'og:url', content: window.location.href },
      ],
    });

</script>

<style scoped>
.on3{
    background: radial-gradient(#363636, #6dd5ed00);
}
</style>