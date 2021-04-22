<template>
    <body class="main">
        <h2>Créer une discussion</h2>
        <div class="discussions">
            <form>
                <label for ="titreSujet" class="textTitre">Titre du sujet</label><br>
                <textarea rows="1" cols="50" class="champTitre" v-model="title"></textarea><br><br>
                <textarea rows="10" cols="110" class="champCorps" placeholder="Ecrivez votre message ici..." v-model="message"></textarea><br><br>
                
                <button class="boutonEnvoyer" @click.prevent="envoyerDonnées()"><router-link class="routerLink" to="/Accueil">Envoyer</router-link></button>
    
            </form>
        </div>
    </body>
</template>
<script>
// import axios from 'axios';
// import router from '../router/index.js';
import axios from 'axios';
// import router from '../router/index.js';

export default {
    name: "Corpss",
    methods: {
        envoyerDonnées() {
            axios.post('http://localhost:3000/api/auth/create', {
                titre:(this.title),
                message:(this.message),
                pseudo:("pseudo"),
                
            })
            // .then((response) => {
                
            //     }
            //     // if (response.status === 201) {
            //     //     router.push("/Accueil")
            //     // }
            // }, (error) => {
            //     console.log(error);     
            // });
        }
    }
}
</script>
<style>
.main{
    margin-top:150px;
    
}
h2{
    text-align:left;
    margin-left: 2em;
}
.discussions{
    display:flex;
    justify-content: center;
    height:40em;
    
    background:rgb(167, 165, 165);
    /* padding:20px 10px 10px 20px; */
    
    
}
.titreSujet{
    background:rgb(216, 216, 216);
    border-color: rgb(10, 10, 10);
    
}
.textTitre{
    font-size:25px;
    color:rgb(34, 34, 34);
    /* padding-top:20px; */
}
.champCorps{
    font-size:20px;
    color:rgb(34, 34, 34);
    border-radius: 5px;
}
.champTitre{
    font-size:20px;
    color:rgb(34, 34, 34);
    margin-top:10px;
    border-radius: 5px;
}
.boutonEnvoyer{
    width:8em;
    height:2.5em;
    background: linear-gradient(to right, #111861, #011a32);
    color:rgb(206, 197, 197);
    font-size:1.2em;
    border-radius:5px;
    cursor:pointer;
}
.router-link{
    color:red;
    background:red;
}
</style>
