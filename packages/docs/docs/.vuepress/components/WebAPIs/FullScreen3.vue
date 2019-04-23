<template>
	<div class="fullscreen-wrapper3">
		<a href="javascript:;" @click="onTriggerClick" >http://www.bank.com</a>
		<div class="fullscreen-cheat">我是骗人的页面</div>
	</div>
</template>

<script>
import fscreen from './fscreen.js';

export default {
	data () {
		return {
			fullscreen: false
		}
	},

	methods: {
		onTriggerClick (e) {
			if(this.fullscreen) {
				this.onExitFullsreen();
			} else {
				this.requestFullscreen(document.querySelector('.fullscreen-cheat'));
			}
		},

		requestFullscreen (ele) {
			if(fscreen.requestFullscreen) {
				return fscreen.requestFullscreen(ele);
			} else {
				alert('浏览器不支持全屏API');
			}
		},

		onExitFullsreen () {
			if(fscreen.exitFullscreen) {
				return fscreen.exitFullscreen();
			} else {
				alert('浏览器不支持全屏API');
			}
		}
	}
}
</script>

<style scoped>
	.fullscreen-wrapper3 {
		margin: 20px 0;
		border: 1px solid #ccc;
		text-align: center;
	}
	.fullscreen-cheat {
		display: none;
		font-size: 18px;
		padding: 10%;
		color: #fff;
	}
	.fullscreen-cheat:fullscreen {
		display: block;
		width: 100%;
		height: 100%;
		background-color: red;
	}
</style>