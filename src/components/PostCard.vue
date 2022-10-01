<template>
  <div class="component">
<div class="card text-start mb-3 d-flex elevation-5">
        <div class="d-flex ps-4 pt-4">

        <User :creator="post.creator"/>
        <p class="p-2">{{post.creator.name}}</p>
        
        <div> 
          
          <span v-if="post.creator.graduated">
          <i class="mdi mdi-account-school-outline fs-5"></i> 
        </span>
        </div>
      </div>
        <div class="card-body">
            <div class="d-flex justify-content-center">
              <span v-if="post.imgUrl">
            <img class="img-fluid  rounded" :src="post.imgUrl" alt="Title">
            </span> </div>
          <p class="card-text pt-3">{{post.body}}</p>
        </div>
        <div class="card-footer d-flex justify-content-between"><span class="hello pt-2">{{post.createdAt}}</span><span>{{post.likes.length}}<i class="mdi mdi-heart fs-4"></i></span></div>
      </div>

  </div>
</template>


<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState.js";
import { Account } from "../models/Account.js";
import { Post } from "../models/Post.js";

export default {
  props: {
    post: {
      type: Post, required: true},
      // account: {type: Account, required: true}
  },

  setup(){
    return {
    user: computed(() => AppState.account),
    }
  }
}
</script>


<style lang="scss" scoped>
.hello{
  font-size: small
}

.card-img-top{
height: 50px;
width: 50px
}
</style>