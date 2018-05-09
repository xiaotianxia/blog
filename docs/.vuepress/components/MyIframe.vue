<template>
	<div class="iframe-wrapper">
		<iframe :src="src" frameborder="0"></iframe>
	</div>
</template>

<script>
export default {
	data () {
		return {

		}
	},

	props: [
		'src'
	]
}
</script>

<style>
	.iframe-wrapper {
		height: 400px;
		border: 1px solid rgba(0, 0, 0, .3)
	}
	iframe {
		width: 100%;
		height: 100%;
	}
</style>