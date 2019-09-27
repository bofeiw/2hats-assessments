import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = true


import {Wavelet,Contract} from "wavelet-client";

new Vue({
  render: h => h(App),
}).$mount('#app')