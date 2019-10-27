<template>
	<router-link :to="'/group/' + group.id" class="card meetup-group-summary-card" :aria-label="group.name">
		<div class="meetup-group-summary-card__image" :style="style.groupImage"></div>
		<div class="meetup-group-summary-card__description">
			<div class="meetup-group-summary-card__name">{{group.name}}</div>
			<div>{{group.tags}}</div>
		</div>
	</router-link>
</template>
<script>
export default {
	props: {
		group: {
			type: Object,
			required: true
		},
		
	},
	computed: {
		style(){
			return {
				groupImage: {
					"background-image": `url(${this.group.bannerImgUrl})`
					
				}
			}	
		}
	}
};
</script>
<style lang="scss" scoped>
	.meetup-group-summary-card {

		&.card {
		padding: 0; // remove default padding
		}

		.meetup-group-summary-card__image {
			background-color: #e0e0e0;
			/* background-image to be dynamically set by component */
			background-position: center center;
			background-size: auto;
			background-repeat: no-repeat;
			width: 250px;
			height: 150px;
			// crop excess
		}

		.meetup-group-summary-card__description{
			padding: 1rem;
		}
		
		.meetup-group-summary-card__name{
			font-size: 1.25rem;
			font-weight: bold;
		}
  }

</style>