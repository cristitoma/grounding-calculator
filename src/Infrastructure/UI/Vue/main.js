import Vue from 'vue'
import App from './App.vue';
import router from './router'
import VueRouter from "vue-router";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueRouter)

new Vue({
    render: (h) => h(App),
    router
}).$mount('#app');
