<template>
	<div class="event-list">
		<event-card
			v-for="event in events"
			:key="event.id"
			:event="event"
			class="mb-3"
		>
		</event-card>
	</div>	
</template>
<script>

import EventCard from "./EventCard"

export default {
	components: {
		EventCard
	},
	props: {
		events: {
			type: Array,
			required: true
		}
	}
}
</script>
