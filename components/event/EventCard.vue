<template>
	<router-link :to="eventDetailsLink" class="card event-card">
		<div class="event-card__header mb-2">
			<div class="event-card__name">
				{{event.name}}
			</div>
			<div class="event-card__date">
				3 Oct, 7PM
			</div>
		</div>
		<div class="mb-2">
			<span><small><fa icon="map-marker-alt"/> Where: {{event.venue}}</small></span>
		</div>
		<p>
			{{event.description}}
		</p>
		<div class="event-card__footer">
			<div class="text-muted">
				<fa :icon="['fa','users']" /> 100 attending
			</div>
			<div class="actions">
				<b-button variant="primary" v-if="showRsvp">RSVP</b-button>
			</div>
		</div>
	</router-link>
</template>
<script>
export default {
	props: {
		event: {
			type: Object,
			required: true
		},
		showRsvp: {
			type: Boolean,
			default: true
		}
	},
	computed: {
		eventDetailsLink(){
			return `/event/${this.event.id}`
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
			
			background: salmon;
			color: white;
			padding: .25rem 1rem;
			border-radius: 0px;

			font-size: 1rem;
			font-weight: bold;	

		}
	}

	.event-card__footer{

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

	}

</style>