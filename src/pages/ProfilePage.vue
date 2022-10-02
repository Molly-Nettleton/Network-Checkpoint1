<template>
  <div class="component" v-if="profile">
<ProfileDetail :profile="profile" />
  </div>
  <div class="" v-for="p in posts" :key="p">
        <PostCard :post="p" :account="p.creator"/></div>
</template>


<script>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { AppState } from "../AppState.js";
import ProfileDetail from "../components/ProfileDetail.vue";
import { postsService } from "../services/PostsService.js";
import { profilesService } from "../services/ProfilesService.js";
import Pop from "../utils/Pop.js";
import PostCard from "../components/PostCard.vue";

export default {
  
  setup() {
    
    const route = useRoute();

      async function getProfileById() {
      try {
        await profilesService.getProfileById(route.params.id)
        document.documentElement.scrollTop = 0
      } catch (error) {
        Pop.error(error)
      }
    }

    async function getPostsByCreatorId() {
      try {
          await postsService.getPostsByCreatorId(route.params.id)
        } catch (error) {
          console.error('[GetPostsByCreatorId]',error)
          Pop.error(error)
        } 
    }


    onMounted(() => {
      getProfileById()
      getPostsByCreatorId()
    })
      return {
        profile: computed(() => AppState.activeProfile),
        posts: computed(() => AppState.posts)
        
        };
    },
    components: { ProfileDetail, PostCard }
}
</script>


<style lang="scss" scoped>

</style>