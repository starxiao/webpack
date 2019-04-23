/**
 * Created by xiaoxx on 2017/9/22.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const Home = () => import('../components/home.vue' /* webpackChunkName: 'home' */);
const Btn = () => import('../components/btn.vue' /* webpackChunkName: 'btn' */);

const router = new VueRouter({
    routes:[
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/btn',
            name: 'btn',
            component: Btn
        }
    ]
});
export default router;