<template>
	<div class="geolocation-wrapper">
		<RemoteScript :src="'https://webapi.amap.com/maps?v=1.4.6&key=127225798a44ffd56967d469fe90b7da'"/>
		
		<div class="btn">
			<el-button @click="onGetGeo">获取我的位置</el-button>
		</div>
		<div id="geolocation-container"></div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			center: []
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
			navigator.geolocation.getCurrentPosition(position => {
				this.center = [position.coords.longitude, position.coords.latitude];
			});
		} else {
			alert('您的浏览器不支持定位');
		}
	}
}
</script>

<style>
	.geolocation-wrapper #geolocation-container {
		height: 400px;
	}
	.geolocation-wrapper .btn {
		margin: 10px 0;
		text-align: center;
	}
</style>