<template>
	<div class="videoCutout-wrapper">
		<video ref="video" id="video" :src="videoUrl" controls="true"></video>
		<canvas ref="canvas" id="canvas" width="300" height="150" :style="{backgroundImage: 'url(' + imgUrl + ')', backgroundSize: '100%'}"></canvas>
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
		this.video = this.$refs['video'];
        this.canvas = this.$refs['canvas'];
        this.ctx = this.canvas.getContext('2d');

        this.video.addEventListener("play", () => {
            this.width = this.video.videoWidth / 2;
            this.height = this.video.videoHeight / 2;
            this.ctx.drawImage(this.video, 0, 0, this.width, this.height);
        }, false);
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