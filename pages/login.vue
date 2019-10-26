<template>
  <div class="app-page container">
    <div>
      
      <h1 class="mega text-left">
        Login
      </h1>

      <div class="text-left">
        <small>Not yet registered? <router-link :to="'/register'">Create an account</router-link></small>
      </div>

      <div class="card text-left my-3">
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

          <b-button variant="primary"><fa icon="arrow-right"/> Login</b-button>
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

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
