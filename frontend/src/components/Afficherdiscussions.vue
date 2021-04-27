<template>
  <body>
    
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
        
      </div>

    </div>
  </body>
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
  methods: {
    call() {
      localStorage.setItem('pseudo', this.donnee[0])
      console.log(this.donnee[0])
    }
  
  },
  mounted() {
    axios.get("http://localhost:3000/api/auth/getOne").then(
      (response) => {
        
            // console.log(response.data.result[i])
        this.donnee.push(response.data.result)
      },
      (error) => {
        console.log(error);
      }
    );
  },
};
</script>
<style>
body{
    margin-top: 200px;
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