<template>
	<div class="event-list">
		<component
			:is="eventCardComponent"
			v-for="event in events"
			:key="event.id"
			:event="event"
			class="mb-3"
		>
		</component>
	</div>	
</template>
<script>

import EventCard from "./EventCard"
import EventCardCondensed from "./EventCardCondensed"

export default {
	components: {
		EventCard,
		EventCardCondensed
	},
	props: {
		events: {
			type: Array,
			required: true
		},
		condensed: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		eventCardComponent(){
			if(this.condensed){
				return "event-card-condensed"
			}
			return "event-card"
		}
	}
}
</script>
