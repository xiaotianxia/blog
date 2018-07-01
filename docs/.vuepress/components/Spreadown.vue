<template>
	<div class="spreadown-wrapper">
		<div :class="{show: show}" class="spreadown-content">
			<slot></slot>
		</div>
		<div class="spreadown-trigger" @click="onTrigger">
			<i :class="{'el-icon-arrow-up': show, 'el-icon-arrow-right': !show}"></i>
			<span v-show="!show" class="text">点击展开</span>
			<span v-show="show" class="text">点击隐藏</span>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			show: false
		}
	},

	props: {
		defautShow: {
			type: Boolean,
			default: false
		}
	},

	methods: {
		onTrigger () {
			this.show = !this.show;
		}
	},

	mounted () {
		this.show = this.defautShow;
	}
}
</script>

<style scoped>
	.spreadown-wrapper {
		margin: 20px 0;
	}
	.spreadown-trigger {
		margin-top: 1px;
		border: 1px solid #ccc;
		padding: 5px 0;
		text-align: center;
		cursor: pointer;
		user-select: none;
	}
	.spreadown-trigger:hover {
		background-color: #ccc;
		color: #fff;
	}
	.spreadown-content {
		width: 100%;
		max-height: 0;
		overflow: auto;
		transition: max-height .1s ease;
	}
	.spreadown-content.show {
		height: auto;
		border-bottom: none;
		max-height: 1000px;
	}
</style>