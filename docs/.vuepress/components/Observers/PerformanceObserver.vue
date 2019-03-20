<template>
	<div class="performance-wrapper">
		<p v-if="errorMsg != ''" class="txt-red"><i class="el-icon-info"></i>{{errorMsg}}，请更新chrome浏览器查看。</p>
		<div v-else class="wrapper">
			
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			errorMsg: '',
		}
	},

	methods: {
		
	},

	mounted () {
		if(!('PerformanceObserver' in window)) {
  			this.errorMsg = '您的浏览器不支持 PerformanceObserver API';
  			return;
		}
	}
}
</script>

<style scoped>
	.performance-wrapper {
		border: 1px solid #ccc;
		margin: 20px;
		padding: 20px;
		text-align: center;
	}
</style>