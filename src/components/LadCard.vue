<template>
  <div class="LadCard">
  <img class="img-fluid elevation-5" :src="lad.tall" alt="lad">
  </div>
  <br>
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