/**
 * Created by xiaoxx on 2017/9/20.
 */

import Vue from 'vue';
import router from './router/router';
import App from './app.vue';

const app = new Vue({
    el: '#app',
    router,
    render(h){
        return h(App);
    }
});
