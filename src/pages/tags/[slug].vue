<template>
    <div  v-motion-fade>
        <section >
 <div :style="`background-image: url(${CreateURL(category.image)});`" class="herox">
        <div class="bler">
    <navbar></navbar>
    <p class="text-3xl text-center font-bold mt-10">
      {{category.title}}
    </p>
    <p class="text-sm mx-5 my-4">
        {{ category.description }}
    </p>
    </div>
    </div>
</section>

<v-btn v-if="false"  @click="viewj">vsuxbsx</v-btn>

<div :style="`background: radial-gradient(${category.color.hex}, #000000);`">
        <section class="px-5 pb-5 py-10 " >

<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-20">
    <div v-if="!mainstore.loadingBlog" v-for="i in articles">
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

    </div>
</template>

<script setup>
import navbar from '../../components/navbar.vue';
import { useMainstore } from '../../stores/mainstore';
import {CreateURL} from '@/utils'
import { client } from '../../client';
import {useRoute} from 'vue-router'
import {ref, computed} from 'vue'
import { useHead } from '@vueuse/head'


function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
scrollToTop()

const route = useRoute()

const mainstore = useMainstore()

const category = computed(()=> {return mainstore.categories.filter(x => x.title === route.params.slug)[0]})

const articles = computed(()=> {return mainstore.blog.filter(x => x.categories.filter(y => y._ref === category.value._id)[0])})


useHead({
      title: computed(()=> {return category.value.title}),
      meta: [
        { property: 'og:title', content:  computed(()=> {return category.value.title}) },
        { property: 'og:description', content:  computed(()=> {return category.value.description})},
        { property: 'og:image', content: computed(()=>{return  CreateURL(category.value.image)  })},
        { property: 'og:url', content: window.location.href },
      ],
    });



async function viewj(){
//console.log(mainstore.blog.filter(x => !x.categories ))
console.log(mainstore.blog.filter(x => x.categories.filter(y => y._ref === category.value._id)[0]))
//console.log(mainstore.blog.map(x => x.categories.includes(category.value._id) ? x : false ))

// const ff =  await client.fetch('*[_type == "post"]{categories}');
//     console.log(ff)
//console.log(mainstore.blog[0].title)

console.log(category.value._id)
//console.log(mainstore.blog.filter(x => x.categories[0]._ref === category.value._id))


}


</script>

<style  scoped>

.bler{
        backdrop-filter: blur(3px);
        padding-bottom: 50px;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.514);
    }
    

</style>