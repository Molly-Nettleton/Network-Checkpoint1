<template>
  <div class="component" v-if="profile">
<ProfileDetail :profile="profile" />
  </div>
</template>


<script>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { AppState } from "../AppState.js";
import ProfileDetail from "../components/ProfileDetail.vue";
import { profilesService } from "../services/ProfilesService.js";
import Pop from "../utils/Pop.js";
export default {
  
  setup() {

    const route = useRoute();

      async function getProfileById() {
      try {
        await profilesService.getProfileById(route.params.id)
      } catch (error) {
        Pop.error(error)
      }
    }


    onMounted(() => {
      getProfileById()
    })
      return {
    profile: computed(()=> AppState.activeProfile)
        };
    },
    components: { ProfileDetail }
}
</script>


<style lang="scss" scoped>

</style>