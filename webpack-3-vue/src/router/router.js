/**
 * Created by xiaoxx on 2017/9/22.
 */


import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import{
    Home
} from '../util/components';

const router = new VueRouter({

    routes:[
        {
            path: '/',
            component: Home
        },
        {
            path: '/home',
            component: Home
        }
    ]
});
export default router;