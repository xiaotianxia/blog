<template>
	<div class="resize-wrapper">
		<p v-if="errorMsg != ''" class="txt-red"><i class="el-icon-info"></i>{{errorMsg}}，请更新chrome浏览器查看。</p>
		<div v-else class="wrapper">
			<div class="btns">
				<button @click="onChangeSize">change</button>
			</div>	
			<div class="box js-box"></div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			errorMsg: ''
		}
	},

	methods: {
		onChangeSize () {

		}
	},

	mounted () {
		if(!('ResizeObserver' in window)) {
  			this.errorMsg = '您的浏览器不支持 ResizeObserver API';
  			return;
		}

		this.$box = document.querySelector('.js-box');
	}
}
</script>

<style scoped>
	ul,
	li {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.resize-wrapper {
		border: 1px solid #ccc;
		margin: 20px;
		padding: 20px;
	}
	.resize-wrapper .waraper {
		
	}
</style>