# JS控制设备摄像头初探

## 主要内容
- [获取设备摄像头](#获取设备摄像头)
- [利用摄像头截图并保存](#利用摄像头截图并保存)
- [手动控制前后置摄像头](#手动控制前后置摄像头)

### 获取设备摄像头
html中添加一个video元素，设置属性为autoplay，也可以在获取视频流之后手动控制播放(play方法)。

```html
<video autoplay></video>
```

利用[navigator.mediaDevices.getUserMedia](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/getUserMedia)获取视频流。之前的方法是[navigator.getUserMedia()](https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/getUserMedia),为向后兼容此方法已废弃。

```js
let video = document.querySelector('video');
navigator.mediaDevices.getUserMedia({ 
    audio: false, 
    video: true
}).then(stream => {
    video.srcObject = stream;
}).catch(err => {
    alert('error: ' + err.message);
});
```
<show-in-codepen :href="'https://codepen.io/_tianxia/pen/odMNxa'"></show-in-codepen>

### 利用摄像头截图并保存
截图的思路无非就是把动态的video存为孙坚的静态的image。利用canvas可以很简单快速的把视频帧存为静态图片，首先在video上层覆盖一个透明的canvas容器。
```html
<div class="wrapper">
    <video autoplay playsinline></video>
    <a class="button snap" href="javascript:;">截图</a>
    <a class="button save hide" download="test.png">保存</a>
    <canvas></canvas>
</div>
```
保存，利用a标签的新属性download，只要把图片地址赋给download属性即可以实现下载。图片地址的生成利用URL.createObjectURL方法，具体请看下面代码。
```js
let flag = true,
    video = document.querySelector('video'),
    snapBtn = document.querySelector('.snap'),
    saveBtn = document.querySelector('.save'),
    canvas = document.querySelector('canvas'),
    cxt = canvas.getContext('2d');
navigator.mediaDevices.getUserMedia({ 
    audio: false, 
    video: true
}).then(stream => {
    video.srcObject = stream;
    snapBtn.onclick = () => {
        saveBtn.classList.remove('hide', 'show');
        if(flag) {
            cxt.drawImage(video, 0, 0, canvas.width, canvas.height);
            snapBtn.innerText = '取消';
            saveBtn.classList.add('show');
            flag = false;

            canvas.toBlob((blob) => {
                let url = URL.createObjectURL(blob);
                    saveBtn.href = url;
            })
        } else {
            cxt.clearRect(0, 0, canvas.width, canvas.height);
            snapBtn.innerText = '截图';
            saveBtn.classList.add('hide');
            flag = true;
        }
    }
}).catch(err => {
    alert('error: ' + err.message);
});
```
不足的是canvas和video的适配还有问题，导致截图和视频的比例不一致，望大神指点:pray: 。

<show-in-codepen :href="'https://codepen.io/_tianxia/pen/YLjPNq'"></show-in-codepen>

### 手动控制前后置摄像头
待续。。。

## 亲自试一下吧
(没有？刷新之后‘允许使用摄像头’试试？)
<my-iframe :src="'https://xiaotianxia.github.io/demos-2018/camera-in-js/index.html'"></my-iframe>

<comment-tool></comment-tool>