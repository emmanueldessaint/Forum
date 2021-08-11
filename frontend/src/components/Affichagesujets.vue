<template>
  <div class="container">
    <div class="sujet">
      <div class="titre-repondre">
        <div class="titre">
          {{ donnee[0].titre }}
        </div>
        <div class="repondre">
          
          <div class="bouton-poster" @click="update">Poster un message</div>
        </div>
      </div>

      
      <div
        class="contenu contenu-boucle"
        v-for="item in donneeMessage[0]"
        :key="item.idSujet"
      >
        <div class="contenu-pseudo-date">
          <div class="contenu-pseudo">
            {{ item.pseudo }}
          </div>
          <div class="contenu-date">
            {{ item.ArrivalDate | dateFormat}}
          </div>
        </div>
        <p class="contenu-message">
          {{ item.message }}
        </p>
      </div>
      <div v-if="poster">
        <div class="menu-poster">
          <form>
            <textarea
              class="champCorps textareamessage"
              v-model="envoiMessage"
              placeholder="Ecrivez votre message ici..."
            ></textarea
            ><br /><br />
            <div class="boutonEnvoyer" @click="envoyerDonnées()">
              Envoyer
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import VueRouter from "vue-router";
import Sujet from "../views/Sujet.vue";
import axios from "axios";

Vue.use(VueRouter);

export default {
  name: "Affichagesujets",
  data() {
    return {
      id: this.$route.params.id, //this is the id from the browser
      donnee: [],
      donneeMessage: [],
      poster: false,
      pseudo: localStorage.getItem("Pseudo"),
    };
  },
  routes: [
    { path: "/Sujet/:id", component: Sujet }, //where :id is the dynamic id you wish to access from the browser
  ],
  mounted() {
    this.récupérerDonnées();
    this.récupérerMessages();
  },
  methods: {
    récupérerDonnées() {
      axios
        .post("http://localhost:3000/api/auth/getOneSujet", {
          id: this.$route.params.id,
        })
        .then(
          (response) => {
            this.donnee.push(response.data.result[0]);
            console.log(response.data.result[0]);
          },
          (error) => {
            console.log(error);
          }
        );
    },
    récupérerMessages() {
      axios
        .post("http://localhost:3000/api/auth/getAllMessages", {
          id: this.$route.params.id,
        })
        .then(
          (response) => {
            this.donneeMessage.push(response.data.result);
            console.log(response.data.result);
          },
          (error) => {
            console.log(error);
          }
        );
    },
    update() {
      this.poster = !this.poster;
    },
    envoyerDonnées() {
      axios
        .post("http://localhost:3000/api/auth/createMessage", {
          id: this.$route.params.id,
          message: this.envoiMessage,
          pseudo: this.pseudo,
          
        })
        .then(
          (response) => {
                console.log(response)
          },
          (error) => {
            console.log(error);
          }
        );
      
    },
  },
};
</script>
<style>
.container {
  margin-top: 150px;
  width:80%;
  margin-left:auto;
  margin-right:auto;
}
.titre-repondre {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.titre {
  font-size: 2em;
  margin-left: 1.6em;
  /* background:red; */
  max-width: 600px;
}
.repondre {
  font-size: 1.7em;
  padding-right: 2em;
}
.contenu {
  border-radius:10px;
  margin: 10px 0px 10px 0px;
  min-height: 5em;
  display: flex;
  flex-direction: column;
  min-height: 4em;
  background: rgb(233, 233, 233);
}
.contenu-pseudo-date {
  display: flex;
  justify-content: space-between;
}
.contenu-pseudo {
  font-size: 1.8em;
  padding: 15px 15px 15px 38px;
}

.contenu-date {
  font-size: 1.4em;
  padding: 18px 30px 15px 15px;
}

.contenu-message {
  text-align: justify;
  line-height: 1.5em;
  padding: 5px 30px 5px 30px;
  margin-left: 10px;
  margin-right: 10px;
  /* margin-left:10px; */
  font-size: 1.3em;
}
/* .menu-poster{
  position:fixed;
  z-index:1;
  
  left:50px;
  top:800px;
} */
.textareamessage {
  
  margin: 10px 50px 10px 50px;
  width: 70vw;
  min-height: 5em;
}
.bouton-poster{
  cursor:pointer;
}
.boutonEnvoyer{
  width:130px;
  margin:auto;
  padding-top:10px;
  height:35px;
  margin-bottom:20px;
}
.menu-poster{
  border: 1px solid rgb(182, 182, 182);
  margin: 10px 0px 10px 0px;
  min-height: 5em;
  display: flex;
  flex-direction: column;
  min-height: 4em;
  background: rgb(117, 120, 128);
  border-radius: 10px;
}
</style>