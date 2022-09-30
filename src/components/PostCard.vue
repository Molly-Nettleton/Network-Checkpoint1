<template>
  <div class="component">
    
<div class="card text-start mb-3 d-flex ">
        <div class="d-flex ps-4 pt-4">
        <img class="card-img-top rounded" src="https://thiscatdoesnotexist.com/" alt="Title"><p class="p-2">Name</p><div> <i class="mdi mdi-account-school-outline fs-5"></i> </div>
      </div>
        <div class="card-body">
          <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed nemo modi quas velit esse placeat optio ea asperiores, aliquid vero ratione perferendis odio facilis et repudiandae sit laboriosam dignissimos officiis.</p>
        </div>
        <div class="card-footer d-flex justify-content-between"><span class="hello pt-2">posted @</span><i class="mdi mdi-heart fs-4"></i></div>
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
.hello{
  font-size: small
}

.card-img-top{
height: 50px;
width: 50px
}
</style>