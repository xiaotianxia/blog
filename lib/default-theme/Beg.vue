<template>
	<div class="beg-wrapper">
		<a :class="{show: !showShang, hide: showShang}" class="btn" href="javascript:;" @click="onClick"><img src="http://p8rbt50i2.bkt.clouddn.com/blogshang_log.png"></a>
		<p class="shang-txt">赏不赏，看您心情</p>
		<img :class="{shangShowed: showShang}" class="shangImg" src="http://p8rbt50i2.bkt.clouddn.com/blogWechatIMG35.jpeg">
	</div>
</template>

<script>
export default {
	name: 'beg',

	data() {
		return {
			showShang: false
		}
	},

	methods: {
		onClick () {
			this.showShang = true;
		}
	},

	mounted () {
		this.$watch('$page.path', () => {
			this.showShang = false;
		})
	}
}	
</script>

<style scoped>  
	.beg-wrapper {
		text-align: center;
	}
	.beg-wrapper a.btn {
		display: inline-block;
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}
	.beg-wrapper a.btn img {
		width: 100%;
		height: 100%;
	}
	.shang-txt {
		font-size: 12px;
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