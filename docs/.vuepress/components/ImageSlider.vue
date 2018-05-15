<template>
	<div>
		<el-carousel :interval="4000" type="card" height="400px">
		    <el-carousel-item v-for="(item, key) in srcData" :key="key">
		      	<img :src="item">
		    </el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
export default {
	data () {
		return {}
	},

	props: [
		'srcData'
	]
}
</script>

<style>

</style>