<template>
  <div class="component">
<div class="card text-start mb-3 d-flex elevation-5">

        <div class="d-flex ps-4 pt-4 justify-content-between topbar">
<div class="d-flex"><div class="pic">
        <User :creator="post.creator"/>
      </div>
        <h5 class="p-2"><strong>{{post.creator.name}}</strong></h5>
        <div> 
          
          <span v-if="post.creator.graduated">
          <i class="mdi mdi-account-school-outline fs-5" title="Graduate"></i> 
        </span>
        </div>
</div>
        <i @click="deletePost(post.id)" v-if="account.id == post.creatorId" class="btn btn-lg mdi mdi-auto-fix mx-2" alt="delete" title="delete"></i>

      </div>
        <div class="card-body">
            <div class="d-flex justify-content-center">
              <span v-if="post.imgUrl">
            <img class="img" :src="post.imgUrl" alt="Title">
            </span> </div><div class="pt-3 mx-4">
          <p class="card-text p-2 button"><strong>{{post.body}}</strong></p></div>
        </div>
        
        <div class="card-footer d-flex justify-content-between"><span class="hello pt-2">{{post.createdAt}}</span>
          <span>{{post.likes.length}}
            <button class="btn selectable" :disabled="!user.isAuthenticated">
            <i class="mdi mdi-heart fs-4" @click="likePost()" title="Like Post"></i>
            </button>
          </span></div>
      </div>

  </div>
</template>


<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState.js";
import { Account } from "../models/Account.js";
import { Post } from "../models/Post.js";
import { postsService } from "../services/PostsService.js";
import Pop from "../utils/Pop.js";

export default {
  props: {
    post: {
      type: Post, required: true},
      // account: {type: Account, required: true}
  },

  setup(props){
    return {
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      posts: computed(()=> AppState.posts),
    
      async deletePost(id) {
        try {
          const confirm = await Pop.confirm("Send this post to the nether?");
          if (!confirm) {
            return;
          }
          await postsService.deletePost(id)
          document.documentElement.scrollTop = 0
        } catch (error) {
          console.error('[DeletePost]',error)
          Pop.error(error)
        }
      },

      async likePost() {
        try {
            await postsService.likePost(props.post.id)
          } catch (error) {
            console.error('[LikePost]',error)
            Pop.error(error)
          }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.hello{
  font-size: small
}

// .topbar{
//   overflow:auto
// }
.dlt{
height:60px;
width:60px
}
.card-img-top{
height: 50px;
width: 50px
}

.img{
  max-height: 500px;
  max-width: 550px;
}

.card{
// background-color: rgba(29, 6, 88, 0.756);
color: rgb(46, 20, 217);
  background-image: url(https://img1.picmix.com/output/stamp/normal/7/6/2/6/1566267_a5eb4.gif);
  //  background-attachment: fixed;
  

  .card-text{
    background-color: rgba(240, 248, 255, 0.845);
  }

}

</style>