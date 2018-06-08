# 几个有用的Web API——桌面通知API

[原文链接](https://denzel.netlify.com/js/useful_webapis_notification.html?_=65432123456523)

## 简介

### 构造方法
```js
let notification = new Notification(title, options);
```
### 参数

#### title
一定会被显示的通知标题

#### options (可选)
一个被允许用来设置通知的对象。它包含以下属性：

```js
- dir : 文字的方向；它的值可以是 auto（自动）, ltr（从左到右）, or rtl（从右到左）
- lang: 指定通知中所使用的语言。
- badge: A USVString containing the URL of the image used to represent the notification when there is not enough space to display the notification itself.
- body: 通知中额外显示的字符串。
- tag: 赋予通知一个id，以便在必要的时候对通知进行刷新、替换或移除。
- icon: 一个图片的url，将被用于显示通知的图标。
- image: 一个图片的url，显示在通知文字下方。
- data: 与通知绑定的数据，可以是任意数据类型。
- vibrate: 通知时设备震动，数组。
- renotify: 是否重新通知，默认false。
- requireInteraction: 是否持续显示通知，true表示通知会一直显示而不会自动消失，直到用户点击或者关闭。
- actions: 数组，表示通知来时用户可操作的行为。(不太懂怎么用:joy:)

// 以下是新添加的属性，目前大多数浏览器尚未支持。

- silent: 是否静音，默认为false。
- sound: 声音文件的url，通知来时播放。
- noscreen: 是否不激活屏幕，默认为false，表示通知来时激活屏幕。
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



### 其他
样式？

## Demo

<Notification-Demo/>

## 总结



## 参考资料
- [notification](https://developer.mozilla.org/zh-CN/docs/Web/API/notification)
- [Notification.Notification()](https://developer.mozilla.org/en-US/docs/Web/API/notification/Notification)
- [http://wicg.github.io/netinfo/](http://wicg.github.io/netinfo/)

<comment-tool></comment-tool>