<template>
	<div class="resize-wrapper">
		<p v-if="errorMsg != ''" class="txt-red"><i class="el-icon-info"></i>{{errorMsg}}，请更新chrome浏览器查看。</p>
		<div v-else class="wrapper">
			<div class="btns">
				<button @click="onChangeSize">random</button>
				<button @click="onTransform">transform</button>
			</div>	
			<p>width:{{log.width}}px <br> height:{{log.height}}px</p>
			<div :style="{width: width, height: height}" class="box js-box">
				<div class="child js-child"><i class="el-icon-star-on"></i></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			errorMsg: '',
			width: '80%',
			height: '100px',
			log: {
				width: '',
				height: ''
			}
		}
	},

	methods: {
		onChangeSize () {
			let width = parseInt(Math.random() * 80 + 1, 10) + '%',
				height = parseInt(Math.random() * 151 + 50, 10) + 'px';
			this.width = width;
			this.height = height;
		},

		onTransform () {
			if(this.$box.classList.contains('transfrom')) {
				this.$box.classList.remove('transfrom');
			} else {
				this.$box.classList.add('transfrom');
			}
		},

		observerCallback (entries) {
			entries.forEach((entry) => {
				console.log(entry);
				this.log = entry.contentRect;
				this.$child.style.animationDuration = this.log.width / 10 + 's';
			});
		}
	},

	mounted () {
		if(!('ResizeObserver' in window)) {
  			this.errorMsg = '您的浏览器不支持 ResizeObserver API';
  			return;
		}

		this.$box = document.querySelector('.js-box');
		this.$child = this.$box.querySelector('.js-child');

		let observer = new ResizeObserver(this.observerCallback);
		observer.observe(this.$box);
	}
}
</script>

<style scoped>
	ul,
	li {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.resize-wrapper {
		border: 1px solid #ccc;
		margin: 20px;
		padding: 20px;
	}
	.resize-wrapper .wrapper button {
		margin: 0 4px;
		padding: 4px 10px;
		cursor: pointer;
	}
	.resize-wrapper .wrapper .box {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 80%;
		height: 100px;
		margin: 10px auto;
		padding: 20px;
		border: 8px solid #38ada9;
		overflow: hidden;
		resize: both;
	}
	.resize-wrapper .wrapper .box.transfrom {
		transform: scale(.5, .5);
	}
	.resize-wrapper .wrapper .box .child {
		width: 50px;
		height: 50px;
		text-align: center;
		line-height: 50px;
		color: #e74c3c;
		font-size: 50px;
		animation-name: roll;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
	}
	@keyframes roll {
		from {
			transform: rotate(0);
		}
		to {
			transform: rotate(10turn);
		}
	}
</style>