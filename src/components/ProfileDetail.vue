<template>
  <div class="cover-img" :style="{backgroundImage: `url(${profile.coverImg})`}">
    <img :src="profile.picture" alt="profilepic" height="200"  class="profilepic m-3">
    <div class=" mx-3 d-flex justify-content-center">
    <div class="text-shadow">
        <a v-if="profile.github" :href="profile.github" target="_blank">
          <i class="mdi mdi-crystal-ball selectable fs-3 text-light"></i>
        Github</a> </div>
        <div class=" text-shadow">
                <a v-if="profile.linkedin" :href="profile.linkedin" target="_blank">
          <i class="mdi mdi-crystal-ball selectable fs-3 text-light"></i>
        LinkedIn</a> </div>
        <div class="mb-2 text-shadow">
        <a v-if="profile.resume" :href="profile.resume" target="_blank">
          <i class="mdi mdi-crystal-ball selectable fs-3 text-light"></i>
        Resume</a> </div>
</div>
<div class="pt-2 fs-9 text-shadow"> <span v-if="profile.graduated">
          <i class="mdi mdi-wizard-hat fs-5" label="Graduate"> Fall 2022</i> 
        </span></div>
<h1 class="text-shadow">{{profile.name}} </h1>  
      <div class="bio pb-2 m-5 p-2">
  {{profile.bio}}
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