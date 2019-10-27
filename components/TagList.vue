<template>
	<div class="tag-list">
		<router-link 
			v-for="tag in tags"
			:key="tag"
			:to="'/search?tags=' + tag"
			class="tag"
			:class="cssClass"
		>
			{{tag}}
		</router-link>
	</div>
</template>
<script>
export default {
	props: {
		tags: {
			type: Array,
			required: true
		},
		baseUrlPath: {
			type: String
		},
		size: {
			type: String,
			default: ""
		},
		direction: {
			type: String,
			default: "horizontal"
		}
	},
	computed: {
		cssClass(){
			return [this.size, this.direction]
		}
	}
}
</script>
<style lang="scss" scoped>
	.tag {

		margin-right: 1rem;

		&.horizontal {
			display: inline-block;
		}

		&.vertical {
			display: block;
		}

		font-size: 1rem;
		&.small {
			font-size: .9rem;
		}
		&.large {
			font-size: 1.25rem;
		}

	}
</style>