<template>
  <div class="container text-center">


    <div id="typography" class="mb-3">
      <h1>Typography</h1>
      <hr>
      <div>
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
