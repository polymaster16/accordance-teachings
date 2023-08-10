<template>
    <div v-motion-fade>
        <navbar/>
 <div class="merr">

 
        <div class="text-2xl mt-5 font-bold text-red-600">{{ post.title }}</div>
        
        <img class="mt-5" :src="CreateURL(post.mainImage, 480, 360)" alt="" srcset="">

        <div class="text-xs text-gray-300 font-thin mt-3">📅 {{ new Date(post.publishedAt).getDay()  }} / {{ new Date(post.publishedAt).getMonth()  }} / {{ new Date(post.publishedAt).getFullYear()  }} </div>

        <div class=" pb-5 pt-5 blockstyle">
              <SanityBlocks :blocks="post.body" :serializers="serializers"  /> 
   
             </div>


             
<div class="mb-5 mt-5">
    <a  class="rounded-sm bg-red-700 px-5 py-2.5 text-sm font-medium text-white shadow"
 :href="`whatsapp://send?text=*${post.title}:* ${currentUrl}`" data-action="share/whatsapp/share" target="_blank">
    <v-icon name="bi-whatsapp"></v-icon>
 Partager cette article
</a>
</div>
 
    </div>

    </div>
</template>

<script setup>
import navbar from '../../components/navbar.vue';
import {CreateURL} from '@/utils'
import { useMainstore } from '../../stores/mainstore';
import {computed, h} from 'vue'
import {useRoute} from 'vue-router'
import { SanityBlocks } from 'sanity-blocks-vue-component';

const currentUrl = window.location.href
const serializers = { 
     types: {
       image: (data) => {
         return h("img", { src: CreateURL(data,1200,700) });
       },
   
     },
   };


   function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
scrollToTop()
const mainstore = useMainstore()

const route = useRoute()
const post = computed(()=> {return mainstore.blog.filter(x => x.slug.current === route.params.slug)[0]})
</script>

<style  scoped>
.merr{
  margin-left: 20px;
  margin-right: 20px;
}

@media (min-width: 768px) {
  .merr{
    margin-left: 200px;
  margin-right: 200px;
}

}

</style>