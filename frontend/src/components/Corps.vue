<template>
    <body class="main">
        <h2><router-link class="textTitre" to="/Accueil">Retour aux sujets</router-link></h2>
        <div class="discussions">
            <form>
                <label for ="titreSujet" class="textTitre mt-2">Titre du sujet</label><br>
                <textarea rows="1" cols="50" class="champTitre" v-model="title"></textarea><br><br>

                <textarea rows="10" cols="110" class="champCorps" v-model="message" placeholder="Ecrivez votre message ici..."></textarea><br><br>
                <button class="boutonEnvoyer" @click.prevent="envoyerDonnées()" @click="$router.push('/Accueil')">Envoyer</button>
            </form>
        </div>
    </body>
</template>
<script>
// import axios from 'axios';
// import router from '../router/index.js';
import axios from 'axios';
import router from '../router/index.js';

export default {
    name: "Corps",
    data() {
    return {
      pseudo: localStorage.getItem("Pseudo"),
    };
  },
    methods: {
        envoyerDonnées() {
            axios.post('http://localhost:3000/api/auth/createSujet', {
                title:(this.title),
                message:(this.message),
                pseudo:(this.pseudo),
                
            })
            .then((response) => {
                
                console.log(response)
                if (response.status === 201) {
                    router.push("/Accueil")
                }
            }, (error) => {
                console.log(error);     
            });
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
    margin-left: 10%;
}
.discussions{
    display:flex;
    justify-content: center;
    /* height:40em; */
    padding-bottom:20px;
    padding-top:20px;
    border-radius:10px;
    background:rgb(167, 165, 165);
    width:80%;
    margin:auto;
   
    
    
}
.titreSujet{
    background:rgb(216, 216, 216);
    border-color: rgb(10, 10, 10);
    
}
.textTitre{
    font-size:25px;
    color:rgb(55, 51, 70);
    text-decoration: none;
    /* padding-top:20px; */
}
.champCorps{
    width:50vw;
    color:rgb(34, 34, 34);
    border-radius: 5px;
}
.champTitre{
    width:30vw;
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
.mt-2{
    padding-top:15px;
}
</style>
