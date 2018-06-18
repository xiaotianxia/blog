<template>
	<div class="fullscreen-wrapper1">
		<div class="block div" @click="onTriggerClick">div</div>
		<span class="block span" @click="onTriggerClick">span</span>
		<p class="block p" @click="onTriggerClick">p</p>
		<h1 class="block h1" @click="onTriggerClick">h1</h1>
		<a class="block a" @click="onTriggerClick">a</a>
		<i class="block i" @click="onTriggerClick">i</i>
	</div>
</template>

<script>

export default {
	methods: {
		onTriggerClick (e) {
			this.requestFullscreen(e.target);
		},

		requestFullscreen (ele) {
			let dom = document.documentElement;
			if(dom.requestFullscreen){
				return ele.requestFullScreen();
			} else if(dom.webkitRequestFullScreen){
				return ele.webkitRequestFullScreen();
			} else if(dom.mozRequestFullScreen){
				return ele.mozRequestFullScreen();
			} else if(dom.msRequestFullscreen) {
				return ele.msRequestFullscreen();
			} else {
				alert('浏览器不支持全屏API');
			}
		}
	}
}
</script>

<style scoped>
	.fullscreen-wrapper1 {
		margin: 20px 0;
		border: 1px solid #ccc;
	}
	.block {
		display: block;
		height: 50px;
		margin: 10px;
		cursor: pointer;
		border-radius: 5px;
		text-align: center;
		line-height: 50px;
		font-size: 18px;
		color: #fff;
	}
/*	.block:-webkit-full-screen {
		width: 50%;
	}
	.block:-moz-full-screen {
		width: 50%;
	}*/
	.block.div {
		background-color: #2d3436;
	}
	.block.span {
		background-color: #ff7675;
	}
	.block.p {
		background-color: #55efc4;
	}
	.block.h1 {
		background-color: #ffeaa7;
	}
	.block.a {
		background-color: #e17055;
	}
	.block.i {
		background-color: #0984e3;
	}
</style>