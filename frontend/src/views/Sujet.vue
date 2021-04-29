<template>
    <div class="home">
        <HeaderPage />
        <Affichagesujets/>
    </div>
</template>
<script>

import HeaderPage from '@/components/HeaderPage.vue'
import Affichagesujets from '@/components/Affichagesujets.vue'

export default {
    name: 'Sujet',
    components : {
        HeaderPage,
        Affichagesujets,
    }
}
</script>