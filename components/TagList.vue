<template>
	<div>
		<router-link 
			v-for="tag in tags"
			:key="tag"
			:to="'/search?tags=' + tag"
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
		}
	}
}
</script>