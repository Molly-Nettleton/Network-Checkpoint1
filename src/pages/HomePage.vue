<template>
<div class="col-md-12">
    <CreatePost />

    <div class="" v-for="p in posts">
        <PostCard :post="p"/></div>
        </div>
</template>

<script>
import { computed } from "@vue/reactivity"
import { onMounted } from "vue"
import { AppState } from "../AppState.js"
import { postsService } from "../services/PostsService.js"
import Pop from "../utils/Pop.js"
import PostCard from "../components/PostCard.vue"


export default {
    setup() {
        async function getPosts() {
            try {
                await postsService.getPosts();
            }
            catch (error) {
                console.error(error);
                Pop.error(error);
            }
        }
        onMounted(() => {
            getPosts();
        });
        return {
            // accessing data
            posts: computed(() => AppState.posts),
        };
    },
    components: { PostCard }
}
</script>

<style scoped lang="scss">
</style>
