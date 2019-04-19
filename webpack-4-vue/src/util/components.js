/**
 * Created by xiaoxx on 2017/9/22.
 */

import Vue from 'vue';
const Home = Vue.component('home',function (resolve) {
    require(['../components/home.vue'],resolve);
});
const Btn = Vue.component('btn', function (resolve) {
    require(['../components/btn.vue'], resolve);
});

export {
    Home,
    Btn
}