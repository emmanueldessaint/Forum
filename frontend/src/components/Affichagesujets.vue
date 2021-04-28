<template>
    <div class="test">
        MESSAGE TEST
        {{id}}
    </div>
</template>
<script>
import Vue from 'vue';
import VueRouter from 'vue-router';
import Sujet from '../views/Sujet.vue';
import axios from 'axios';

Vue.use(VueRouter);

export default {
    name:"Affichagesujets",
    data(){
           return {
              id: this.$route.params.id //this is the id from the browser
           }
       },
    routes: [

        { path: '/Sujet/:id', 
          component: Sujet }//where :id is the dynamic id you wish to access from the browser
    ],
    mounted() {
        this.envoyerDonnées()
        
        
    },
    methods: {
        envoyerDonnées() {
            axios.post('http://localhost:3000/api/auth/login', {
                id:(this.$route.params.id),
                
            })
            .then((response) => {
                console.log(response);
              
            }, (error) => {
                console.log(error);
            });
            
        },
    }

}
</script>