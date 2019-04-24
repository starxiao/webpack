<template>
    <div class="container">
        <div class="btn">btn</div>
        <div class="">
            <img >
        </div>
        <toast-component></toast-component>
    </div>
</template>
<script>
import '../static/index.css';
import index from '../commons/index.js';
export default {
    name: 'btn',
    mounted(){
        index();
    },
    components:{
        'toast-component': () => import('./toast.vue' /* webpackPrefetch: true */)
    }
}
</script>
<style scoped>
    .container{
        width: 100%;
        height: 800px;
    }
    .btn{
        width: 100%;
        height: 200px;
    }
    img{
        width: 200px;
        height: 400px;
        background: url('../static/logo.png');
    }
</style>

