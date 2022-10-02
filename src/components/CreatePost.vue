<template>
<form @submit.prevent="handleSubmit">
<div>
  
<h5>Create Post</h5>
  <div class="card text-start mb-3 d-flex elevation-5">

  <div class="d-flex ps-3 mt-2 pt-2">
    <!-- NOTE  -->
        
          <img class="pic rounded" :src="user.picture" alt="">
        
      </div>

<div class="card-body">
  <div class="form-group">
    <textarea class="form-control" placeholder="Post content here!" name="postcontent"
          v-model="editable.body"></textarea>
    </div>
        </div>
        <div class="card-footer d-flex justify-content-between"> 
          <div class="d-flex">
          <div class="p-2"><strong>Img Url:</strong></div>
          <input type="url" name="imgurl" v-model="editable.imgUrl" class="rounded">
          </div>
      <div>
      <button class="btn btn-success" type="submit">Make Post</button>
    </div>

        </div>
  </div>
</div>

  </form>
</template>


<script>
import { computed } from "@vue/reactivity";
import { ref } from "vue";
import { AppState } from "../AppState.js";
import { Account } from "../models/Account.js";
import { postsService } from "../services/PostsService.js";
import Pop from "../utils/Pop.js";

export default {

  setup(props) {
   
      // NOTE
 const editable= ref({})
  
    return {
      // NOTE
      editable,
      user: computed(() => AppState.account),
    
      async handleSubmit() {
        try {
          const formData = editable.value
          await postsService.createPost(formData)
          editable.value = {
            post: {}
          }
        }
        catch (error) {
        Pop.error(error, '[Submitting Form]')
        }
      }
    }
    
}
}
</script>


<style lang="scss" scoped>
.pic{
height: 50px;
widows: 50px;
}
</style>