<template>
	<div class="codepen-wrapper">
		<a :href="href" target="_blank" class="el-button el-button--primary is-plain">show in codepen <i class="el-icon-d-arrow-right"></i></a>
	</div>
</template>

<script>
export default {
	data () {
		return {}
	},

	props: [
		'href'
	]
}
</script>