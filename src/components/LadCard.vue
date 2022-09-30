<template>
  <div class="LadCard">
  <img class="img-fluid pb-3 " :src="lad.tall" alt="lad">
  </div>
</template>


<script>
import { Lad } from "../models/Lad.js";


export default {
  props: {
  lad: { type: Lad, required: true}
},

  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>