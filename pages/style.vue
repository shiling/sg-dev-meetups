<template>
  <div class="container text-center">


    <div id="typography" class="mb-3">
      <h1>Typography</h1>
      <hr>
      <div>
        <h1 class="mega">H1 MEGA</h1>
        <h1>H1</h1>
        <h2>H2</h2>
        <h3>H3</h3>
        <h4>H4</h4>
        <h5>H5</h5>
        <h6>H6</h6>
        <div>Body text</div>
        <div class="text-muted">Muted text</div>
        <a href="#">Link text</a>
      </div>
    </div>

    <div id="font-awesome" class="mb-3">
      <h1>FontAwesome</h1>
      <hr>
      <div>
        <fa icon="cog"/>
        <pre><code>&lt;fa icon="cog"/&gt;</code></pre>
      </div>
    </div>

    <div id="buttons">
      <h1>Buttons</h1>
      <hr>
      <div class="mb-3">
        <p>Pick an action:</p>
        <b-button variant="light">Cancel</b-button>
        <b-button variant="outline-primary">Secondary action</b-button>
        <b-button variant="primary">Primary action</b-button>
      </div>
      <div>
        <p>Context buttons:</p>
        <b-button variant="warning">Reschedule</b-button>
        <b-button variant="danger">Delete</b-button>
      </div>
    </div>

    <div id="form">
      <h1>Form</h1>
      <hr>
      
      <div class="border rounded p-3 mb-3 text-left bg-blue">
        <b-form id="login-form">

          <b-form-group
            id="login-form__email-group"
            label="Email"
            label-for="login-form__email-input"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="login-form__email-input"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="login-form__password-group"
            label="Password"
            label-for="login-form__password-input"
          >
            <b-form-input
              id="login-form__password-input"
              class="mb-1"
              type="password"
              required
            ></b-form-input>
            <router-link :to="'/forgot_password'"><small>Forget your password?</small></router-link>
          </b-form-group>

          <b-button variant="primary">Login</b-button>
        </b-form>

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

<style>

</style>
