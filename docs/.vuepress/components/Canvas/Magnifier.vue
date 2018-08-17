<template>
	<div class="pixelPick-wrapper">
		<input type="file" name="" @change="onFileChange">

		<el-input v-model="exterbalUrl" placeholder="请输入图片url" size="small" clearable>
			<el-button slot="append" @click="onConfirmUrl">确定</el-button>
		</el-input>
		
		<div class="canvasWrapper">
			<canvas ref="canvas" id="canvas" width="300" height="300"></canvas>
			<canvas ref="magnifier" id="magnifier" width="308" height="308"></canvas>
		</div>
	</div>
</template>

<script>
const SAMPLE_WIDTH = 50,
	  CANVAS_WIDHT = 300;
export default {
	data () {
		return {
			exterbalUrl: 'http://p8rbt50i2.bkt.clouddn.com/blog/else/miaoWechatIMG241526366731_.pic.jpg'
		}
	},

	methods: {
		pick (e, ctx) {
			let x = e.layerX,
				y = e.layerY;
				
			if(x < SAMPLE_WIDTH / 2) {
				x = SAMPLE_WIDTH / 2;
			}
			if(x > CANVAS_WIDHT - SAMPLE_WIDTH / 2) {
				x = CANVAS_WIDHT - SAMPLE_WIDTH / 2;
			}
			if(y < SAMPLE_WIDTH / 2) {
				y = SAMPLE_WIDTH / 2;
			}
			if(y > CANVAS_WIDHT - SAMPLE_WIDTH / 2) {
				y = CANVAS_WIDHT - SAMPLE_WIDTH / 2;
			}
			let x1 = x - SAMPLE_WIDTH / 2,
				y1 = y - SAMPLE_WIDTH / 2;

			this.drawCanvas(this.img);
			this.showMagnifier(x1, y1);
			this.drawSampleFrame(x1, y1);
		},

		drawSampleFrame (x1, y1) {
			this.ctx.fillRect(x1, y1, 50, 50);
			this.ctx.strokeRect(x1, y1, 50, 50);
		},

		onFileChange (e) {
			let file = e.target.files[0],
				blob = new Blob([file]), // 文件转化成二进制文件
               	url = URL.createObjectURL(blob); //转化成url
            let img = new Image();
			img.src = url;
			img.onload = () => {
				this.img = img;
				this.drawCanvas(img);
				URL.revokeObjectURL(url);
			};
		},

		drawCanvas (img) {
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
		},

		onConfirmUrl () {
			let img = new Image();
			img.src = this.exterbalUrl;
			img.onload = () => {
				this.img = img;
				this.drawCanvas(img);
			};
		},

		showMagnifier (x, y) {
			this.magnifierCtx.drawImage(this.canvas, x, y, SAMPLE_WIDTH, SAMPLE_WIDTH, 0, 0, this.magnifier.width, this.magnifier.height);
		}
	},

	mounted () {
		this.canvas = this.$refs['canvas'];
		this.magnifier = this.$refs['magnifier'];
		this.ctx = this.canvas.getContext('2d');
		this.magnifierCtx = this.magnifier.getContext('2d');

		this.ctx.fillStyle = 'rgba(30, 144, 255, .5)';
		this.ctx.strokeStyle = '#000';

		this.onConfirmUrl();
		
		this.canvas.onmousemove = () => {
			this.pick(event, this.ctx);
		}

		this.canvas.onmouseout = () => {
			this.magnifierCtx.clearRect(0, 0, this.magnifier.width, this.magnifier.height);
			this.drawCanvas(this.img);
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
	.canvasWrapper {
		text-align: left;
	}
	input,
	.el-input {
		margin: 10px 0;
	}
	.el-input {
		width: 80%;
	}
	#canvas {
		border: 4px solid #3498db;
		cursor: crosshair;
		margin-right: 10px;
	}
</style>