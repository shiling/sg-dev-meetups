<template>
  <div class="container mt-4">
    <div class="row" style='background-color: #fff'>
        
      <div class="col-md-6 p-1"  >
          <img :src='group.mainImg' class='rounded img-fluid'
          style='width:100%;max-height:350px'> 
      </div>
      <div class="col-md-6">
         <h1>
          GROUP "{{$route.params.id}}" PAGE
          </h1>
          <h6 class='mt-4 text-muted'>
            Platform for SG software developers to meetup
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          </h6>

          <div class="details mt-4 ml-4">
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

          <div class="mt-5" style='font-size:25px'>
                Share: <fa :icon="['fab','facebook-square']" /> 
                        <fa :icon="['fab','twitter-square']" /> 
                        <fa :icon="['fab','linkedin']" /> 
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
        <router-link :to="'/group/'+ $route.params.id + '/join'" class='btn btn-outline-primary' style='width:150px'> 
            <fa :icon="['fa','user-plus']"/> Join Group
        </router-link>
        <button class="btn btn-secondary"> You are a member</button>
      </div>
    </div>

    <hr class='my-4'>
    
    <div class="row mt-4">
      <div class="col-md-6">
        <h3>Events (10)</h3>

          <div v-for='n in 2' class="card mb-4">
            <div class="card-body">
             <h6>12 Nov 19, 14:00</h6>
             <h4>Vue.js Meeting</h4>
             <div class="text-muted">
              Lorem Ipsum 300 {{ n }}
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
              <h3>Organizers (5)</h3>
              <div class="">
                <img src="https://image.flaticon.com/icons/svg/145/145842.svg" class='profile'>
                <b>Aaron</b>
              </div>
            </div>
            <div class="mt-5">
              <h3><fa :icon="['fa','users']" /> Members (200)</h3>
              <br>
              <div class="row mt-2">
                <div v-for="n in 16" class="col-sm">
                  <img src="https://image.flaticon.com/icons/svg/147/147144.svg" class='profile mb-4'>
                  
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
      group: {
        "mainImg" : "https://picsum.photos/400/300"
      }
    }
  },

  methods: {

  }
}
</script>

<style>
  .profile {
    height: 50px;
  }
  .details div {
    margin-bottom: 5px
  }
  .details svg {
    display:inline-block;
    width: 30px;
  }

</style>
