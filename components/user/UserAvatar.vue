<template>
	<div 
		class="user-avatar cropped rounded-circle" 
		:class="cssClass" 
		:style="style.profileImage"
	></div>
</template>
<style lang="scss" scoped>

	.user-avatar {

		display: inline-block;
		height: 7.5rem;
		width: 7.5rem;

		&.small {
			height: 3rem;
			width: 3rem;
		}

		&.mini {
			height: 1.5rem;
			width: 1.5rem;
			line-height: 1.5rem;
		}
	}

</style>
<script>
export default {
	props: {
		size: {
			type: String,
			default: ""
		},
		profileImage: {
			type: String,
			default: ""
		}
	},
	computed: {
		cssClass(){
			return [this.size]
		},
		style(){
			return {
				profileImage: {
					'background-image' : `url(${this.profileImage})`
				}
			}
		},
	}
}
</script>