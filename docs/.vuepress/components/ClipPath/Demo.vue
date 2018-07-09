<template>
	<div class="clipPath-wrapper">
		<div class="reference"></div>
		<div class="display" :style="{'clip-path': clipPath}"></div>
		<div ref="operate" class="operate-wrapper">
			<ul>
				<li>
					<input id="r1" value="r1" type="radio" v-model="choose">
					<label @click="onChoose" for="r1" style="background-color: tomato;clip-path: polygon(50% 0%, 0% 100%, 100% 100%);"></label>
				</li>
				<li>
					<input id="r2" value="r2" type="radio" v-model="choose">
					<label @click="onChoose" for="r2" style="background-color: #3cb371;clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);"></label>
				</li>
				<li>
					<input id="r3" value="r3" type="radio" v-model="choose">
					<label @click="onChoose" for="r3" style="background-color: orchid;clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);"></label>
				</li>
				<li>
					<input id="r4" value="r4" type="radio" v-model="choose">
					<label @click="onChoose" for="r4"  style="background-color: #db7093;clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);"></label>
				</li>
				<li>
					<input id="r5" value="r5" type="radio" v-model="choose">
					<label @click="onChoose" for="r5"  style="background-color: #32cd32;clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);"></label>
				</li>
				<li>
					<input id="r6" value="r6" type="radio" v-model="choose">
					<label @click="onChoose" for="r6"  style="background-color: #ffb142;clip-path: polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%);"></label>
				</li>
				<li>
					<input id="r7" value="r7" type="radio" v-model="choose">
					<label @click="onChoose" for="r7" style="background-color: #786fa6;clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);"></label>
				</li>
				<li>
					<input id="r8" value="r8" type="radio" v-model="choose">
					<label @click="onChoose" for="r8" style="background-color: #f19066;clip-path: circle(39.0% at 50% 50%);"></label>
				</li>
				<li>
					<input id="r8" value="r8" type="radio" v-model="choose">
					<label @click="onChoose" for="r8" style="background-color: #40407a;clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);"></label>
				</li>
				<li>
					<input id="r8" value="r8" type="radio" v-model="choose">
					<label @click="onChoose" for="r8" style="background-color: #218c74;clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);"></label>
				</li>
				<li>
					<input id="r9" value="r9" type="radio" v-model="choose">
					<label @click="onChoose" for="r9"  style="background-color: #e84393;clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);"></label>
				</li>
				<li>
					<input id="r11" value="r11" type="radio" v-model="choose">
					<label @click="onChoose" for="r11" style="background-color: #ffb142;clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);"></label>
				</li>
				<li>
					<input id="r10" value="r10" type="radio" v-model="choose">
					<label @click="onChoose" for="r10"  style="background-color: #cd6133;clip-path: polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%);"></label>
				</li>
				<li>
					<input id="r11" value="r11" type="radio" v-model="choose">
					<label @click="onChoose" for="r11" style="background-color: #ffb142;clip-path: polygon(47% 6%, 8% 33%, 18% 79%, 61% 49%, 85% 22%, 84% 66%);"></label>
				</li>
			</ul>
		</div>
		<div class="code-wrapper">
			<pre class="language-css">
				clip-path: {{clipPath}};
			</pre>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			choose: 'r1',
			clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
		}
	},

	methods: {
		onChoose (e) {
			this.clipPath = e.target.style.clipPath;
		}
	}
}
</script>

<style scoped>
	.clipPath-wrapper {
		position: relative;
		height: 520px;
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
		padding-top: 40%;
		width: 40%;
		background-image: url('http://p8rbt50i2.bkt.clouddn.com/blog/sample.jpg');
		background-size: 100% 100%;
	}

	.reference {
		border: 1px solid #ccc;
		opacity: 0.1;
	}

	.operate-wrapper,
	.code-wrapper {
		position: absolute;
		left: 50%;
		transform: translate(-50%, 0);
	}
	.operate-wrapper {
		bottom: 110px;
	}
	.operate-wrapper li {
		display: inline-block;
		margin: 0 8px;
		width: 30px;
		height: 30px;
		box-sizing: border-box;
	}
	.operate-wrapper li:hover {
		background-color: #000;
	}
	.operate-wrapper li label {
		display: inline-block;
		width: 100%;
		height: 100%;
		cursor: pointer;
	}
	.operate-wrapper li input {
		display: none;
	}
	.operate-wrapper li:hover label,
	.operate-wrapper li input:checked + label {
		box-shadow: inset 0px 0px 25px 4px #000;
	}

	.code-wrapper {
		bottom: 10px;
	}
	.code-wrapper pre {
		display: block;
		color: #fff;
		font-size: 12px;
		padding-top: 25px;
		tab-size: 0;
	}
</style>