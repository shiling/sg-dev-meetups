<template>
  <div class="container">
    <div class="row">
        
      <div class="col-md-6">
          <img src='https://images.unsplash.com/photo-1469135762633-c299d101636a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80' 
          class='rounded img-fluid'
          style='width:100%;max-height:350px'> 
      </div>
      <div class="col-md-6">
         <h1>
          GROUP "{{$route.params.id}}" PAGE
          </h1>
          <h5 class='mt-4'>
            Platform for SG software developers to meetup
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          </h5> 
          <div class="mt-4">
            <i class="fa fa-clock"></i>dd
          </div>     
          <div class="">
            <i class="fa fa-address-book" aria-hidden="true"></i>
          </div>     
          <div class="">
            <i class="fa fa-address-book" aria-hidden="true"></i>
          </div>     
      </div>
    </div>

    <div class="py-3">
      <hr>  
    </div>
    
    <div class="row mt-4">
      
        <div class="col-md-6">
              
            <h2>Events</h2>

            <div class="card">
              <div class="card-body">
                 <h6>12 Nov 19</h6>
                 <h4>Vue.js Meeting</h4>
                 <div class="">
                       <i class='fa'> HackerSpace</i>
                 </div>
                 <div class="row">
                     <div class="col-md-6">
                       48 Attendees
                     </div>
                     <div class="col-md-6">
                       <button class='btn btn-primary'>
                         Join
                       </button>
                     </div>
                 </div>
                 <div class="text-muted">
                      Lorem Ipsum 300
                 </div>
              </div>
            </div>

        </div>

        <div class="col-md-6">
            
            <div class="">
              <h2>Organizers</h2>
              <div class="">
                <img src="https://image.flaticon.com/icons/svg/145/145842.svg" class='profile'>
                <b>Aaron</b>
              </div>
            </div>
            <div class="mt-5">
              <h2>Members</h2>
              <div class="row">
                <div v-for="n in 16" class="col-sm">
                  <img src="https://image.flaticon.com/icons/svg/147/147144.svg" class='profile'>
                  {{ n }}
                </div>

              </div>
              
            </div>

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
  },

  methods: {

  }
}
</script>

<style>
  .profile {
    height: 60px;
  }
</style>
