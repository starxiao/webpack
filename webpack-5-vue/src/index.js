import 'babel-polyfill';
import Vue from 'vue';
import router from './router.js';
import App from './app.vue';

const app = new Vue({
    el: '#app',
    router,
    render(h){
        return h(App);
    }
});