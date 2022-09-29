<template>
  <header>
    <!-- <Navbar /> -->
  </header>
  <main>
    <router-view />
    <div class="container-fluid">
  <div class="row">
    <div class="sidebar col-3 bg-dark rounded">
      
      <div class="d-flex">
      <input type="text" class="form-control" required="true" minlength="2" placeholder="Search" name="search">
      <label for="search" class="visually-hidden">Search</label>  <button type="submit" class="btn btn-dark "><i class="mdi mdi-magnify"></i></button></div>


    <br><br><br><br>


      <img src="https://thiscatdoesnotexist.com/" alt="" class="img-fluid rounded">
      <div class="pt-4 fs-9">Class Year</div>
      <h4>Name</h4>
      <i class="mdi mdi-cat fs-2"></i> hi<br>
      <i class="mdi mdi-cat fs-2"></i> hii<br>
      <i class="mdi mdi-cat fs-2"></i> hihihihii
  
    
    </div>


    <div class="post-content col-7">


<div class="card text-start mb-3 d-flex ">
  <div class="d-flex ps-4 pt-4">
        <img class="card-img-top rounded" src="https://thiscatdoesnotexist.com/" alt="Title"><p>hiii</p>
      </div>
        <div class="card-body">
      <form @submit="handleSubmit">
  <div class="form-group">
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">Example textarea</textarea>
  </div>
</form>
        </div>
        <div class="card-footer d-flex justify-content-between"> 
          <form>
          <div>Img Url</div>
          <input type="text" name="url">
          </form>
          <button type="submit" class="btn btn-dark text-success fs-10">Submit</button>

        </div>
      </div>


<br><br>
      <div class="card text-start mb-3 d-flex ">
        <img class="card-img-top rounded" src="https://thiscatdoesnotexist.com/" alt="Title">
        <div class="card-body">
          <h4 class="card-title">Title</h4>
          <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed nemo modi quas velit esse placeat optio ea asperiores, aliquid vero ratione perferendis odio facilis et repudiandae sit laboriosam dignissimos officiis.</p>
        </div>
        <div class="card-footer text-end"><i class="mdi mdi-heart fs-2"></i></div>
      </div>
    </div>


    <div class="rightside col-2">
      <img src="https://thiscatdoesnotexist.com/" alt="" class="img-fluid pb-2">
      <img src="https://thiscatdoesnotexist.com/" alt="" class="img-fluid pb-2">
      <img src="https://thiscatdoesnotexist.com/" alt="" class="img-fluid pb-2">
    </div>
  </div>
</div>
  </main>
  <footer>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";


.sidebar{
  height:36rem;
  padding-top: 1rem;
  padding-left: 5rem;
  padding-right: 5rem;
}

.post-content{
  padding-top: 6rem;
  padding-left: 6rem;
  padding-right: 6rem;
}

.rightside{
  padding-top: 6rem;
}

.card-img-top{
height: 50px;
width: 50px
}

</style>
