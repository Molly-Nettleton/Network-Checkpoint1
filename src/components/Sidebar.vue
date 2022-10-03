<template>
  <div class="sidebar elevation-5 col-md-3 text-center sticky-top ">
    
      <!-- <div class="d-flex">
      <input type="text" class="form-control" required="true" minlength="2" placeholder="Search" name="search">
      <label for="search" class="visually-hidden">Search</label>  <button type="submit" class="btn btn-dark "><i class="mdi mdi-magnify fs-5"></i></button></div> -->
      <search-form />
      <br>
      <div>
        <button @click="changePage(previousPage)" :disabled="!previousPage"  class="button btn-light me-2"
      >Newer</button>

<router-link class="navbar-brand" :to="{ name: 'Home' }"  @click="reloadPage()">
      <button class="button btn-light me-2">Home</button>
    </router-link>

        <button class="button" @click="changePage(nextPage)" :disabled="!nextPage"
        >Older</button>
        

      </div><br>
      <div v-if="user.isAuthenticated">
      <div class="d-flex flex-column align-items-center">
        <!-- <img :src="account.picture" alt="" height="150" class="rounded-circle"> -->
        <img @click="gotoProfilePage()" src="https://i.pinimg.com/originals/08/d1/2d/08d12dbccf8b26c3338a0b82cdab411d.gif" class="hoverable" height="180" alt="">
        </div>

      <div class="pt-2 fs-9"> <span v-if="account.graduated">
          <i class="mdi mdi-wizard-hat fs-5" label="Graduate"> Fall 2022</i> 
        </span></div>
 <router-link class="navbar-brand d-flex justify-content-center" :to="{ name: 'Account' }">
      <div class="d-flex flex-column align-items-center">
        <h4 class="text-shadow">{{account.name}}</h4>
        </div>
    </router-link>
    
<div class="text-shadow">
        <a v-if="account.github" :href="account.github" target="_blank">
          <i class="mdi mdi-crystal-ball selectable fs-3 text-light"></i>
        </a> Github<br></div>
        <div class=" text-shadow">
                <a v-if="account.linkedin" :href="account.linkedin" target="_blank">
          <i class="mdi mdi-crystal-ball selectable fs-3 text-light"></i>
        </a> LinkedIn<br></div>
        <div class="mb-2 text-shadow">
        <a v-if="account.resume" :href="account.resume" target="_blank">
          <i class="mdi mdi-crystal-ball selectable fs-3 text-light"></i>
        </a> Resume</div>
</div>
<login/>
    </div>



</template>
<script>
import { computed } from 'vue'
import { useRouter } from "vue-router"
import { AppState } from '../AppState'
import { postsService } from "../services/PostsService.js"
import Pop from "../utils/Pop.js"
import SearchForm from './SearchForm.vue'

export default {
  setup() {
    const router= useRouter()
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

      async gotoProfilePage() {
        try {
          await router.push({ name: 'Profile', params: { id: this.account.id } })
          window.location.reload()
        } catch (error) {
          
        }
      },
          user: computed(() => AppState.user),
          account: computed(() => AppState.account),
          nextPage: computed(() => AppState.nextPage),
          previousPage: computed(() => AppState.previousPage),
reloadPage() {
  getPosts()
        document.documentElement.scrollTop = 0
      },
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
  background-image: url(https://img1.picmix.com/output/stamp/normal/6/0/1/6/1556106_f227e.gif);
  // background-image: url(https://i.pinimg.com/originals/19/41/64/194164d700735e36890fcb0ae6282c17.gif);
  // background-image: url(https://img1.picmix.com/output/stamp/normal/7/6/2/6/1566267_a5eb4.gif);
}

.hoverable{
  cursor: pointer;
}
@media (max-height: 550px){
  .sidebar{
    position: static;
  }
}
</style>