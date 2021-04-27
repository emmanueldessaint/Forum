<template>
    <div class="home">
        <Affichagesujets/>
    </div>
</template>
<script>

import Affichagesujets from '@/components/Affichagesujets.vue'

export default {
    name: 'Sujet',
    components : {
        Affichagesujets,
    }
}
</script>