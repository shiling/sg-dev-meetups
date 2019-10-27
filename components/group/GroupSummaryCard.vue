<template>
	<router-link :to="'/group/' + group.id" class="card meetup-group-summary-card" :aria-label="group.name">
		<div class="meetup-group-summary-card__image cropped" :style="style.groupImage"></div>
		<div class="meetup-group-summary-card__description">
			<div class="meetup-group-summary-card__name">{{group.name}}</div>
			<tag-list :tags="group.tags"></tag-list>
		</div>
	</router-link>
</template>
<script>

import TagList from "~/components/TagList"

export default {
	components: {
		TagList
	},
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