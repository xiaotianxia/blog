<template>
	<div class="videoCutout-wrapper">
		<video id="video" :src="videoUrl" controls="true" autoplay></video>
		<canvas id="canvas" width="300" height="300" :style="{backgroundImage: 'url(' + imgUrl + ')', backgroundSize: '100%'}"></canvas>
	</div>
</template>

<script>
import videoUrl from './component/video.ogv';
import imgUrl from './component/sample.jpg';
export default {
	data () {
		return {
			videoUrl: videoUrl,
			imgUrl: imgUrl
		}
	},

	methods: {
		
	},

	mounted () {
		
	}
}
</script>

<style scoped>
	.videoCutout-wrapper {
		margin: 20px 0;
		padding: 10px;
		text-align: center;
		border: 1px solid #74b9ff;
	}
	#canvas {
		
	}
</style>