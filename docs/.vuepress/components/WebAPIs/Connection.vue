<template>
	<div class="connection-wrapper">
		<el-row>
		  	<el-col :span="24"><div class="info-bg">切换或者断开网络试试？</div></el-col>
		</el-row>
		<div class="btn">
			<el-button size="small" @click="onGetStatus">获取网络连接状态</el-button>
		</div>
		<div class="linestatus">
			<span :class="{online: online}" class="point"></span>
		</div>

		<div v-if="canUseConnection" class="network">
			<div class="title">
				<span>当前网络</span>
				<i class="el-icon-refresh" @click="update"></i>
			</div>
			<el-tag type="primary">type: {{connection.type}}</el-tag>
			<el-tag type="success">downlink: {{connection.downlink}}</el-tag>
			<el-tag type="info">rtt: {{connection.rtt}}</el-tag>
			<el-tag type="warning">effectiveType: {{connection.effectiveType}}</el-tag>
		</div>

		<div v-else class="network">
			<div>浏览器不支持navigator.connection</div>
			<div>无法获取当前所用网络</div>
		</div>
	</div>
</template>

<script>

var initConnection = {
	type: '',
	downlink: '',
	rtt: '',
	effectiveType: ''
};

var navigator = typeof navigator !== "undefined" ? navigator : {}

export default {
	data () {
		return {
			online: false,
			connection: initConnection
		}
	},

	computed: {
		canUseConnection () {
			return navigator.connection;
		}
	},

	methods: {
		onGetStatus () {
			if(!this.canUseConnection) {
				this.$message.error('浏览器不支持navigator.connection（>_<）...');
				return;
			}
			this.updateConnectionStatus();
		},

		update () {
			this.connection = navigator.connection;
		},

		bindEvents () {
			let self = this;
			window.addEventListener('online', e => {
				console.log(e);
				self.updateOnlineStatus();
			});

			window.addEventListener('offline', e => {
				console.log(e);
				self.updateOnlineStatus();
			});

			if(navigator.connection) {
				let timer = null;
				navigator.connection.addEventListener('change', e => {
					timer && clearTimeout(timer);
					timer = setTimeout(() => {
						self.updateConnectionStatus(e);
					}, 500);
				});
			}
		},

		updateOnlineStatus () {
			this.online = navigator.onLine;
			console.log(this.online);
			if(this.online) {
				this.$message.success('有网啦❛‿˂̵✧');
			} else {
				this.$message.error('掉线啦（>_<）...');
			}
		},

		updateConnectionStatus (e) {
			console.log(e);
			this.connection = navigator.connection || initConnection;
			this.$notify.info({
				title: '提示',
          		message: '当前网络：' + (e ? e.currentTarget.type : this.connection.type || 'unknown')
			});
		}
	},

	mounted () {
		setTimeout(() => {
			this.online = navigator.onLine;
		}, 1000);

		this.bindEvents();
	}
}
</script>

<style scoped>
	.connection-wrapper {
		font-size: 12px;
		border: 1px solid #ccc;
		margin: 20px;
		padding: 20px;
		text-align: center;
	}
	.connection-wrapper .info-bg {
		border-radius: 4px;
		font-size: 14px;
    	height: 36px;
    	line-height: 36px;
		background-color: #99a9bf;
		color: #fff;
	}
	.connection-wrapper .btn {
		margin-top: 10px;
	}
	.connection-wrapper .linestatus {
		padding: 40px 0;
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

	.connection-wrapper .network {
		margin-top: 20px;
	}
	.connection-wrapper .network .title {
		margin-bottom: 10px;
	}
	.connection-wrapper .network i {
		cursor: pointer;
	}
	.connection-wrapper .network .el-tag {
		margin-right: 20px;
	}
</style>