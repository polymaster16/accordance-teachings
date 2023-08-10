<template>
    <div>
        <div v-motion-fade>
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
</div>

    </div>
</template>

<script setup>
import navbar from '../../components/navbar.vue';
import { useMainstore } from '../../stores/mainstore';
import {CreateURL} from '@/utils'
import {useRoute} from 'vue-router'
import {ref, computed} from 'vue'

const route = useRoute()

const mainstore = useMainstore()

const category = computed(()=> {return mainstore.categories.filter(x => x.title === route.params.slug)[0]})

</script>

<style lang="scss" scoped>

</style>