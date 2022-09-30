<template>
</template>

<script>
import { computed } from "@vue/reactivity"
import { onMounted } from "vue"
import { AppState } from "../AppState.js"
import { postsService } from "../services/PostsService.js"
import { ladsService } from "../services/LadsService.js"
import Pop from "../utils/Pop.js"


export default {
  setup() {

    async function getPosts() {
      try {
        await postsService.getPosts()
      } catch (error) {
        console.error(error)
        Pop.error(error)
      } 
    }


    
    onMounted(() => {
      getPosts()
    } )
    return {
      // accessing data
      posts: computed(() => AppState.posts),
      
    }
  }
}
</script>

<style scoped lang="scss">
</style>
