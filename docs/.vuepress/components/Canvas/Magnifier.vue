<template>
	<div class="pixelPick-wrapper">
		<input type="file" name="" @change="onFileChange">

		<el-input v-model="exterbalUrl" placeholder="请输入图片url" size="small" clearable>
			<el-button slot="append" @click="onConfirmUrl">确定</el-button>
		</el-input>
		
		<div class="canvasWrapper">
			<canvas ref="canvas" id="canvas" width="300" height="300"></canvas>
			<canvas ref="magnifier" id="magnifier" width="100" height="100"></canvas>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			canvas: null,
			ctx: null,
			magnifier: '',
			magnifierCtx: null,
			exterbalUrl: 'http://p8rbt50i2.bkt.clouddn.com/blog/else/miaoWechatIMG241526366731_.pic.jpg'
		}
	},

	methods: {
		pick (e, ctx) {
			let x = e.layerX,
				y = e.layerY,
				pixel = ctx.getImageData(x - 50, y - 50, 100, 100);
			this.showMagnifier(pixel);
		},

		onFileChange (e) {
			let file = e.target.files[0],
				blob = new Blob([file]), // 文件转化成二进制文件
               	url = URL.createObjectURL(blob); //转化成url
            let img = new Image();
			img.src = url;
			img.onload = () => {
				this.draw(img);
				URL.revokeObjectURL(url);
			};
		},

		draw (img) {
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
		},

		onConfirmUrl () {
			let img = new Image();
			//解决跨域问题
			img.crossOrigin = 'anonymous';
			img.src = this.exterbalUrl;
			img.onload = () => {
				this.draw(img);
			};
		},

		showMagnifier (data) {
			this.magnifierCtx.putImageData(data, 0, 0);
		}
	},

	mounted () {
		this.canvas = this.$refs['canvas'];
		this.magnifier = this.$refs['magnifier'];
		this.ctx = this.canvas.getContext('2d');
		this.magnifierCtx = this.magnifier.getContext('2d');
		
		this.onConfirmUrl();
		
		this.canvas.onmousemove = () => {
			this.pick(event, this.ctx);
		}

		this.canvas.onmouseout = () => {
			this.magnifierCtx.clearRect(0, 0, this.magnifier.width, this.magnifier.height)
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
	#magnifier {
		transform: scale3d(4, 4, 1);
		transform-origin: left bottom;
	}
</style>