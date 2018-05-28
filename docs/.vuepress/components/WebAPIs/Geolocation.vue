<template>
	<div class="geolocation-wrapper">
		<RemoteScript :src="'https://webapi.amap.com/maps?v=1.4.6&key=127225798a44ffd56967d469fe90b7da'"/>
		
		<div class="btn">
			<el-button @click="onGetGeo" size="small">获取我的位置</el-button>
			<p class="color-red">{{errMsg}}</p>
		</div>
		<div id="geolocation-container"></div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			center: [],
			errMsg: ''
		}
	},

	methods: {
		onGetGeo () {
			let map = new AMap.Map('geolocation-container', {
							resizeEnable: true,
							zoom: 15,
							center: this.center
						}),
				marker = new AMap.Marker({
					position: this.center,
					map: map
				});
		}
	},

	mounted () {
		if('geolocation' in navigator) {
			let options = {
				enableHighAccuracy: false,
				maximumAge: 10 * 1000,
				timeout: 30 * 1000,
			};
			navigator.geolocation.getCurrentPosition(position => {
				console.log(position);
				this.errMsg = '';
				this.center = [position.coords.longitude, position.coords.latitude];
			}, err => {
				console.log(err);
				this.errMsg = err.message || '出错';
			}, options);
		} else {
			alert('您的浏览器不支持定位');
		}
	}
}
</script>

<style>
	.geolocation-wrapper #geolocation-container {
		height: 300px;
		border: 1px solid #ccc;
	}
	.geolocation-wrapper .btn {
		margin: 10px 0;
		text-align: center;
	}
	.geolocation-wrapper .btn .color-red {
		color: red;
	}
</style>