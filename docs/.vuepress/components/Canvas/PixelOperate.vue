<template>
	<div class="pixelReverse-wrapper">
		<div class="btn">
			<el-button type="primary" @click="onOperate1" size="small">反转</el-button>
			<el-button type="primary" @click="onOperate2" size="small">漫画效果</el-button>
			<el-button type="primary" @click="onOperate3" size="small">溶铸效果</el-button>
			<el-button type="primary" @click="onOperate4" size="small">黑白效果</el-button>
			<el-button type="primary" @click="onCancel" size="small" icon="el-icon-refresh"></el-button>
		</div>
		<canvas ref="canvas" width="200" height="150"></canvas>
	</div>
</template>

<script>
import imgUrl from './component/sample.jpg';

export default {
	data () {
		return {
			imgUrl: imgUrl
		}
	},

	methods: {
		onOperate1 () {
			this.ctx.putImageData(this.onCompute1(), 0, 0);
		},

		onOperate2 () {
			this.ctx.putImageData(this.onCompute2(), 0, 0);
		},

		onOperate3 () {
			this.ctx.putImageData(this.onCompute3(), 0, 0);
		},

		onOperate4 () {
			this.ctx.putImageData(this.onCompute4(), 0, 0);
		},

		onCancel () {
			this.reload();
		},

		onCompute1 () {
			let data = this.frameData.data;

	        for (let i = 0; i < this.imgDataLength; i += 4) {
	          	let r = data[i + 0],
	          		g = data[i + 1],
	          		b = data[i + 2];
	          	
          		data[i + 0] = 255 - r;
          		data[i + 1] = 255 - g;
          		data[i + 2] = 255 - b;
	        }

	        return this.frameData;
		},

		onCompute2 () {
			let data = this.frameData.data;

	        for (let i = 0; i < this.imgDataLength; i += 4) {
	          	data[i] = Math.abs(data[i + 1] - data[i + 2] + data[i + 1] + data[i]) * data[i] / 256;  
            	data[i + 1] = Math.abs(data[i + 2] - data[i + 1] + data[i + 2] + data[i]) * data[i] / 256;  
            	data[i + 2] = Math.abs(data[i + 2] - data[i + 1] + data[i + 2] + data[i]) * data[i + 1] / 256;
	        }

	        return this.frameData;
		},

		onCompute3 () {
			let data = this.frameData.data;

	        for (let i = 0; i < this.imgDataLength; i += 4) {
	          	data[i] = data[i] * 128 / (data[i + 1] + data[i + 2] + 1);  
            	data[i + 1] = data[i + 1] * 128 / (data[i] + data[i + 2] + 1);  
            	data[i + 2] = data[i + 2] * 128 / (data[i] + data[i + 1] + 1);
	        }

	        return this.frameData;
		},

		onCompute4 () {
			let data = this.frameData.data;

	        for (let i = 0; i < this.imgDataLength; i += 4) {
	          	let r = data[i],
                    g = data[i + 1],
                    b = data[i + 2],
                    average = parseInt((r + g + b) / 3);
                data[i] = average;
                data[i + 1] = average;
                data[i + 2] = average;
	        }

	        return this.frameData;
		},

		reload () {
			let img = new Image();
			img.src = imgUrl;

			img.onload = () => {
				this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
				this.frameData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
				let data = this.frameData.data;
				this.imgDataLength = data.length;
			}
		}
	},

	mounted () {
        this.canvas = this.$refs['canvas'];
        this.ctx = this.canvas.getContext('2d');

        this.reload();
	}
}
</script>

<style scoped>
	.pixelReverse-wrapper {
		margin: 20px 0;
		padding: 10px;
		text-align: center;
		border: 1px solid #74b9ff;
	}
	.btn {
		margin-bottom: 10px;
	}
	canvas {
		border: 1px solid #fff;
		width: 60%;
	}
</style>