<template>
	<div class="container mt-4">
		
		<div class="row">
			<div class="col-md-8">
				<h1 class='mega mb-4'>Popular in Singapore ({{groups.length}})</h1>
				<ul class="list-group list-group-horizontal">
					<li class="list-group-item">First item</li>
					<li class="list-group-item">Second item</li>
					<li class="list-group-item">Third item</li>
					<li class="list-group-item">Fourth item</li>
				</ul> 
			</div>
			<div class="col-md-4 pt-4 text-right">
				<router-link :to="'group/create'" class='btn btn-outline-primary'>
					<fa :icon="['fa','users']"/> Create Your Own Group
				</router-link>
			</div>
		</div>
	
		<div class="row mt-4">
		
            <group-summary-card
              v-for="group in groups"
              :key="group.id"
              :group="group"
              class="mr-3 mb-3"
            >{{group.bannerImgUrl}} </group-summary-card>
			
		</div>

	</div>

</template>

<script>
	import GroupSummaryCard from "~/components/group/GroupSummaryCard"
	export default {

		data() {
	        return {
	        	groups: [
		          {
		            id: "talk-css",
		            name: "TalkCSS",
		            bannerImgUrl: "https://picsum.photos/400/200",
		            tags: ["#css", "#webdev"]
		          },
		          {
		            id: "js-conf-asia",
		            name: "JsConfAsia",
		            bannerImgUrl: "https://picsum.photos/600/400",
		            tags: ["#javascript"]
		          }
    			]
    		}
		},

		components: {
				GroupSummaryCard
		}
	}
</script>

<style>

</style>
