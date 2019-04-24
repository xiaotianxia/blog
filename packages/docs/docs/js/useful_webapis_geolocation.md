# 几个有用的Web API——地理位置API

[原文链接](https://xiaotianxia.github.io/blog/vuepress/js/useful_webapis_geolocation.html?_=2345677654321)

## API用法——一个对象三个方法
navigator.geolocation返回一个geolocation对象，该对象有一个方法getCurrentPosition()，该方法是一个异步请求，会去调Google的api，
所以可能需要翻墙，调用方法：
```js
navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
```
successCallback定位成功后回调，返回一个position对象，其大概结构是这样的：
![geolocation对象](../../../../static/blogWX20180528-105336.png)

```js
coords.latitude: 十进制数的纬度

coords.longitude: 十进制数的经度

coords.accuracy: 位置精度

coords.altitude: 海拔，海平面以上以米计

coords.altitudeAccuracy: 位置的海拔精度

coords.heading: 方向，从正北开始以度计

coords.speed: 速度，以米/每秒计

timestamp: 响应的日期/时间
```


errorCallback定位失败时返回错误信息，大致这样：

![geolocation对象](../../../../static/WX20180528-110527.png)

```js
code: 错误编码：
		1: 用户禁止了定位信息获取，
		2: 为网络不可用或连接卫星失败，
		3: 为获取定位所花费的时间过长，
		0: 为出现未知错误

message: 错误信息
```

options是一些设置参数，可以设置最大超时时间等。

```js
{
  	enableHighAccuracy: true, //是否尝试更精确地读取纬度和经度，移动设备上，这可能要使用手机上的GPS，这会消耗移动设备更多的电量，定位所需时间也会更长，默认为false
  	maximumAge: 30000,  //缓存时间
  	timeout: 27000 //等待响应的最大时间，默认是0毫秒，表示无穷时间
}
```

除此之外，navigator.geolocation还有两个有用的方法：watchPosition和clearWatch。
前者是一个跟踪器，可根据设备的地理位置异步返回实时位置信息，实现实时位置追踪，调用方式与getCurrentPosition一样。
该方法返回唯一的watcher ID，可用clearWatch(ID)关掉追，有点像setInterval和clearInterval的工作方式。

```js
var watcherId = navigator.geolocation.watchPosition(successCallback, errorCallback, options); //启动追踪

navigator.geolocation.clearWatch(watcherId); //关闭追踪
```

## Demo1: 原生geolocation.getCurrentPosition

主要代码：
```js
onGetGeoLocation () {
	if('geolocation' in navigator) {
		let center,
			map,
			marker,
			options = {
			enableHighAccuracy: false,
			maximumAge: 10 * 1000,
			timeout: 30 * 1000,
		};

		navigator.geolocation.getCurrentPosition(position => {
			console.log(position);
			this.errMsg = '';
			//获取经纬度
			center = [position.coords.longitude, position.coords.latitude];
			//借助高德地图，通过经纬度显示位置
			map = new AMap.Map('geolocation-container', {
						resizeEnable: true,
						zoom: 15,
						center: center
					}),
			marker = new AMap.Marker({
				position: center,
				map: map
			});
		}, err => {
			console.log(err);
			errMsg = err.message || '出错';
		}, options);
	} else {
		alert('您的浏览器不支持定位');
	}
}
```
<WebAPIs-Geolocation/>

## 几点注意

### 定位功能的主要影响因素
影响定位功能的主要因素是网络。

定位功能在移动网络环境里，是通过基站定位或者WIFI定位，获取定位信息成功率高，速度快。

若是在物理网络环境里，则有点复杂，首先，浏览器调用其对应的定位服务器的定位接口，然后定位服务器连接卫星，以用户的IP地址进行定位，再将定位信息返回浏览器传给用户。
由于涉及浏览器与定位服务器连接是否成功、定位服务器与卫星连接是否成功两方面因素的影响，固定位成功率很难保证。

GPS定位由于信号比较薄弱的关系定位成功率比较低，就算成功定位，需要花费的时间也很长，一般使用GPS定位的同时都会使用基站和WIFI辅助定位。

### 定位精准度
关于定位精准度问题，由于绝大多数情况下，设备的定位信息是通过WIFI定位方式返回，误差一般在几十米之内。
(因为GPS定位耗时过长一般会被略过，基站定位精准度较低，优先级不如WIFI定位。)

而getCurrentPosition的配置参数里的**enableHighAccuracy**设置为true，仅仅是启用GPS定位，根据GPS定位的特性，应用中使用的机会不多。所以一般都用默认flase就足够了。

::: warning 注意
Chrome、IOS10+等已不再支持非安全域的浏览器定位请求
:::

总之，单纯的浏览器定位由于种种原因，**很——不——准**:joy: 。

如果用于业务开发，可以借助第三方地图工具，如高德地图的AMap.Geolocation插件，融合了浏览器定位、高精度IP定位、安卓定位sdk辅助定位等多种手段，
提供了获取当前准确位置、获取当前城市信息、持续定位(浏览器定位)等功能。

## Demo2: 高德地图插件AMap.Geolocation
主要代码：
```js
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
```
<WebAPIs-AmapGeolocation/>

## 参考资料
- [Using geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation)
- [HTML5定位使用心得](https://www.cnblogs.com/czf-zone/archive/2013/11/09/3415658.html)
- [高德开放平台](http://lbs.amap.com/api/javascript-api/reference/location/)


<!-- <comment-tool></comment-tool> -->