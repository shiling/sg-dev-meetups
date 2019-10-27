<template>
	<router-link :to="eventDetailsLink" class="card event-card">
		<div class="event-card__name">
			{{event.name}}
		</div>
		<div class="event-card__date">
			<small><fa :icon="['far', 'clock']"/> {{eventDateTimeFormatted}}</small>
		</div>
		<div class="event-card__venue">
			<small><fa icon="map-marker-alt"/> Where: {{event.venue}}</small>
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
		},
		eventDateTimeFormatted(){
			let date = new Date(this.event.date * 1000)
			return date.toLocaleDateString(undefined, {
				weekday: "short",
				day: "2-digit",
				month: "short",
				hour12: true,
				hour: "numeric",
				minute: "2-digit"
			})
		}
	}
}
</script>
<style lang="scss" scoped>

	.event-card__name {
		font-size: 1.2rem;
		line-height: 2rem;
		font-weight: bold;
	}

</style>