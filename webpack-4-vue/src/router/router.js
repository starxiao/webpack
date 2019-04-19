/**
 * Created by xiaoxx on 2017/9/22.
 */


import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import{
    Home,
    Btn
} from '../util/components';

const router = new VueRouter({

    routes:[
        {
            path: '/home',
            component: Home
        },
        {
            path: '/btn',
            component: Btn
        }
    ]
});
export default router;