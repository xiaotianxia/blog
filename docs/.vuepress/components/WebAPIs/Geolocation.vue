<template>
	<div class="geolocation-wrapper">
		<RemoteScript :src="'https://webapi.amap.com/maps?v=1.4.6&key=127225798a44ffd56967d469fe90b7da'"/>
		
		<div id="geolocation-container"></div>
	</div>
</template>

<script>
export default {
	mounted () {
		if('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(position => {
				var center = [position.coords.longitude, position.coords.latitude],
					map = new AMap.Map('geolocation-container', {
						resizeEnable: true,
						zoom: 15,
						center: center
					}),
					marker = new AMap.Marker({
						position: center,
						map: map
					});
			});
		}
	}
}
</script>

<style>
	.geolocation-wrapper #geolocation-container {
		height: 400px;
	}
</style>