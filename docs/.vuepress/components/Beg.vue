<template>
	<div class="beg-wrapper">
		<a :class="{show: !showShang, hide: showShang}" class="btn" href="javascript:;" @click="onClick"><img src="http://p8rbt50i2.bkt.clouddn.com/blogshang_log.png"></a>
		<img :class="{shangShowed: showShang}" class="shangImg" src="http://p8rbt50i2.bkt.clouddn.com/blogshang1.jpg">
	</div>
</template>

<script>
export default {
	data() {
		return {
			showShang: false
		}
	},

	methods: {
		onClick () {
			this.showShang = true;
		}
	}
}	
</script>

<style>
	.beg-wrapper {
		text-align: center;
	}
	.beg-wrapper a.btn {
		display: inline-block;
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}
	.beg-wrapper a.btn img {
		width: 100%;
		height: 100%;
	}
	.shangImg {
		width: 0;
		transition: width ease .5s;
	}
	.shangShowed {
		width: 400px;
	}
	.show {
		display: inline-block!important;
	}
	.hide {
		display: none!important;
	}
</style>