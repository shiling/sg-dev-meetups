<template>
  <div class="container mt-2">
    <b-alert show variant='success' dismissible>Default Alert</b-alert>
     <div class="row" style='background-color: #fff'>
        
      <div class="col-md-6 p-1">
          <img :src='event.mainImg' class='rounded img-fluid'
          style='width:100%;max-height:350px'> 
      </div>
     <div class="col-md-6">
 
     <div class="card mb-4">
        <div class="card-body">
          <div class="row">
            <div class="col-md-2">
              <fa :icon="['far','clock']" class='fa-2x'/>
            </div>
            <div class="col-md-10">
              <h5>
                14:00, 24 Nov 2019
              </h5>
              <span class='small'>in <b>2</b> days <b>18</b> hours</span>
            </div>
          </div>          
          <div class="row mt-4">
            <div class="col-md-2">
              <fa :icon="['fa','map-marker-alt']" class='fa-2x'/>
            </div>
            <div class="col-md-10">
              <h5>
                20 Guilmade Road
                <br>
                Singapore 445555
              </h5>
            </div>
          </div>
        </div>
      </div>


        <h3> This is the Event Title {{$route.params.id}}</h3>

        <h6 class='mt-4 text-muted'>
          Platform for SG software developers to meetup
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        </h6>


 
    
      <div class="mt-5" style='font-size:25px'>
                Share: <fa :icon="['fab','facebook-square']" /> 
                        <fa :icon="['fab','twitter-square']" /> 
                        <fa :icon="['fab','linkedin']" /> 
          </div>
      </div>

      </div>
  
  <hr>
  <div class="row my-2">
    <div class="col-md-6">
      
    </div>
    <div class="col-md-6">
       <button class='btn btn-outline-primary'>
          <fa :icon="['far','thumbs-up']" />
       RSVP For This Event</button>

       <button class='btn btn-secondary'> Already RSVP </button>

    </div>
  </div>
  <hr>

  <div class="row">
    <div class="col-md-6">
      <h3>Attending (10)</h3>

      <div class="row rsvp mt-4">
        <div class="col-md-2">
          <img src="https://image.flaticon.com/icons/svg/145/145842.svg" class='avatar-small mx-4'>  
        </div>
        <div class="col-md-4">
          <b> Member Name </b>
          <div class="text-muted">
            I like Vue.js  
          </div>
        </div>
        <div class="col-md-2">
          <img src="https://image.flaticon.com/icons/svg/145/145842.svg" class='avatar-small mx-4'>  
        </div>

        <div class="col-md-4">
          <b> Member Name </b>
          <div class="text-muted">
            I like Vue.js  
          </div>
        </div>

        
      </div>
    </div>
    <div class="col-md-6">
        <h3> Posts (20)</h3>

        <div class="mt-4">
          <div class="card">
            <div class="card-body">
              <div class="">How about this as a post?</div>
              <p class='small'>By Steven</p>
               <hr> 
            </div>
          </div>

        </div>


    </div>
  </div>


  </div>
</template>

<script>


export default {
  data() {
    return {
      event : {
        mainImg : "https://picsum.photos/400/300"
      }
    }
  },

  components: {
  }
}
</script>

<style scoped>
.rsvp {
  height:50px;
}



</style>
