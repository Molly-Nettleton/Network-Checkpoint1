<template>
  <div class="cover-img text-shadow" :style="{backgroundImage: `url(${profile.coverImg})`}">
    <img :src="profile.picture" alt="" height="200"  class="rounded profilepic">
    <div class="my-3 mx-3">
<h1>{{profile.name}} </h1>  
      <div class="bio pb-2">
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
    border: 3rem;
    border-radius: 30%;
  
  }

  .profilepic{
    border-radius: 30%;
  }
  .bio{
    padding: 1rem;
    overflow: hidden;
  }
</style>