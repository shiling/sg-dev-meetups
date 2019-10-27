<template>
	<router-link :to="eventDetailsLink" class="card event-card">
		<div class="event-card-cover cropped" :style="style.eventBannerImage"></div>
		<div class="event-card-body">
			<div class="event-card__header mb-2">
				<div class="event-card__name">{{event.name}}</div>
				<div class="event-card__date">
					<fa :icon="['far', 'clock']" />
					{{eventDateTimeFormatted}}
				</div>
			</div>
			<div class="mb-2">
				<span>
					<small>
						<fa icon="map-marker-alt" />
						Where: {{event.venue}}
					</small>
				</span>
			</div>
			<p>{{event.description}}</p>
			<div class="event-card__footer">
				<div class="text-muted">
					<fa :icon="['fa','users']" />100 attending
				</div>
				<div class="actions">
					<b-button variant="primary" v-if="showRsvp">
						<fa :icon="['far','thumbs-up']" />RSVP
					</b-button>
				</div>
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
		eventDetailsLink() {
			return `/event/${this.event.id}`;
		},
		eventDateTimeFormatted() {
			let date = new Date(this.event.date * 1000);
			return date.toLocaleDateString(undefined, {
				weekday: "short",
				day: "2-digit",
				month: "short",
				hour12: true,
				hour: "numeric",
				minute: "2-digit"
			});
		},
		style() {
			return {
				eventBannerImage: {
					"background-image": `url(${this.event.bannerImgUrl})`
				}
			};
		}
	}
};
</script>
<style lang="scss" scoped>
	.event-card {

		&.card {
			padding: 0; // override default padding
		}

		.event-card-cover {
			height: 200px;
			width: auto;
		}

		.event-card-body {

			padding: 1rem;

			.event-card__header {
				display: flex;
				flex-direction: row;
				align-items: flex-start;
				justify-content: space-between;

				.event-card__name {
					font-size: 1.2rem;
					line-height: 2rem;
					font-weight: bold;
				}

				.event-card__date {
					background: salmon;
					color: white;
					padding: 0.25rem 1rem;
					border-radius: 0px;

					font-size: 1rem;
					font-weight: bold;
				}
			}

			.event-card__footer {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
			}
		}
	}
</style>