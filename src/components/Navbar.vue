<template>
<div class="text-center px-3 mb-3 mt-2 p-2 banner "> 
  <router-link class="navbar-brand" :to="{ name: 'Home' }" @click="reloadPage()">
      <div class="text-center text-shadow d-flex justify-content-around">
     <img src="https://64.media.tumblr.com/e5aa2fe3dbcf2276efa08b28348ece30/9df0a62931e573f3-2c/s250x400/e2cb27c1d88bf222497269b9446df427e2a868ed.gifv" height="200" alt="">  <h1 class="mt-5">SpellBook</h1>
     <img src="https://64.media.tumblr.com/d5ed4cb68efc45bd3f3739be61c17466/9df0a62931e573f3-65/s250x400/c4d71fcfbdf9c972d28351b694c4583b33c0ff3c.gifv" height="200" alt="">
      </div>
    </router-link></div>


<!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3 rounded mb-3 mt-2">

    
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">
        
      </ul>
     
    </div>
  </nav> -->
</template>

<script>
import { postsService } from "../services/PostsService.js";
import Login from './Login.vue'

export default {
  setup() {
    async function getPosts() {
            try {
                await postsService.getPosts();
            }
            catch (error) {
                console.error(error);
                Pop.error(error);
            }
        }
    return {
      reloadPage() {
        getPosts()
      }
    }
  },
  components: { Login }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.banner{
  background-color: rgba(21, 5, 61, 0.536);
border: rgb(168, 79, 242) 4px;
border-style: groove;
/* background-color: rgb(145, 104, 174); */
background-image: url(https://i.pinimg.com/originals/e8/c2/fb/e8c2fb1892e5b97ea127d2bfce1a248d.gif);
}
</style>
