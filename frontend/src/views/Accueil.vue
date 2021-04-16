<template>
  <div class="home">
    
    <HeaderPage />
    <Afficherdiscussions />
  </div>
</template>

<script>

import HeaderPage from '@/components/HeaderPage.vue'
import Afficherdiscussions from '@/components/Afficherdiscussions.vue'


export default {
  name: 'Accueil',
  components: {
    HeaderPage,
    Afficherdiscussions,
  }
}
</script>