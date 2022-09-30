<template>
  <div class="component">
<div>
 <h5>Create Post</h5>
<div class="card text-start mb-3 d-flex elevation-5">
  <div class="d-flex ps-4 pt-2">
        <img class="card-img-top rounded" src="https://thiscatdoesnotexist.com/" alt="Title">
      </div>
        <div class="card-body">
      <form @submit="handleSubmit">
  <div class="form-group">
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">Example text area</textarea>
  </div>
</form>
        </div>
        <div class="card-footer d-flex justify-content-between"> 
          <form>
          <div>Img Url</div>
          <input type="text" name="url">
          </form>
          <button type="submit" class="btn btn-dark text-success fs-10">Post</button>

        </div>
      </div>
</div>

  </div>
</template>


<script>
export default {

  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>