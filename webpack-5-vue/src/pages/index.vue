<template>
    <div class="container">
        <h1>webpack-5-vue</h1>
        <p class="msg">{{msg}}</p>
    </div>
</template>
<script>
export default {
    name: 'index',
    data() {
        return {
            msg: 'hello word'
        }
    }
}
</script>
<style scoped>
    .container {
        display: flex;
    }
    .msg {
        color: red;
    }
</style>