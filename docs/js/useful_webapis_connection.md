# 几个有用的Web API——网络状态API

[原文链接](https://denzel.netlify.com/js/useful_webapis_connection.html?_=0987654334523)


资源预加载

视频网站提醒

微信里
hybrid jsbridge

## Demo
主要代码:

```js
{
	update () {
		this.connection = typeof navigator !== "undefined" && navigator.connection;
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

		if(typeof navigator !== "undefined" && navigator.connection) {
			let timer = null;
			navigator.connection.addEventListener('change', e => {
				timer && clearTimeout(tiemr);
				timer = setTimeout(() => {
					self.updateConnectionStatus(e);
				}, 500);
			});
		}
	},

	updateOnlineStatus () {
		this.online = typeof navigator !== "undefined" && navigator.onLine;
		console.log(this.online);
		if(this.online) {
			this.$message.success('有网啦❛‿˂̵✧');
		} else {
			this.$message.error('掉线啦（>_<）...');
		}
	},

	updateConnectionStatus (e) {
		console.log(e);
		this.connection = typeof navigator !== "undefined" && (navigator.connection || initConnection);
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