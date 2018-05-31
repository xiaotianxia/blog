# 几个有用的Web API——网络状态API

[原文链接](https://denzel.netlify.com/js/useful_webapis_connection.html?_=0987654334523)

## 前言
在手机上浏览视频网站，能够根据用户当前使用的网络类型，在必要的时候给出提示，是一种很好的体验。

像这样（手机UC浏览器）：
![UC](http://p8rbt50i2.bkt.clouddn.com/blogWechatIMG491527678464_.pic.jpg)

这样（手机QQ浏览器）：
![QQ](http://p8rbt50i2.bkt.clouddn.com/blogWechatIMG501527678489_.pic.jpg)

这个功能还有一个用途：资源预加载。在wifi下，手机可以提前加载页面的静态资源，以此提升用户观览体验，
在非wifi下可使用懒加载，为用户节省流量。

然而，不难发现，这些都是软件外壳的API实现的，并非简单的JS实现。（一般视频在其他媒体上播放时不会弹出提示，可以猜测并未调用该环境下的JSBridge）

例如在微信或微信小程序里，可以这样获取网络类型：

```js
//微信
WeixinJSBridge.invoke('getNetworkType', {}, e => {   
	//blabla
});

//小程序
wx.getNetworkType({
	success: res => {
		//blabla
	}
})   
```

实际上，HTML5已经有这样的Web API来规范这个功能：onLine和connection API。

现在，无论手机端还是PC端，对前者的实现比较好，后者只有PC端的某些高级版本才支持。所以，如果想用JS在手机上实现该功能，到这里就可以关掉了:joy: 。。。

如果寄希望于PC端，还是可以继续看一看的:smile: 。

## onLine：一个属性两个事件

bla


## connection：一个对象一个事件
bla


## Demo
主要代码:

```js
{
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
}
```


<WebAPIs-Connection></WebAPIs-Connection>

## 参考资料
- [Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API)
- [Online and offline events](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/Online_and_offline_events)
- [Network Information API](http://wicg.github.io/netinfo/)


<comment-tool></comment-tool>