<template>
    <div class="container">
        MESSAGE TEST
        {{id}}
        {{donnee}}
       
        <div class="sujet" v-for="item in donnee" :key="item.pseudo">
        
        </div>
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
    data() {
           return {
              id: this.$route.params.id, //this is the id from the browser  
              donnee: []   
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
            axios.post('http://localhost:3000/api/auth/getOneSujet', {
                id:(this.$route.params.id), 
            })
            .then((response) => {
                // var donnee = []
                this.donnee.push(response.data.result[0])
                console.log(response.data.result[0]);
              
            }, (error) => {
                console.log(error);
            });
        },
    }
}
</script>