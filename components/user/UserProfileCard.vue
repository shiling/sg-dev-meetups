<template>
	<div class="card user-profile-card text-center">
		<div class="user-profile-card__image cropped rounded-circle mx-auto mb-3" :style="style.profileImage"></div>
		<h1 class="user-profile-card__name">{{user.name}}</h1>
		<div class="mb-3">
			<fa icon="link"/> <a class="user-profile-card__website" :href="user.website">{{user.website}}</a>
		</div>
		<p>{{user.bio}}</p>
		<div class="user-profile-card__social-list mb-3">
			<a href="#" class="user-profile-card__social-link"><fa :icon="['fab', 'github']"/></a>
			<a href="#" class="user-profile-card__social-link"><fa :icon="['fab', 'twitter']"/></a>
			<a href="#" class="user-profile-card__social-link"><fa :icon="['fab', 'linkedin']"/></a>
		</div>
		<b-button variant="outline-primary"><fa icon="pencil-alt"/> Edit profile</b-button>
	</div>
	
</template>
<script>
export default {
	props: {
		user: {
			type: Object,
			required: true
		},
		allowEdit: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		style(){
			return {
				profileImage: {
					'background-image' : `url(${this.user.profileImgUrl})`
				}
			}
		}
	}
}
</script>
<style lang="scss" scoped>

	.user-profile-card {

		display: flex;
		flex-direction: column;

		.user-profile-card__image {
			height: 120px;
			width: 120px;
		}

		.user-profile-card__name{
			font-weight: bold;
			font-size: 2rem;
		}
		
		.user-profile-card__social-link{
			margin: 0 .5rem;
			font-size: 1.5rem;
			color: #424242;
			&:hover {
				color: black;
			}
		}
		
  }
</style>