<template>
	<div class="videoCutout-wrapper">
		<video ref="video" id="video" :src="videoUrl" controls="true" muted></video>
		<canvas ref="canvas" id="canvas" width="320" height="192" :style="{backgroundImage: 'url(' + imgUrl + ')', backgroundSize: '100%'}"></canvas>
	</div>
</template>

<script>
import videoUrl from './component/video.ogv';
import imgUrl from './component/sample.jpg';

const TOLERANCE = 10;
export default {
	data () {
		return {
			videoUrl: videoUrl,
			imgUrl: imgUrl
		}
	},

	methods: {
		draw () {
			if (this.video.paused || this.video.ended) {
	          	return;
	        }
			this.ctx.drawImage(this.video, 0, 0, this.width, this.height);
			this.ctx.putImageData(this.compute(), 0, 0);
		},

		compute () {
			let frameData = this.ctx.getImageData(0, 0, this.width, this.height),
				len = frameData.data.length / 4;

	        for (let i = 0; i < len; i++) {
	          	let r = frameData.data[i * 4 + 0],
	          		g = frameData.data[i * 4 + 1],
	          		b = frameData.data[i * 4 + 2];
	          	if (Math.abs(r - 100) <=10 && Math.abs(g - 100) <=10 && Math.abs(b - 43) <=10) {
		            frameData.data[i * 4 + 3] = 0;
	          	}
	        }
	        return frameData;
		}
	},

	mounted () {
		this.video = this.$refs['video'];
        this.canvas = this.$refs['canvas'];
        this.ctx = this.canvas.getContext('2d');
        this.timer = null;

        this.video.addEventListener('play', () => {
            this.width = this.video.videoWidth;
            this.height = this.video.videoHeight;

            this.timer && clearInterval(this.timer);
            this.timer = setInterval(() => {
            	this.draw();
            }, 50);
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