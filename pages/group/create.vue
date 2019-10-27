<template>
  <div class="container-center">
      <div class="text-left">
        <h1 class="mega text-left">Create A New Group</h1>
        <p></p>

        <div class="card text-left">
          <b-form>
            
            <b-form-group label='location'>
              <b-dropdown text='dropdown'> </b-dropdown>
            </b-form-group>

            <b-form-group
                        id="create-form"
                        label="Tags"
                        description="Topics that your group might cover"
            >
            <b-form-input name="" placeholder='Tags'></b-form-input>
            </b-form-group>


            <b-form-group
                        id="create-form"
                        label="Group Name"
                        description=""
            >
            <b-form-input type="" name="" placeholder='Group Name'></b-form-input>
            </b-form-group>

            <b-form-group
                        id="create-form"
                        label="Description"
                        description=""
            >
            <div class="text-muted small">
              <ol>
                <li>What is the purpose?</li>
                <li>Why should you join?</li>
                <li>What will your events be like?</li>
              </ol>
              
            </div>
            <b-form-textarea name="" placeholder='Description'></b-form-textarea>
            </b-form-group>

            <button class='btn btn-outline-primary mt-4'>
              <fa :icon="['fa','users']"/>
            Create A New Group</button>

          </b-form>

        </div>
        <div class="mt-2">&nbsp;</div>
        <a :href="'/group'">Take Me Back</a>


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

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
