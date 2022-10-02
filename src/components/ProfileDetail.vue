<template>
  <div class="cover-img  mb-4" :style="{backgroundImage: `url(${profile.coverImg})`}">
    <img :src="profile.picture" alt="profilepic" height="200"  class="profilepic m-3">
    <div class="my-3 mx-3">
<h1 class="text-shadow">{{profile.name}} </h1>  
      <div class="bio pb-2 m-5 p-2">
  {{profile.bio}}
    </div>
  </div>
  </div>
</template>


<script>
import { Account } from '../models/Account.js';

export default {
  props: {
    profile: {
      type: Account,
      required: true
    }
  },
  setup(props) {
    return {}
  }
}
</script>


<style lang="scss" scoped>
  .cover-img{
    height: auto;
    padding: 3rem;
    // background-attachment: fixed;
    background-position: center;
    background-size: cover;
    border: white 5px solid;
    border-radius: 50%;
  
  }

  .profilepic{
    border-radius: 50%;
    border: solid rgb(255, 255, 255)
    
  }
  .bio{
    overflow: hidden;
    color: rgb(46, 20, 217);
    background-color: rgba(240, 238, 242, 0.76);
  }
</style>