<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        HOME PAGE
      </h1>
      <h2 class="subtitle">
        Platform for SG software developers to meetup
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>

        Main Paths 
        <div class="row text-left">
          <ul class='path'>
            <li><a href="/user">User</a></li>
            <li><a href="/login">Login</a></li>

            <li><a href="/group">Group</a></li>
            <li><a href="/group/1">Group id</a></li>

            <li><a href="/event">Event</a></li>
          </ul>
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

<style>

</style>
