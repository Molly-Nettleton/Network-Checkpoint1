<template>
  <div class="sidebar elevation-5 col-3 bg-dark">
      
      <div class="d-flex">
      <input type="text" class="form-control" required="true" minlength="2" placeholder="Search" name="search">
      <label for="search" class="visually-hidden">Search</label>  <button type="submit" class="btn btn-dark "><i class="mdi mdi-magnify fs-5"></i></button></div>
      <br><br><br><br>
 <router-link class="navbar-brand d-flex" :to="{ name: 'Profile' }">
      <div class="d-flex flex-column align-items-center">
        <img class="card-img-top rounded" alt="Title" :src="account.picture || user.picture">
        </div>
    </router-link>
      
      <div class="pt-4 fs-9"> <span v-if="!user.graduated">
          <i class="mdi mdi-account-school-outline fs-5"> Fall 2022</i> 
        </span></div>
 <router-link class="navbar-brand d-flex" :to="{ name: 'Profile' }">
      <div class="d-flex flex-column align-items-center">
        <h4>{{user.name}}</h4>
        </div>
    </router-link>
    


        <a v-if="!user.github" :href="user.github" target="_blank">
          <i class="mdi mdi-deviantart selectable"></i>
        </a> Github<br>

                <a v-if="user.github" :href="user.github" target="_blank">
          <i class="mdi mdi-deviantart selectable"></i>
        </a>Link<br>


    </div>



</template>
<script>
import { computed } from 'vue'
import { AppState } from '../AppState'

export default {
  setup() {
    return {
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
    }
  }
}
</script>


<style lang="scss" scoped>

</style>