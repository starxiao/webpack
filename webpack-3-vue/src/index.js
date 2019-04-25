/**
 * Created by xiaoxx on 2017/9/20.
 */

if(module.hot){
    module.hot.accept();
}

import Vue from 'vue';
import router from './router/router';
import App from './app.vue';
const app = new Vue({
    router,
    render(h){
        return h(App);
    }
}).$mount("#app");