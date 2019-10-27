<template>
	<div class="container">
		<h1>Popular in Singapore</h1>
		<ul class="list-group list-group-horizontal">
			<li class="list-group-item">First item</li>
			<li class="list-group-item">Second item</li>
			<li class="list-group-item">Third item</li>
			<li class="list-group-item">Fourth item</li>
		</ul> 		
	
		<div class="row mt-4">
			
			<div v-for='n in 9' class="col-md-3 ">	

			<div class="card-simple card">
				<img class='card-img-top' src="https://images.unsplash.com/photo-1469135762633-c299d101636a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80" style='max-height: 150px'/>
				<div class="card-body">
					<h5>Group Title {{ n }}</h5>
					<p class='text-muted'>
						<fa :icon="['fa','users']"/> 1000 Members</p>
				</div>	
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
