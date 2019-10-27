<template>
	<div id="home-page" class="app-page container">

    <!-- SEARCH BOX -->
		<div class="mb-5">
			<b-form-input id="search-box" v-model="search" placeholder="🔍 Search Meetups"></b-form-input>
		</div>

		<div class="row">
			<div class="col-3">
				<!-- TOPICS-->
				<section class="mb-5">
					<h5 class="mb-3">
						<fa icon="cube" />
						<b>Topics</b>
					</h5>
					<tag-list :tags="topics" direction="vertical"></tag-list>
				</section>

				<!-- CPFs-->
				<section class="mb-5">
					<h5 class="mb-3">
						<fa icon="bullhorn" />
						<b>Speaking Opportunities</b>
					</h5>
					<div>
						<div class="card mb-3">...</div>
						<div class="card mb-3">...</div>
					</div>
				</section>

				<li>
					<router-link :to="'/user'">User</router-link>
				</li>
				<li>
					<router-link :to="'/group'">Group Index</router-link>
				</li>

				<li>
					<router-link :to="'/event/1'">Event</router-link>
				</li>
			</div>

			<div class="col-9">
				<div class="row">
					<div class="col-8">
						<!-- DISCOVER EVENTS -->
						<section id="discover-events">
							<h1 class="mega mb-3">
								<i class></i> Meetups
								<small>in Singapore</small>
							</h1>

							<!-- Date range selection -->
							<div class="mb-3">
								<a href="#" class="event-date-range-selection active">Upcoming</a>
								<a href="#" class="event-date-range-selection">This Week</a>
							</div>

							<!-- EVENTS -->
							<event-list :events="events"></event-list>
						</section>
					</div>
					<div class="col-4">
						<!-- MY EVENTS -->
						<section id="my-events" class="mb-5">
							<h2 class="mega mb-3">Your events</h2>
							<!-- Date range selection -->
							<div class="mb-3">
								<a href="#" class="event-date-range-selection active">All</a>
								<a href="#" class="event-date-range-selection">Today</a>
							</div>
							<!---->
							<event-list :events="rsvps" :condensed="true"></event-list>
						</section>

            <hr class="mb-5">

						<!-- VISITING SINGAPORE? -->
						<section class="mb-5">
							<h5 class="mb-3">
								<b>🇸🇬 Visiting Singapore?</b>
							</h5>
							<p class="text-muted">
								First time visiting Singapore? Read the
								<a href="https://github.com/rubysg/singapore" target="_blank">handy guide</a> to visiting Singapore by friends from
								<fa :icon="['fab', 'github']" />
								<a href="https://github.com/rubysg">@rubysg</a>.
							</p>
						</section>

						<!-- CODE OF CONDUCT -->
						<section id="code-of-conduct" class="mb-5">
							<h5 class="mb-3">
								<b>Code of conduct</b>
							</h5>
							<p
								class="text-muted"
							>Morbi at tortor at sem tempus faucibus. Donec sodales aliquam vulputate. Integer scelerisque mauris eu interdum gravida. Quisque hendrerit facilisis est vel egestas. Fusce malesuada, mauris vel pulvinar bibendum, leo ante consectetur risus, sit amet tincidunt lectus leo porttitor sapien. Nunc aliquet consectetur leo, sit amet elementum sapien venenatis ut. Phasellus in risus orci.</p>
						</section>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import EventList from "~/components/event/EventList.vue";
import TagList from "~/components/TagList.vue";

export default {
	components: {
		EventList,
		TagList
	},
	data: function() {
		return {
			search: "",
			topics: [
				"#webdev",
				"#javascript",
				"#css",
				"#ai",
				"#machinelearning",
				"#datascience"
			],
			events: [
				{
					id: "12345678",
					name: "Talk.CSS #11",
					description:
						"Curabitur a sagittis augue, eget accumsan diam. Vestibulum porttitor luctus sapien, eu dignissim quam sodales at. Pellentesque lacinia nunc ut porttitor elementum.",
          venue: "Hackerspace",
          bannerImgUrl: "https://picsum.photos/400/200",
					date: new Date().getTime() / 1000 // epoch seconds
				},
				{
					id: "83929123",
					name: "Vue.JS #11",
					description:
						"Nulla diam orci, interdum eget congue sed, lacinia quis lacus. Sed sagittis in arcu eget porta.",
          venue: "Hackerspace",
          bannerImgUrl: "https://picsum.photos/600/200",
					date: new Date().getTime() / 1000 // epoch seconds
				},
				{
					id: "83929123",
					name: "☕ Kopijs Aug 2019",
					description:
						"Nulla diam orci, interdum eget congue sed, lacinia quis lacus. Sed sagittis in arcu eget porta.",
          venue: "Hackerspace",
          bannerImgUrl: "https://picsum.photos/500/200",
					date: new Date().getTime() / 1000 // epoch seconds
				},
				{
					id: "83929123",
					name: "ReactJS #20",
					description:
						"Nulla diam orci, interdum eget congue sed, lacinia quis lacus. Sed sagittis in arcu eget porta.",
          venue: "Hackerspace",
          bannerImgUrl: "https://picsum.photos/450/200",
					date: new Date().getTime() / 1000 // epoch seconds
				},
				{
					id: "83929123",
					name: "Taqelah #17",
					description:
						"Nulla diam orci, interdum eget congue sed, lacinia quis lacus. Sed sagittis in arcu eget porta.",
          venue: "Hackerspace",
          bannerImgUrl: "https://picsum.photos/550/200",
					date: new Date().getTime() / 1000 // epoch seconds
				}
			],
			rsvps: [
				{
					id: "12345678",
					name: "SG Dev Meetup Hackathon",
					venue: "Hackerspace",
					date: new Date().getTime() / 1000 // epoch seconds
				}
			]
		};
	}
};
</script>

<style lang="scss" scoped>
	// .app-page {
	// 	padding-left: 2rem;
	// 	padding-right: 2rem;
	// }

	a.event-date-range-selection {
		margin-right: 1rem;

		font-size: 1.5rem;

		color: #424242;
		&:hover {
			color: #3d5afe;
			text-decoration: none;
		}

		&.active {
			color: #3d5afe;
			font-weight: bold;
			text-decoration: underline;
		}
	}

	#search-box {
		border-color: black;
		border-width: 3px;
		font-size: 1.5rem;
		max-width: 500px;
		margin: 0 auto;
	}
</style>
