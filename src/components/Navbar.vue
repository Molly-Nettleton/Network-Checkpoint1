<template>
<div class="text-center bg-dark px-3 rounded mb-3 mt-2 p-2"> <router-link class="navbar-brand" :to="{ name: 'Home' }">
      <div class="text-center">
        <h1>SpellBook</h1>
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
import Login from './Login.vue'
export default {
  setup() {
    return {}
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
</style>
