<template>
    <div>
        <div @click.prevent="lafonction" type="submit" class="test">HIhhhlblbjjhkjnjn
        </div>
    </div>
</template>
<script>
// import axios from 'axios';
// import router from '../router/index.js'

export default {
    name:"Afficherdiscussions",
    methods: {
        lafonction() {
            // axios.get('http://localhost:3000/api/auth/getOne')
            // .then((response) => {
            //     console.log(response);
            //     console.log("test")
            // }, (error) => {
            //     console.log(error);
            // });   
            console.log('test')
        },
    }
}
</script>
<style>
.test{
    font-size:20px;
    margin-top:200px;
}
</style>