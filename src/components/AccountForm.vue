<template>
 <form class="card account-form" @submit.prevent="handleSubmit">
    <div class="card-body text-start">
      <div>
        <label for="name">Name:</label>
        <input type="text" class="form-control" v-model="kiwi.name" required name="name">
      </div>
      <div>
        <label for="picture">Picture:</label>
        <input type="url" class="form-control" v-model="kiwi.picture" required name="picture" placeholder="picture">
      </div>
      <div>
        <label for="coverImg">Cover Image:</label>
        <input type="url" class="form-control" v-model="kiwi.coverImg" required name="coverImg">
      </div>
      <div>
        <label for="coverImg">GitHub:</label>
        <input type="url" class="form-control" v-model="kiwi.github" name="Github">
      </div>
      <div>
        <label for="coverImg">LinkedIn:</label>
        <input type="url" class="form-control" v-model="kiwi.linkedin" name="linkedin">
      </div>
<div>
        <label for="coverImg">Resume:</label>
        <input type="url" class="form-control" v-model="kiwi.resume" name="resume">
      </div>
      <div><label class="form-check-label" for="flexCheckDefault">
                  Graduated:
                </label>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                  v-model="kiwi.graduated">
                
              </div>
      <div>
        <label for="bio">Bio:</label>
        <textarea type="text" class="form-control" v-model="kiwi.bio" name="bio" rows="8"
          style="resize:none"></textarea>
      </div>
      <div>
        <button type="submit" class="btn btn-primary w-100 mt-2">Save</button>
      </div>
    </div>
  </form>
</template>


<script>
import { ref, watchEffect } from 'vue';
import { AppState } from '../AppState.js';
import { accountService } from '../services/AccountService.js';
import Pop from '../utils/Pop.js';

export default {
  setup() {

    const kiwi = ref({})

    watchEffect(() => {
      kiwi.value = { ...AppState.account }
    })

    return {
      kiwi,
      async handleSubmit() {
        try {
          await accountService.editAccount(kiwi.value)
        } catch (error) {
          Pop.error(error, '[EditAccount]')
        }

      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>