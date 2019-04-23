# 几个有用的Web API——桌面通知API

[原文链接](https://xiaotianxia.github.io/blog/vuepress/js/useful_webapis_notification.html?_=65432123456523)

## 简介

### 构造方法
```js
let notification = new Notification(title, options);
```
### 参数

#### title
通知标题

#### options (可选)
一个被允许用来设置通知的对象。它包含以下属性：

```js
- dir : 文字的方向；它的值可以是 auto（自动）, ltr（从左到右）, or rtl（从右到左）
- lang: 指定通知中所使用的语言。
- badge: 一个图片的url，当桌面没有空间来展示该通知时，用来表示该通知的图标。
- body: 通知中额外显示的字符串。
- tag: 赋予通知一个id，以便在必要的时候对通知进行刷新、替换或移除。
- icon: 一个图片的url，将被用于显示通知的图标。
- image: 一个图片的url，显示在通知文字下方。
- data: 与通知绑定的数据，可以是任意数据类型。
- vibrate: 通知时设备震动，数组，例如[200, 100, 200]表示设备震动200毫秒，然后停止100毫秒，再震动200毫秒。
- renotify: 是否重新通知，默认false。
- requireInteraction: 是否持续显示通知，true表示通知会一直显示而不会自动消失，直到用户点击或者关闭。
- actions: 数组，表示通知来时用户可操作的行为。(不太懂怎么用:joy:)

// 以下是新添加的属性，目前大多数浏览器尚未支持。

- silent: 是否静音，默认为false。
- sound: 声音文件的url，通知来时播放。
- noscreen: 是否不在屏幕上显示通知信息，默认为false，表示通知来时激活屏幕。
- sticky: 通知是否“粘屏”？默认false。

```

### 静态属性
**Notification.permission**

一个用于表明当前通知显示授权状态的字符串。可能的值包括：denied (用户拒绝了通知的显示), 
granted (用户允许了通知的显示), 或 default (因为不知道用户的选择，所以浏览器的行为与 denied 时相同)。

### 实例属性
这些属性都是Notification实例中的属性，且都是只读的。

```js
- title  在构造方法中指定的 title 参数。
- dir  通知的文本显示方向。在构造方法的 options 中指定。
- lang  通知的语言。在构造方法的 options 中指定。
- body  通知的文本内容。在构造方法的 options 中指定。
- tag  通知的id。在构造方法的 options 中指定。
- icon  通知的图标图片的url地址。在构造方法的 options 中指定。
```

### 事件
```js
- onclick 每当用户点击通知时被触发。
- onshow 当通知显示的时候被触发。
- onerror 每当通知遇到错误时被触发。
- onclose 当用户关闭通知时被触发。
```

### 静态方法
**Notification.requestPermission()**

用于当前页面想用户申请显示通知的权限。这个方法只能被用户行为调用（比如：onclick 事件），并且不能被其他的方式调用。


## Demo

### 部分代码
```js
data () {
    return {
        queryParams: {
            title: '一条新通知',
            body: '12345哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈12345',
            icon: 'https://denzel.netlify.com/hero.png',
            badge: 'https://denzel.netlify.com/hero.png',
            image: 'https://denzel.netlify.com/hero.png',
            // silent: true,
            sound: 'http://pq3mt9wke.bkt.clouddn.com/blogsmile.wav',
            dir: 'rtl',
            data: {
                t: new Date()
            },
            vibrate: []
        },
        time: '',
        msg: ''
    }
},

methods: {
    onConfirm () {
        if (!('Notification' in window)) {
            alert('您的浏览器不支持通知API');
        }

        this.msg = Notification.permission;
        //检查用户是否同意接受通知
        //用户已同意
        if (Notification.permission == "granted") {
            this.newNotification();
        //若没拒绝获取权限
        } else if (Notification.permission != "denied") {
            //向用户获取权限
            Notification.requestPermission(function (permission) {
                this.newNotification();
            });
        }
    },

    newNotification () {
        let notification = new Notification(this.queryParams.title, {
            ...this.queryParams
        });

        console.log(notification);

        //事件绑定
        notification.addEventListener('show', e => {
            console.log(e);
            this.$message.info('通知出现');
            this.time = notification.data.t.toLocaleTimeString();
        });


        notification.addEventListener('click', e => {
            console.log(e);
            this.$message.info('你点击了通知');
            // notification.close();
        });

        notification.addEventListener('close', e => {
            console.log(e);
            this.$message.info('你关闭了通知');
        });
    }
}
```
### demo
有些参数暂未支持

<WebAPIs-Notification/>

## 样式
主要看了mac下的chrome、chromium和Firefox。windows下的还请读者自行测试...

chromium应该算是支持的最好的了

![small-demo chromium](http://pq3mt9wke.bkt.clouddn.com/blog/notification_chromium.png)

chrome67和Firefox样式基本一样

chrome67

![small-demo chrome](http://pq3mt9wke.bkt.clouddn.com/blog/notification%E2%80%94%E2%80%94chrome67.png)

Firefox

![small-demo Firefox](http://pq3mt9wke.bkt.clouddn.com/blog/natification_firefox.png)

## 兼容性
PC端的表现见上图，手机端嘛...chrome、Firefox等全跪:joy: ，反而UC浏览器貌似支持这个属性，但是我的UC显示是denied，
不知道是我误操作拒绝了权限还是浏览器的bug，算了不深究了...

## 总结
没啥好总结的，兼容性也就这样，算是为未来做点只是储备吧，我们依然坚定地——相信未来。

## 参考资料
- [notification](https://developer.mozilla.org/zh-CN/docs/Web/API/notification)
- [Notification.Notification()](https://developer.mozilla.org/en-US/docs/Web/API/notification/Notification)
- [简单了解HTML5中的Web Notification桌面通知](http://www.zhangxinxu.com/wordpress/2016/07/know-html5-web-notification/)

<!-- <comment-tool></comment-tool> -->