<template>
  <div class="global">
    <div>
      <div class="creer"><router-link class="routercreer" to="/CreerDiscussion">Créer un nouveau sujet</router-link></div>
    </div>
    <div class="test" v-for="item in donnee[0]" :key="item.pseudo">
      <div class="width">
          <div>{{item.titre}}</div>
          <!-- <div>{{item.pseudo}}</div> -->
          <router-link class="routerLink" :to="`/Sujet/${item.id}`"><div @click="call(item.id)">{{item.pseudo}}</div></router-link>
      </div>

      <div class="participation">
        0
      </div>
      
      <div class="date">
        {{item.ArrivalDate}}
      </div>

    </div>
  </div>
</template>
<script>
import axios from "axios";
// import router from '../router/index.js'

export default {
  name: "Afficherdiscussions",
  data() {
      return {
          donnee: []
         
      }
  },
  
  mounted() {
    axios.get("http://localhost:3000/api/auth/getAllSujets").then(
      (response) => {
        this.donnee.push(response.data.result)
        console.log(response.data.result)
      },
      (error) => {
        console.log(error);
      }
    );
  },
};
</script>
<style>
.global{
  margin-top:150px;
}
.creer{
  font-size:1.5em;
  margin-bottom:3em;
  
}
.routercreer{
  text-decoration: none;
}
.width{
  width:300px;
}
.test{
  
  display:flex;
  justify-content: space-around;
  margin:1em;
  font-size:1.2em;

}
.titre{
  display:flex;
  flex-direction: column;
  
}
.pseudo{
    display:flex;
    flex-direction:column;
}
</style>