<template>
  <div class="container-center">
      <div class="text-left">
      	<h1 class="mega text-left">Join This Group</h1>
      	<p>Become a member of this group</p>

      	<div class="card text-left">
      		<b-form>
      			<b-form-group
		            id="join-form"
		            label="Question"
		            description="We'll never share your email with anyone else."
          		>
      				
      				<b-form-input type="" name=""></b-form-input>
      			</b-form-group>

      			<button class='btn btn-primary'>Join</button>

      		</b-form>

      	</div>
      	<div class="mt-2">&nbsp;</div>
      	<a :href="'/group/' + $route.params.slug ">Take Me Back</a>


      </div>
      
  </div>
</template>

<script>


export default {


  components: {

  }
}
</script>

<style lang="scss" scoped>

</style>
