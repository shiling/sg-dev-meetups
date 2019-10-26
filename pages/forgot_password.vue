<template>
  <div class="container">
    <div>

      <h1 class="mega">
        Reset password
      </h1>

      <hr>
      <div class="text-left">

        <b-form id="reset-password-form" @submit="onSubmit" @reset="onReset">

          <b-form-group
            id="reset-password-form__email-group"
            label="Email"
            label-for="reset-password-form__email-input"
            description="We'll send password reset link to your email."
          >
            <b-form-input
              id="reset-password-form__email-input"
              v-model="form.email"
              type="email"
              placeholder="Enter email"
              required
            ></b-form-input>
          </b-form-group>
          <b-button variant="primary">Reset password</b-button>
        </b-form>
      </div>

      <hr>
      <div class="text-left">
        <small><router-link :to="'/login'">Back to login</router-link></small>
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
