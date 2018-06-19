<template>
	<div class="fullscreen-wrapper2">
		<div class="block" @click="onTriggerClick"></div>
		
	</div>
</template>

<script>

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
				this.requestFullscreen(e.target);
			}
			this.fullscreen = !this.fullscreen;
		},

		requestFullscreen (ele) {
			if(ele.requestFullscreen){
				return ele.requestFullscreen();
			} else if(ele.webkitRequestFullScreen){
				return ele.webkitRequestFullScreen();
			} else if(ele.mozRequestFullScreen){
				return ele.mozRequestFullScreen();
			} else if(ele.msRequestFullscreen) {
				return ele.msRequestFullscreen();
			} else {
				alert('浏览器不支持全屏API');
			}
		},

		onExitFullsreen () {
			if(document.exitFullscreen){
				return document.exitFullscreen();
			} else if(document.webkitExitFullscreen){
				return document.webkitExitFullscreen();
			} else if(document.mozCancelFullScreen){
				return document.mozCancelFullScreen();
			} else if(document.msExitFullscreen) {
				return document.msExitFullscreen();
			} else {
				alert('浏览器不支持全屏API');
			}
		}
	}
}
</script>

<style scoped>
	.fullscreen-wrapper2 {
		margin: 20px 0;
		border: 1px solid #ccc;
	}
	.block {
		display: block;
		height: 50px;
		width: 200px;
		margin: 10px auto;
		cursor: pointer;
		border-radius: 5px;
		text-align: center;
		line-height: 50px;
		font-size: 18px;
		color: #fff;
		background-color: #2d3436;
	}
	.block:before {
		content: '正常模式';
		color: #fff;
	}
	.block:fullscreen {
		background-color: #ff7675;
	}
	.block:fullscreen:before {
		content: '全屏模式(点击退出)';
	}
	.block::backdrop {
		position: fixed;
	    top: 0;
	    left: 0;
	    right: 0;
	    bottom: 0;
	    background: red;
	}
</style>