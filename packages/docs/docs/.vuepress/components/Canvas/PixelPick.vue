<template>
	<div class="pixelPick-wrapper">
		<p ref="color" id="color"></p>
		<canvas ref="canvas" id="canvas" width="500" height="400"></canvas>
	</div>
</template>

<script>
import imgUrl from './component/sample.jpg';

export default {
	data () {
		return {
			canvas: null,
			ctx: null,
			color: null
		}
	},

	methods: {
		pick (e, ctx) {
			let x = e.layerX,
				y = e.layerY,
				pixel = ctx.getImageData(x, y, 1, 1),
				data = pixel.data,
				rgba = 'rgba(' + data[0] + ',' + data[1] + ',' + data[2] + ',' + ((data[3] / 255).toFixed(2)) + ')';
			this.color.style.background =  rgba;
			this.color.textContent = rgba;
		}
	},

	mounted () {
		this.canvas = this.$refs['canvas'];
		this.ctx = this.canvas.getContext('2d');
		this.color = this.$refs['color'];

		let img = new Image();
		img.src = imgUrl;

		img.onload = () => {
			this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
		};
		
		this.canvas.onmousemove = () => {
			this.pick(event, this.ctx);
		}
	}
}
</script>

<style scoped>
	.pixelPick-wrapper {
		margin: 20px 0;
		padding: 10px;
		text-align: center;
		border: 1px solid #74b9ff;
	}
	#color {
		width: 250px;
		height: 100px;
		border: 4px solid #7f8c8d;
		color: #fff;
		margin: 0 auto;
	}
	#canvas {
		margin-top: 10px;
		border: 8px solid #3498db;
		cursor: crosshair;
	}
</style>