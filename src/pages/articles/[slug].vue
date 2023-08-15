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
Share this article
</a>
</div>
 
    </div>

    </div>
</template>

<script setup>
import navbar from '../../components/navbar.vue';
import {CreateURL} from '@/utils'
import { useMainstore } from '../../stores/mainstore';
import {computed, h, watch} from 'vue'
import {useRoute} from 'vue-router'
import { SanityBlocks } from 'sanity-blocks-vue-component';
import { useHead } from '@vueuse/head'
import { client } from '../../client';




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

!mainstore.loadingBlog && (post.value.reads = post.value.reads +1)

//  watch(  mainstore.loadingBlog,()=>{

//   mainstore.loadingBlog && console.log('reads', post.value.reads)
//  })

setTimeout(()=>{
incrementReads()
},3500)


async function incrementReads(){
 
  try {
   client.patch(post.value._id).set({reads: post.value.reads}).commit() // Perform the patch and return a promise
  .then((updatedBike) => {
    console.log('Hurray, the post is updated! New document:')
    console.log(updatedBike)
  })
  .catch((err) => {
    console.error('Oh no, the update failed: ', err.message)
  })

  //   const doc={
  //   _type:'comments',
  //   name: 'from_app',
  //   message: 'smalllllll small',
  //   article: route.params.slug
  // };
  // client.create(doc)
    console.log(post.value.reads)

  } catch (error) {
    console.log(error)
  }


}

// watch(post.reads ,()=>{
//   incrementReads()
// })

 //!mainstore.loadingBlog && incrementReads()


 !mainstore.loadingBlog && 
 useHead({
      title: computed(()=> {return post.value.title}),
      meta: [
        { property: 'og:title', content:  computed(()=> {return post.value.title}) },
        { property: 'og:description', content:  computed(()=> {return post.value.description})},
        { property: 'og:image', content: computed(()=>{return  CreateURL(post.value.mainImage)  })},
        { property: 'og:url', content: window.location.href },
      ],
    });






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