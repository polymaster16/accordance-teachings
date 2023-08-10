<template>
    <div>
        <div v-motion-fade>
 <div style="background-image: url('https://static.wixstatic.com/media/08e322_77bc8e217a404c93a3b00c23db69ba67~mv2.gif');
" class="herox">
        <div class="bler">
    <navbar></navbar>
    <p class="text-3xl text-center font-bold mt-10">
      {{ route.params.slug }}
    </p>

    <p class="mx-6 mt-4">
        <v-text-field variant="solo" label="🔍 Search">

        </v-text-field>
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

const route = useRoute()

const mainstore = useMainstore()

</script>

<style lang="scss" scoped>

</style>