<template>
	<div class="geolocation-wrapper">
		<RemoteScript :src="'https://webapi.amap.com/maps?v=1.4.6&key=127225798a44ffd56967d469fe90b7da'"/>
		
		<div class="btn">
			<el-button @click="onGetGeoLocation" size="small">获取我的位置</el-button>
			<p>地址：{{address}}</p>
		</div>
		<div id="geolocation-container2"></div>
	</div>
</template>

<script>

export default {
	data () {
		return {
			address: ''
		}
	},

	methods: {
		onGetGeoLocation () {
			let map = new AMap.Map('geolocation-container2', {
							resizeEnable: true,
							zoom: 15
						});

				map.plugin('AMap.Geolocation', function() {
			        let geolocation = new AMap.Geolocation({
			            enableHighAccuracy: true,//是否使用高精度定位，默认:true
			            timeout: 10000,          //超过10秒后停止定位，默认：无穷大
			            buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
			            zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
			            buttonPosition:'RB'
			        });
			        map.addControl(geolocation);
			        geolocation.getCurrentPosition();
			        AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
			        AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
			    });
			function onComplete (data) {
				console.log(data);
			}

			function onError (data) {
				console.log(data);
			}
		}
	}
}
</script>

<style>
	.geolocation-wrapper #geolocation-container2 {
		height: 300px;
		border: 1px solid #ccc;
	}
	.geolocation-wrapper .btn {
		margin: 10px 0;
		text-align: center;
	}
</style>