<template>
  <div id="home-page" class="app-page container">
    <div class="row">
      <div class="col-2">
        <h5><b>Topics</b></h5>
        <div>...</div>
        <h5><b>CFPs</b></h5>
        <div>...</div>

        <ul>

          <li>
              <router-link :to="'/user'">User</router-link>
          </li>
          <li>
              <router-link :to="'/group'">Group Index</router-link>
          </li>

          <li>    
              <router-link :to="'/event/1'">Event</router-link>
           </li>
        </ul>

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
          <event-list :events="events"></event-list>

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
import EventList from "~/components/event/EventList.vue"

export default {
  data: function(){
    return {
      events: [
        {
          id: "12345678",
          name: "Talk.CSS #11",
          description: "Curabitur a sagittis augue, eget accumsan diam. Vestibulum porttitor luctus sapien, eu dignissim quam sodales at. Pellentesque lacinia nunc ut porttitor elementum.",
          venue: "Hackerspace",
          date: (new Date().getTime() / 1000) // epoch seconds
        },
        {
          id: "83929123",
          name: "Vue.JS #11",
          description: "Nulla diam orci, interdum eget congue sed, lacinia quis lacus. Sed sagittis in arcu eget porta.",
          venue: "Hackerspace",
          date: (new Date().getTime() / 1000) // epoch seconds
        }
      ]
    }
  },
  components: {
    EventList
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
