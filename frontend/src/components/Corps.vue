<template>
    <div>
        <button @click.prevent="envoyerDonnées()" class="boutonConnect" 
        type="submit">Se connecter</button>
    </div>
</template>

<script>
// import axios from 'axios';

export default {
    name: "Corps",
    methods: {
        envoyerDonnées() {
            console.log("test")
        },
    },
}

</script>