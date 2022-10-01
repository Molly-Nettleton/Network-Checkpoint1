<template>
  <div class="cover-img text-shadow" >
    <img src="" alt="" height="200"  class="rounded">
    <div class="my-5">
      <h3 class="">{{}}
{{profile.name}}

      </h3>
      <div class="bio rounded pb-2">
  
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
  }

  .bio{
    padding: 1rem;
  background-color: rgba(39, 4, 95, 0.703);
  }
</style>