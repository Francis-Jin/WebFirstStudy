<template>
    <div class="home">
        <h3>{{msg}}</h3>
    </div>
</template>

<script>
    export default {
        name:'Home',
        data () {
            return {
                msg:"Hello World 123"
            }
        }
    }
</script>

<style>
    .home{
        height:100px;
        background:red;
    }
</style>