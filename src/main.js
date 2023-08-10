import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//IconsRiHandHeartFill
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { OiFeedHeart, PrMoneyBill, FaWheelchair,GiSlotMachine, GiTeacher, AiAfricarxivSquare , MdGroups ,
   MdMedicalservicesRound, RiHandHeartFill, FaHandHoldingMedical, MdHomerepairservice,
    SiHellofresh, BiWhatsapp, BiFacebook, BiYoutube, BiTwitter, FaUserAstronaut  } from "oh-vue-icons/icons";


addIcons(OiFeedHeart, PrMoneyBill, FaWheelchair, GiSlotMachine, GiTeacher, AiAfricarxivSquare , MdGroups ,
   MdMedicalservicesRound, RiHandHeartFill, FaHandHoldingMedical, BiFacebook, BiYoutube, BiTwitter , FaUserAstronaut,
    MdHomerepairservice, SiHellofresh, BiWhatsapp  );

const vuetify = createVuetify({
  components,
  directives,
})

import { MotionPlugin } from '@vueuse/motion'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(MotionPlugin)
app.component("v-icon", OhVueIcon);

app.mount('#app')
