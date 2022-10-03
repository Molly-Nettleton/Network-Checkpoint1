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

    <div class="post-content col-md-7 col-12">
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


    <div class="rightside col-md-2 col-12">
      <img src="http://image.blingee.com/images14/content/output/2007/9/24/248292362_ac93e8ca.gif?4" class="img-fluid mb-2 button" alt="">
      <div class="text-center hello mb-3 text-light">Sponsored by:</div>
      <div class="" v-for="l in lads">
      <lad-card :lad="l"/></div>
      <img src="http://www.animationplayhouse.com/wizani2.gif" class="img-fluid" alt="">
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
  padding-left: 4rem;
  padding-right: 4rem;
  
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

// main {
//   background-image: url(https://images.unsplash.com/photo-1610209455607-89e8b3e0e393?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80);
//   background-size:cover;
//   background-repeat: no-repeat;
// }

</style>
