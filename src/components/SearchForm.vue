<template>
  
  <!-- <div class="d-flex">
      <input type="text" class="form-control" required="true" minlength="2" placeholder="Search" name="search">
      <label for="search" class="visually-hidden">Search</label>  <button type="submit" class="btn btn-dark "><i class="mdi mdi-magnify fs-5"></i></button></div> -->

      <form @submit.prevent="handleSubmit">
    <div class="input-group">
      <input type="text" class="form-control" required="true" minlength="2" placeholder="Conjure Post" name="search"
        v-model="editable.term">
      <label for="search" class="visually-hidden">Search</label>
      <button type="submit" class="button"><i class="mdi mdi-magnify"></i></button>
    </div>
  </form>
</template>


<script>
import { ref } from "vue";
import { postsService } from "../services/PostsService.js";
import Pop from "../utils/Pop.js";

export default {
  setup() {
    const editable = ref({})
    
    return {
      editable,

      async handleSubmit() {
        try {
          await postsService.getPostsBySearchTerm(editable.value.term)
          document.documentElement.scrollTop = 0
          editable.value = {}
          } catch (error) {
            console.error('[SearchPost]',error)
            Pop.error(error)
          }
      }
      
    }
  }

}
</script>


<style lang="scss" scoped>

</style>