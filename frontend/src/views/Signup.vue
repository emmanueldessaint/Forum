<template>
  <div class="home">
    
    <Header />
    <Creercompte />
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Creercompte from '@/components/Creercompte.vue'


export default {
  name: 'Signup',
  components: {
    Header,
    Creercompte,
  }
}
</script>