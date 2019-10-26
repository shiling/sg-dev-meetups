<template>
  <div id="app">
    <!-- navigation -->
    <app-navigation/>
    <!-- page -->
    <nuxt/>
    <app-footer/>
  </div>
</template>
<script>

import AppNavigation from "~/components/AppNavigation"
import AppFooter from "~/components/AppFooter"

export default {
  components: {
    AppNavigation,
    AppFooter
  }
}

</script>
<style>

/* Default styles from Nuxt */

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

#app {
  position: relative;
  padding-bottom: 100px; /* leave some room for the footer */
}

/* Additional styles */


</style>