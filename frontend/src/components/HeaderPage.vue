<template>  
    <div>
        <header>
            <div class="top-background">   
                <div class="menu">
                    <div class="marque" style="font-family:'Courier New'">Powerfull bikes</div>
                    <div class="menuDeroulant">
                        <!-- <div class="menuprojets">Groupomania</div> -->
                        <div class="headerPageprincipale"><router-link class="routerLink routerlinkaccueil" to="/Accueil">Accueil</router-link></div>
                        <div class="headerConnect"><router-link class="routerLink" to="/CreerDiscussion">Créer une discussion</router-link></div>
                        <div class="headerSignup"><router-link class="routerLink" to="/Signup">Se déconnecter</router-link></div>
                    </div>
                </div>            
            </div>
        </header>      
    </div> 
</template>

<script>
export default {
    name:"HeaderPage",
    // methods: {
    //     getPseudo() {
    //          axios.get("http://localhost:3000/api/auth/getAllMessages", {        
    //             pseudo: this.$route.params.id,
    //         })
    //     }
    // }
}
</script>

<style>

.routerLink{
    text-decoration: none;
    color: rgb(206, 197, 197);
}
.top-background{
    background: linear-gradient(to right, #111861, #011a32);
    color:rgb(206, 197, 197);
    margin:-10px; 
}
.menu{
    padding-top:3em;
    display:flex;
    justify-content: space-between;
    background: linear-gradient(to right, #111861, #011a32);
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    color:rgb(206, 197, 197);
}
.marque{
    font-family: 'AlexBrush';
    display:flex;
    align-content: center;
    font-size:2em;
    margin-left: 2em;
    cursor:pointer;
    /* margin-top:-0.5em; */
}
.menuDeroulant{
    display:flex;
    justify-content: space-between;
    margin-right:3em;
    
}
.menuprojets{
    margin-right: 5em;
    cursor:pointer;
}
.headerConnect{
    margin-right:2em;
    cursor:pointer;
}
.headerSignup{
    cursor:pointer;
}
.presentation{
    margin: 4em 10em 1em 10em;
    padding-bottom:5em;
    font-size:1.5rem;
    text-align: center;
}
.routerlinkaccueil{
    margin-right:2em;
    font-size:1.1em;
}
</style>