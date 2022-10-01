<template>
  <header>
    <!-- <Navbar /> -->
  </header>
  <main>
  
    <div class="container-fluid">
  <div class="row">
    <Sidebar />
    <!-- <div class="sidebar elevation-5 col-3 bg-dark rounded">
      
      <div class="d-flex">
      <input type="text" class="form-control" required="true" minlength="2" placeholder="Search" name="search">
      <label for="search" class="visually-hidden">Search</label>  <button type="submit" class="btn btn-dark "><i class="mdi mdi-magnify fs-5"></i></button></div>

    <br><br><br><br>

      <img src="https://thiscatdoesnotexist.com/" alt="" class="img-fluid rounded">
      <div class="pt-4 fs-9">Class Year</div>
      <h4>Name</h4>
      <i class="mdi mdi-cat fs-2"></i> hi<br>
      <i class="mdi mdi-cat fs-2"></i> hii<br>
      <i class="mdi mdi-cat fs-2"></i> hihihihii
  
    
    </div> -->
<br><br>

    <div class="post-content col-7">
      <Navbar />
      <!-- <h1 class="text-center mt-3 mb-5">Social Media Site</h1> -->

<router-view />
<br><br><br><br> 

<!-- CREATE POST START -->
<!-- <div>
 <h5>Create Post</h5>
<div class="card text-start mb-3 d-flex elevation-5">
  <div class="d-flex ps-4 pt-3">
        <img class="card-img-top rounded" src="https://thiscatdoesnotexist.com/" alt="Title">
      </div>
        <div class="card-body">
      <form @submit="handleSubmit">
  <div class="form-group">
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">Example text area</textarea>
  </div>
</form>
        </div>
        <div class="card-footer d-flex justify-content-between"> 
          <form>
          <div>Img Url</div>
          <input type="text" name="url">
          </form>
          <button type="submit" class="btn btn-dark text-success fs-10">Post</button>

        </div>
      </div>
</div> -->
<!-- CREATE POST END  -->
<br><br>

<!-- POST CARD START -->
      <!-- <div class="card text-start mb-3 d-flex ">
        <div class="d-flex ps-4 pt-4">
        <img class="card-img-top rounded" src="https://thiscatdoesnotexist.com/" alt="Title"><p class="p-2">Name</p><div> <i class="mdi mdi-account-school-outline fs-5"></i> </div>
      </div>
        <div class="card-body">
          <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed nemo modi quas velit esse placeat optio ea asperiores, aliquid vero ratione perferendis odio facilis et repudiandae sit laboriosam dignissimos officiis.</p>
        </div>
        <div class="card-footer d-flex justify-content-between"><span class="hello pt-2">posted @</span><i class="mdi mdi-heart fs-4"></i></div>
      </div> -->
<!-- POST CARD END -->

    </div>


    <div class="rightside col-2">
      <div class="text-center hello mb-3">Sponsored by:</div>
      <div class="" v-for="l in lads">
      <lad-card :lad="l"/></div>
    </div>
  </div>
</div>
  </main>
  <footer>
  </footer>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import LadCard from "./components/LadCard.vue"
import { ladsService } from "./services/LadsService.js"
import Sidebar from "./components/Sidebar.vue"


export default {
  setup() {
async function getLads(){
        try { 
          await ladsService.getLads()
        }
        catch (error) {
          console.error(error)
        Pop.error(error)
        }
}

    onMounted(() => {
  getLads()
})

    return {
      appState: computed(() => AppState),
      lads: computed(() => AppState.lads),
      account: computed(() => AppState.account)
    }
  },
  components: { Navbar, LadCard, Sidebar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";


.sidebar{
  height: 60rem;
  padding-top: 1rem;
  padding-left: 5rem;
  padding-right: 5rem;
  
}

.post-content{
  // padding-top: 6rem;
  padding-left: 4rem;
  padding-right: 4rem;
}

.rightside{
  padding-top: 3rem;
  padding-right: 3rem;
}

.card-img-top{
height: 50px;
width: 50px
}

.hello{
  font-size: small
}

</style>
