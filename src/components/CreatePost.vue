<template>
<form @submit.prevent="handleSubmit">
<div>
  
<h5>Create Post</h5>
  <div class="card text-start mb-3 d-flex elevation-5">

  <div class="d-flex ps-4 pt-2">
        <!-- <User/> -->
      </div>

<div class="card-body">
  <div class="form-group">
    <textarea class="form-control" placeholder="Post content here!" name="postcontent"
          v-model="banana.body"></textarea>
  </div>
        </div>


        <div class="card-footer d-flex justify-content-between"> 
          <div class="d-flex">
          <div class="p-2"><strong>Img Url:</strong></div>
          <input type="url" name="imgurl" v-model="banana.imgUrl" class="rounded">
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
import { ref } from "vue";
import { postsService } from "../services/PostsService.js";
import Pop from "../utils/Pop.js";

export default {
  setup() {
    const banana = ref({
  post:{}
  })
    return {
      banana,
      async handleSubmit() {
        try {
          const formData = banana.value
          await postsService.createPost(formData)
          banana.value = {
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

</style>