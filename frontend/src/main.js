import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = true


import {Wavelet,Contract} from "wavelet-client";

const client = new Wavelet('https://testnet.perlin.net');
const wallet = Wavelet.loadWalletFromPrivateKey('a6c82664cfebc00595ed4c4c2425dc5059296c686f26fc02ec0e42d312015c79b2e8e3167a6665386dd226cc7f3b693d9d44f760ff146424789aff3e707927c1');
const contract = new Contract(client, "9c3de382663f49ff440da79dda981a969af0943e6ecc31f9634ae643dd3256f1");

Vue.use({
  install (Vue) {
    Vue.prototype.$contract = contract
    Vue.prototype.$wallet = wallet
    Vue.prototype.$client = client
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')