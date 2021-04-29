<template>
    <div class="container">
        <div class="sujet">
            <div class="titre">
            {{donnee[0].titre}}
            </div>
            <div class="contenu">
                <div class="contenu-pseudo">
                    {{donnee[0].pseudo}}
                </div>
                <p class="contenu-message">
                    {{donnee[0].message}}
                </p> 
            </div>
        </div>
        
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
<style>
.container{
    margin-top:150px;
    
}
.titre{
    
    
    font-size:2em;
    margin-right: auto;
    margin-left: auto;

 
}
.contenu{
    border:1px solid rgb(182, 182, 182);
    margin: 10px 50px 10px 50px;
    min-height:5em;
    display:flex;
    flex-direction:row;
    min-height:4em;
    background:rgb(233, 233, 233)
}
.contenu-pseudo{
    width:50em;
    padding-top:8px;
    font-size:1.3em;
    border-right: solid 1px rgb(182, 182, 182);
    background:rgb(233, 233, 233)
}

.contenu-message{
    text-align: justify;
    line-height: 1.5em;
    padding:8px;
    /* margin-left:10px; */
    font-size:1.3em;
}
</style>