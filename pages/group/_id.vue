<template>
  <div class="container">
    <div class="row">
        
      <div class="col-md-8">
          <img src='https://images.unsplash.com/photo-1469135762633-c299d101636a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80' style='width:100%'> 
      </div>
      <div class="col-md-4">
         <h2>
          GROUP "{{$route.params.id}}" PAGE
          </h2>
          <h5>
            Platform for SG software developers to meetup
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          </h5>      
      </div>
    </div>
  </div>
  
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
      'img':'someimg'
    }
  }
}
</script>

<style>

</style>
