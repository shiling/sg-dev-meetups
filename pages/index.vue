<template>
  <div id="home-page" class="app-page container">
    <div class="row">
      <div class="col-2">
        <h5><b>Topics</b></h5>
        <div>...</div>
        <h5><b>CFPs</b></h5>
        <div>...</div>
      </div>
      <div class="col-6">
        <!-- EVENT LISTING -->
        <div class="event-listing">

          <h1 class="mega mb-3"><i class=""></i> Meetups <small>in Singapore</small></h1>
          
          <!-- Date range selection -->
          <div class="mb-3">
            <a href="#" class="event-date-range-selection active">Upcoming</a>
            <a href="#" class="event-date-range-selection">This Week</a>
          </div>

          <!---->
          <div>
            <div class="card">
              ...
            </div>
          </div>

        </div>
      </div>
      <div class="col-4">
          <h2 class="mega mb-3">Your events</h2>
          <!-- Date range selection -->
          <div class="mb-3">
            <a href="#" class="event-date-range-selection active">All</a>
            <a href="#" class="event-date-range-selection">Today</a>
          </div>
          <div>
            <div class="card">
              ...
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
  }
}
</script>

<style lang="scss" scoped>

  a.event-date-range-selection {
  
    margin-right: 1rem;

    font-size: 1.5rem;
    
    color: #424242;
    &:hover{
      color: #3d5afe;
      text-decoration: none;
    }

    &.active {
      color: #3d5afe;
      font-weight: bold;
      text-decoration: underline;
    }

  }

</style>
