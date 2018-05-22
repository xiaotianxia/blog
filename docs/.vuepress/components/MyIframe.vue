<template>
	<div class="iframe-wrapper">
		<iframe :src="fullSrc" frameborder="0"></iframe>
	</div>
</template>

<script>
export default {
	data () {
		return {
			fullSrc: this.src + (this.src.indexOf('?') > -1 ? '&' : '?') + '_=' + new Date().getTime()
		}
	},

	props: [
		'src'
	]
}
</script>

<style scoped>
	.iframe-wrapper {
		height: 400px;
		border: 1px solid rgba(0, 0, 0, .3);
	}
	.iframe-wrapper iframe {
		width: 100%;
		height: 100%;
	}
</style>