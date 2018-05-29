<template>
	<div class="connection-wrapper">
		<div class="linestatus">
			<span :class="{online: online}" class="point"></span>
		</div>
	</div>
</template>

<script>

export default {
	data () {
		return {
			online: true
		}
	},

	methods: {
		
	}
}
</script>

<style scoped>
	.connection-wrapper {
		font-size: 12px;
	}
	.connection-wrapper .linestatus {
		text-align: center;
	}
	.connection-wrapper .point {
		position: relative;
		display: inline-block;
		width: 2em;
		height: 2em;
		border-radius: 50%;
		background: rgb(231, 76, 60);
		animation-timing-function: linear;
		animation-name: connectionRedGlow;
		animation-duration: 1.5s;
		animation-iteration-count: infinite;
	}
	.connection-wrapper .point:after {
		content: 'offline';
		position: absolute;
		display: inline-block;
		font-size: 1.5em;
		top: 2.2em;
		left: 50%;
		color: inherit;
		transform: translate(-50%, 0);
	}
	.connection-wrapper .point.online {
		background: rgb(91, 231, 60);
		animation-name: connectionGreenGlow;
	}
	.connection-wrapper .point.online:after {
		content: 'online';
	}
	@keyframes connectionRedGlow {
		from {
			box-shadow: 0 0 0 1px rgba(217, 38, 18, 0.5)
		}

		50% {
			box-shadow: 0 0 0 8px rgba(217, 38, 18, 0.5)
		}

		to {
			box-shadow: 0 0 0 1px rgba(217, 38, 18, 0.5)
		}
	}
	@keyframes connectionGreenGlow {
		from {
			box-shadow: 0 0 0 1px rgba(150, 233, 150, 0.5);
		}

		50% {
			box-shadow: 0 0 0 8px rgba(150, 233, 150, 0.5);
		}

		to {
			box-shadow: 0 0 0 1px rgba(150, 233, 150, 0.5);
		}
	}
</style>