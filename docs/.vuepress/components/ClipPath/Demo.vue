<template>
	<div class="clipPath-wrapper">
		<div class="reference"></div>
		<div class="display"></div>
		<div class="operate-wrapper">
			<ul>
				<li style="background-color: tomato;clip-path: polygon(50% 0%, 0% 100%, 100% 100%);">11</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			
		}
	},

	methods: {

	}
}
</script>

<style scoped>
	.clipPath-wrapper {
		position: relative;
		height: 500px;
		margin: 20px 0;
		padding: 10px;
		border: 1px solid #ccc;
	}

	.reference,
	.display {
		position: absolute;
		top: 30px;
		left: 50%;
		transform: translate(-50%, 0);
		padding-top: 50%;
		width: 50%;
		background-image: url(http://p8rbt50i2.bkt.clouddn.com/%E4%BB%A3.jpg);
		background-size: 100% 100%;
	}

	.reference {
		border: 1px solid #ccc;
		opacity: 0.3;
	}

	.display {
		clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
	}
	.operate-wrapper {
		position: absolute;
		bottom: 10px;
		left: 50%;
		transform: translate(-50%, 0);
	}
</style>