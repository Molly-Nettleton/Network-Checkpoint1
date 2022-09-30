<template>
  <div class="about text-center">
    <div class="bio elevation-5">
    <ProfileDetail :profile="account" />
</div>
    <div class="container">
      <div class="row my-3">
        <div class="col-6 m-auto">
          <AccountForm class="elevation-2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped>
  .bio{
    overflow:auto
  }
</style>
