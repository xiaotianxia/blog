<template>
	<div class="pixelPick-wrapper">
		<input type="file" name="" @change="onFileChange">

		<el-input v-model="exterbalUrl" placeholder="请输入图片url" size="small" clearable>
			<el-button slot="append" @click="onConfirmUrl">确定</el-button>
		</el-input>
		
		<p ref="color" id="color"></p>
		<canvas ref="canvas" id="canvas" width="500" height="500"></canvas>
	</div>
</template>

<script>
export default {
	data () {
		return {
			canvas: null,
			ctx: null,
			color: null,
			exterbalUrl: 'http://p8rbt50i2.bkt.clouddn.com/blog/else/miaoWechatIMG241526366731_.pic.jpg'
		}
	},

	methods: {
		pick (e, ctx) {
			let x = e.layerX,
				y = e.layerY,
				pixel = ctx.getImageData(x, y, 1, 1),
				data = pixel.data,
				rgba = 'rgba(' + data[0] + ',' + data[1] + ',' + data[2] + ',' + (data[3] / 255).toFixed(2) + ')';
			this.color.style.background =  rgba;
			this.color.textContent = rgba;
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
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
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
		}
	},

	mounted () {
		this.canvas = this.$refs['canvas'];
		this.ctx = this.canvas.getContext('2d');
		this.color = this.$refs['color'];
		
		this.onConfirmUrl();
		
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
	input,
	.el-input {
		margin: 5px 0;
	}
	.el-input {
		width: 80%;
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