<template>
	<router-link to="#" class="card event-card">
		<div class="event-card__header mb-2">
			<div class="event-card__name">
				{{event.name}}
			</div>
			<div class="event-card__date">
				3 Oct, 7PM
			</div>
		</div>
		<div class="mb-2">
			<fa icon="map-marker-alt"/> Where: {{event.venue}}
		</div>
		<p class="mb-0 text-muted">
			{{event.description}}
		</p>
	</router-link>
</template>
<script>
export default {
	props: {
		event: {
			type: Object,
			required: true
		}
	}
}
</script>
<style lang="scss" scoped>

	.event-card__header{

		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: space-between;

		.event-card__name {
			font-size: 1.2rem;
			line-height: 2rem;
			font-weight: bold;
		}

		.event-card__date{
			
			background: #651fff;
			color: white;
			padding: .25rem 1rem;
			border-radius: 0px;

			font-size: 1rem;
			font-weight: bold;	

		}
	}

</style>