<template>
  <div class="mb-3 hi">
<form @submit.prevent="handleSubmit">
<div>
  <div class="d-flex">
<h5 class="p-2">Create Post</h5></div>
  <div class="card hi text-start mb-2 d-flex">

  <div class="d-flex ps-3">
    <!-- NOTE  -->
        
          <img class="pic rounded-circle" :src="user.picture" alt="">
          <h5 class="p-2"><strong>{{user.name}}</strong></h5>
      </div>

<div class="card-body hi">
  <div class="form-group">
    <textarea  rows="4" cols="35" placeholder="Insert your musings." name="postcontent"
          v-model="editable.body" required="true"></textarea>
    </div>
        </div>
        <div class="card-footer d-flex justify-content-between"> 
          <div class="d-flex">
          <div class="p-2"><strong>Img Url:</strong></div>
          <input type="url" name="imgurl" v-model="editable.imgUrl" class="">
          </div>
      <div>
      <button class="button" type="submit">Make Post</button>
    </div>

        </div>
  </div>
</div>

  </form></div>
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
height: 70px;
widows: 70px;
}

.hi{
  border: none;
  color: rgb(46, 20, 217);
}

</style>