import Vue from 'vue'
import App from './App.vue'
import counterButton from './components/counterButton.vue'
import Routes from "./routes.js"

import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.config.productionTip = false

Vue.config.productionTip = false
Vue.component('cBtn', counterButton);

const myRouter =  new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router: myRouter
}).$mount('#app')
