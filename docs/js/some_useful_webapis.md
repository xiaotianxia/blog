# 几个有用的Web API

## 一，网络连接信息API(Network Information API)

## 二，电池状态API(Battery Status API)

## 三，地理位置API(geolocation)

navigator.geolocation返回一个geolocation对象，该对象有一个方法getCurrentPosition()，该方法是一个异步请求，会去掉Google的api，
所以可能需要翻墙，调用方法：
```js
navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
```
successCallback回调返回一个position对象，其大概结构是这样的：
![geolocation对象](http://p8rbt50i2.bkt.clouddn.com/blogWX20180528-105336.png)

```js
coords.latitude (十进制数的纬度)

coords.longitude (十进制数的经度)

coords.accuracy (位置精度)

coords.altitude (海拔，海平面以上以米计)

coords.altitudeAccuracy (位置的海拔精度)

coords.heading (方向，从正北开始以度计)

coords.speed (速度，以米/每秒计)

timestamp (响应的日期/时间)
```


errorCallback返回错误信息，大致这样：

![geolocation对象](http://p8rbt50i2.bkt.clouddn.com/WX20180528-110527.png)

```js
code (错误编码：“1”为用户禁止了定位信息获取，“2”为网络不可用或连接卫星失败，“3”为获取定位所花费的时间过长，“0”为出现未知错误)

message (错误信息)
```

options是一些参数，可以设置最大超时时间等。

```js
{
  	enableHighAccuracy: true, //是否要求高精度的地理信息
  	maximumAge: 30000,  //缓存时间
  	timeout: 27000 //等待响应的最大时间，默认是0毫秒，表示无穷时间
}
```

除此之外，navigator.geolocation还有两个有用的方法：watchPosition和clearWatch。前者是一个跟踪器，
可根据设备的地理位置异步返回实时位置信息，实现实时位置追踪，调用方式与getCurrentPosition一样。
该方法返回唯一的watcher ID，可用clearWatch(ID)关掉追踪。

```js
var watcherId = navigator.geolocation.watchPosition(successCallback, errorCallback, options); //启动追踪

navigator.geolocation.clearWatch(watcherId); //关闭追踪
```

<WebAPIs-Geolocation/>

## 参考资料
- [Using geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation)
- [HTML5定位使用心得](https://www.cnblogs.com/czf-zone/archive/2013/11/09/3415658.html)


<comment-tool></comment-tool>