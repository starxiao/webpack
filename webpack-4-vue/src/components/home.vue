<template>
    <div class="container">hello world!</div>
</template>
<script>
import axios from 'axios';
import index from "../commons/index.js";
export default {
    name: 'home',
    data(){
        return{

        }
    },
    mounted(){
        console.log(new Date().getTime());
        axios({});
        index();
    }
}
</script>
