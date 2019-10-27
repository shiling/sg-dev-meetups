<template>
  <div class="app-page container">
    <div>
      <!-- <logo /> -->
      <h1 class="mega text-left">
        Create an account
      </h1>

      <div class="text-left">
        Already registered? <router-link :to="'/login'">Login</router-link>
      </div>

      <div class="card text-left my-3">
        <b-form id="registration-form" @submit="onSubmit" @reset="onReset">

          <div class="row">
            <div class="col-6">
              <b-form-group
                id="registration-form__firstname-group"
                label="First name"
                label-for="registration-form__firstname-input"
              >
                <b-form-input
                  id="registration-form__firstname-input"
                  v-model="form.firstName"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-6">
            <b-form-group
                id="registration-form__lastname-group"
                label="Last name"
                label-for="registration-form__lastname-input"
              >
                <b-form-input
                  id="registration-form__lastname-input"
                  v-model="form.lastName"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>
            </div>
          </div>

          <b-form-group
            id="registration-form__email-group"
            label="Email"
            label-for="registration-form__email-input"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="registration-form__email-input"
              v-model="form.email"
              type="email"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="registration-form__password-group"
            label="Password"
            label-for="registration-form__password-input"
          >
            <b-form-input
              id="registration-form__password-input"
              class="mb-1"
              v-model="form.password"
              type="password"
              required
            ></b-form-input>
          </b-form-group>

          <b-button variant="primary"><fa icon="arrow-right"/> Create account</b-button>
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
        firstName: "",
        lastName: "",
        email: "",
        password: "",
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
