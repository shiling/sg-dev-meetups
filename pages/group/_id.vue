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

          <div class="details mt-4 ml-2">
            <div>
              <fa :icon="['fas', 'map-marker-alt']"/> Singapore, Singapore
            </div>
            <div class="">
              <fa :icon="['fa','users']"/> 1000 members - Public Group 
            </div>     
            <div class="">
              <fa :icon="['fa','user-cog']"/> Organizers Lionel chardy
            </div>  

          </div>

          
             
      </div>
    </div>

    <hr class='my-4'>
    <div class="row my-2">
      <div class="col-md-6">
        <div class="list-group list-group-horizontal" id="myList" role="tablist">
          <a class="list-group-item list-group-item-action" data-toggle="list" href="#home" role="tab">Events</a>
          <a class="list-group-item list-group-item-action" data-toggle="list" href="#profile" role="tab">Chats</a>
        </div>
      </div>
      <div class="col-md-6">
        <button class='btn btn-primary'> Join </button>
        
      </div>
    </div>
    
    <div class="row mt-4">
      
        <div class="col-md-6">
              
            <h2>Events (10)</h2>

            <div class="card mt-2">
              <div class="card-body">
                 <h6>12 Nov 19</h6>
                 <h4>Vue.js Meeting</h4>
                 <div class="text-muted">
                      Lorem Ipsum 300
                 </div>
                 <div class="row">
                     <div class="col-md-6">
                      
                        <fa :icon="['fa','users']" /> 48 Attendees
                        

                     </div>
                     <div class="col-md-6">
                        <fa :icon="['fa','map-marker-alt']" /> 99 HackerSpace, Lavender
                                               
                     </div>
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
  .details div {
    margin-bottom: 5px
  }
  .details svg {
    display:inline-block;
    width: 30px;
  }

</style>
