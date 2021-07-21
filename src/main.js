import Vue from 'vue'
import App from './App.vue'
import vmodal from 'vue-js-modal'

Vue.config.productionTip = false
Vue.use(vmodal,{ dynamicDefault: { draggable: true, resizable: true } })
new Vue({
  render: h => h(App),
}).$mount('#app')
