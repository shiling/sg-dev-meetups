<template>
  <div class="container">
    <div>
      <!-- <logo /> -->
      <h1 class="mega text-left">
        Login
      </h1>

      <hr>

      <div class="text-left">
        <b-form id="login-form" @submit="onSubmit" @reset="onReset">

          <b-form-group
            id="login-form__email-group"
            label="Email"
            label-for="login-form__email-input"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="login-form__email-input"
              v-model="form.email"
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
              v-model="form.password"
              type="password"
              required
            ></b-form-input>
            <router-link :to="'/forgot_password'"><small>Forget your password?</small></router-link>
          </b-form-group>

          <b-button variant="primary">Login</b-button>
        </b-form>

      </div>

      <hr>

      <div class="text-left">
        <small>Not yet registered? <router-link :to="'/register'">Create an account</router-link></small>
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
  data: function(){
    return {
      form: {
        email: "",
        password: "",
        rememberMe: false
      }
    }
  },
  methods: {
    onSubmit(){},
    onReset(){
    },
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
</style>
