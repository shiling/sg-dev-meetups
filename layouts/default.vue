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
</style>