<template>
  <!-- text-center -->
    <div class="container" style="padding-top:10px">
          <div>
            <h1>Create an event</h1>
            <div class="text-muted">{{$route.params.slug}} Meetup Group</div>
          </div>
          <hr>
          
          <div class="border rounded p-3 mb-3 text-left bg-blue">
            <b-form id="login-form">
    
              <b-form-group
                id="login-form__email-group"
                label="Title (Required)"
                label-for="login-form__email-input"
              >
                <b-form-input
                  id="login-form__email-input"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="login-form__email-group"
                label="Date and Time"
                label-for="login-form__email-input"
              >

                <div class="row">
                  <div class="col">
                    <input type="text" class="form-control" placeholder="Date">
                  </div>
                  <div class="col">
                    <input type="text" class="form-control" placeholder="Time">
                  </div>
                </div>
              </b-form-group>

              <b-form-group
                id="login-form__email-group"
                label="Duration"
                label-for="login-form__email-input">
                  <b-form-select v-model="selected" class="mb-3">
                    <option value="1">1 hour</option>
                    <option value="1.5">1.5 hour</option>
                    <option value="2">2 hour</option>
                    <option value="-1" v-on:click="durationSwitchEndTime()">Others</option>
                  </b-form-select>
                    <div class="row" style="display:none;" id="endtime">
                        <div class="col">
                          <input type="text" class="form-control" placeholder="Date">
                        </div>
                        <div class="col">
                          <input type="text" class="form-control" placeholder="Time">
                        </div>
                    </div>
              </b-form-group>

              

              <b-form-group
                id="login-form__email-group"
                label="Featured Photo"
                label-for="login-form__email-input">
                <b-form-file accept="image/*"></b-form-file>
              </b-form-group>


              <b-form-group
                id="login-form__email-group"
                label="Description"
                label-for="login-form__email-input"
              >

                <b-form-textarea
                  id="textarea"
                  v-model="text"
                  placeholder="Enter something..."
                  rows="3"
                  max-rows="6">
                </b-form-textarea>

                <pre class="mt-3 mb-0">{{ text }}</pre>

              </b-form-group> 

              <b-form-group
                id="login-form__email-group"
                label="Location"
                label-for="login-form__email-input"
              >
              <b-input-group prepend="📍" class="mb-2 mr-sm-2 mb-sm-0">
                  <b-input id="inline-form-input-username" placeholder=""></b-input>
                </b-input-group>
              </b-form-group> 
              
              
              <div v-if="typeof locations !== 'undefined'" style="padding-top:10px;padding-bottom:10px;">
                <p class="text-muted">Recent Places</p>
                <div class="row flex-nowrap" style="overflow-x:scroll;overflow-y:hidden">
                  <b-col md="3" v-for="item in locations">
                    <div class="card" style="margin-bottom: 10px">
                      <div>
                        <p>{{ item.location }}</p>
                      </div>
                      <div class="text-muted">{{ item.address }}</div>
                      <div class="text-center" style="padding-top:5px;">
                        <button>Select</button>
                      </div>
                    </div>
                  </b-col>
                </div>
              </div>
              

              <b-form-group
                id="login-form__email-group"
                label="Featured Photo"
                label-for="login-form__email-input">
                <b-form-file accept="image/*"></b-form-file>
              </b-form-group>

              <b-form-group
                id="login-form__email-group"
                label="Hosts"
                label-for="login-form__email-input">

                

                

                <div  style="padding-bottom:10px;" v-for="item in hosts">
                  <div class="card">
                    <div class="row">
                      <b-col md="2">
                          <div data-v-dd9bed06="" class="user-avatar cropped rounded-circle" style="background-image: url(&quot;https://picsum.photos/id/237/200&quot;);"></div>
                      </b-col>
                      <b-col md="10">
                          <div>
                            <h3>
                              Lionel Leo
                            </h3>
                            <p>
                              Co-Organiser
                            </p>
                          </div>
                      </b-col>

                    </div>
                  </div>
                </div>

                <b-form-input
                  id="login-form__email-input"
                  type="text"
                  required>
                </b-form-input>

              </b-form-group>

              <b-button variant="primary">Submit</b-button>
            </b-form>
    
          </div>
    
    
      </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import UserAvatar from "~/components/user/UserAvatar.vue"

export default {
  components: {
    Logo
  },
  methods: {
    durationSwitchEndTime: function () {
      document.getElementById("durationDropDown").style.display = "none"
      document.getElementById("endtime").style.display = "flex"
    }
  },
  data: {
    hosts: [
      {location: 'asd', address: '123'},
      {location: 'asd', address: '123'},
      {location: 'asd', address: '123'},
      {location: 'asd', address: '123'},
      {location: 'asd', address: '123'},
      {location: 'asd', address: '123'},
      {location: 'asd', address: '123'},
      {location: 'asd', address: '123'},
      {location: 'asd', address: '123'},
      {location: 'asd', address: '123'}
    ],
    locations: [
      {location: 'asd', address: '123'},
      {location: 'asd', address: '123'},
      {location: 'asd', address: '123'},
      {location: 'asd', address: '123'},
      {location: 'asd', address: '123'},
      {location: 'asd', address: '123'},
      {location: 'asd', address: '123'},
      {location: 'asd', address: '123'},
      {location: 'asd', address: '123'},
      {location: 'asd', address: '123'}
    ]
  }
}
</script>
