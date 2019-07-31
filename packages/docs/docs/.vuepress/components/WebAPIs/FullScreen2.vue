<template>
	<div class="fullscreen-wrapper2">
		<div class="fullscreen-content">
			<p>是否可全屏：<strong>{{fullscreenEnabled}}</strong></p>
			<p>全屏模式：<strong>{{fullscreen}}</strong></p>
			<p>fullscreenElement：<strong>{{fullscreenElement}}</strong></p>
			<div class="block" @click="onTriggerClick"></div>
		</div>
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

	computed: {
		fullscreenEnabled () {
			return fscreen.fullscreenEnabled;
		},

		fullscreenElement () {
			return JSON.stringify(fscreen.fullscreenElement)
		}
	},

	methods: {
		onTriggerClick (e) {
			if(this.fullscreen) {
				this.onExitFullsreen();
			} else {
				this.requestFullscreen(document.querySelector('.fullscreen-content'));
			}
			this.fullscreen = !this.fullscreen;
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
	},

	mounted () {
		fscreen.addEventListener('fullscreenchange', e => {
			this.$message.info(this.fullscreen ? '进入全屏' : '退出全屏');
			console.log(e);
		});

		fscreen.addEventListener('fullscreenerror', e => {
			this.$message.info('全屏切换出错');
			console.log(e);
		});
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
	.fullscreen-content {
		width: 400px;
		margin: 10px auto;
		text-align: center;
	}
	.fullscreen-content:fullscreen .block {
		background-color: #ff7675;
	}
	.fullscreen-content:fullscreen .block:before {
		content: '全屏模式(点击退出)';
	}
	.fullscreen-content::backdrop {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: green;
	}
</style>