<template>
  <div class="sidebar elevation-5 col-3 text-center sticky-top">
      <!-- <div class="d-flex">
      <input type="text" class="form-control" required="true" minlength="2" placeholder="Search" name="search">
      <label for="search" class="visually-hidden">Search</label>  <button type="submit" class="btn btn-dark "><i class="mdi mdi-magnify fs-5"></i></button></div> -->
      <search-form />
      <br>
      <div>
        <button @click="changePage(previousPage)" :disabled="!previousPage" class="button btn-light me-2"
        :class="{'disabled' : !previousPage}">Old</button>

<router-link class="navbar-brand" :to="{ name: 'Home' }" >
      <button class="button btn-light me-2">Home</button>
    </router-link>

        <button @click="changePage(nextPage)" :disabled="!nextPage"
        :class="`button btn-light ${!nextPage ? 'btn-info' : ''}`">New</button>
        

      </div>
      <br><br>
 <router-link class="navbar-brand d-flex justify-content-center" :to="{ name: 'Home', }">
      <div class="d-flex flex-column align-items-center">
        <img :src="account.picture" alt="" height="120" class="rounded">
        </div>
    </router-link>
      
      <div class="pt-4 fs-9"> <span v-if="!user.graduated">
          <i class="mdi mdi-account-school-outline fs-5"> Fall 2022</i> 
        </span></div>
 <router-link class="navbar-brand d-flex justify-content-center" :to="{ name: 'Account' }">
      <div class="d-flex flex-column align-items-center">
        <h4>{{account.name}}</h4>
        </div>
    </router-link>
    
<div class="mb-2">
        <a v-if="account.github" :href="account.github" target="_blank">
          <i class="mdi mdi-deviantart selectable"></i>
        </a> Github<br></div>
        <div class="mb-2">
                <a v-if="account.linkedin" :href="account.linkedin" target="_blank">
          <i class="mdi mdi-deviantart selectable"></i>
        </a> LinkedIn<br></div>
        <div class="mb-2">
        <a v-if="account.resume" :href="account.resume" target="_blank">
          <i class="mdi mdi-deviantart selectable"></i>
        </a> Resume<br></div>
<br>
<login/>
<br>
    </div>



</template>
<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import { postsService } from "../services/PostsService.js"
import Pop from "../utils/Pop.js"
import SearchForm from './SearchForm.vue'

export default {
    setup() {
        return {
          user: computed(() => AppState.user),
          account: computed(() => AppState.account),
          nextPage: computed(() => AppState.nextPage),
          previousPage: computed(() => AppState.previousPage),

        async changePage(pageUrl) {
        try {
          await postsService.getPosts(pageUrl)
          document.documentElement.scrollTop = 0
        } catch (error) {
        Pop.error(error.message)
        }
        },
        };
    },
    components: { SearchForm }
}
</script>


<style lang="scss" scoped>
.sidebar{
  background-color: rgba(21, 5, 61, 0.756);
  color:azure;
  background-image: url(https://i.pinimg.com/originals/19/41/64/194164d700735e36890fcb0ae6282c17.gif);
  // background-image: url(https://img1.picmix.com/output/stamp/normal/7/6/2/6/1566267_a5eb4.gif);
}
</style>