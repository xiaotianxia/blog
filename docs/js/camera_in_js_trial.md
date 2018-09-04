# JS控制设备摄像头初探

[原文链接](https://denzel.netlify.com/js/camera_in_js_trial.html)

## 主要内容
- [获取设备摄像头信息](#获取设备摄像头信息)
- [利用摄像头截图并保存](#利用摄像头截图并保存)
- [手动控制前后置摄像头](#手动控制前后置摄像头)

<hr>

### 获取设备摄像头信息
html中添加一个video元素，设置属性为autoplay，以便在获取视频流之后立即播放，也可以在获取视频流之后手动控制播放(play方法)。

```html
<video autoplay></video>
```

利用[navigator.mediaDevices.getUserMedia](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/getUserMedia)获取视频流。之前的方法是[navigator.getUserMedia()](https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/getUserMedia),为向后兼容此方法已废弃。
::: warning 注意
目前pc端高级浏览器支持比较好，手机端貌似只有**Safari**支持:cry: 。
:::

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
截图的思路无非就是把动态的video存为瞬间的静态的image。利用canvas可以很简单快速的把视频帧存为静态图片，首先在video上层覆盖一个透明的canvas容器。
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
            //canvas转图片保存
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
这里不足的是canvas和video的适配还有问题，导致截图和视频的比例很多时候不一致，还望大神指点:pray: 。

<show-in-codepen :href="'https://codepen.io/_tianxia/pen/YLjPNq'"></show-in-codepen>

### 手动控制前后置摄像头

#### 获取可用摄像头
添加select用于获取可用摄像头并手动选择指定摄像头：
```html
<div class="wrapper">
    <video autoplay playsinline></video>
    <select></select>
    <a class="button confirm" href="javascript:;">确定</a>
    <a class="button snap" href="javascript:;">截图</a>
    <a class="button save hide" download="test.png">保存</a>
    <canvas></canvas>
</div>
```
[navigator.mediaDevices.enumerateDevices](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/enumerateDevices)用于获取所有可用音频和视频输入设备的方式。

在移动端，[MediaTrackConstraints.facingMode](https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/facingModes)用于前后置摄像头的调整比较方便，其值为'user(前置)'、'environment(后置)'、'left(前置左)'、'right(前置右)'，后两种不常见，目前还没有两个前置摄像头的手机吧:joy: 。

切换摄像头时首先切断当前视频流（所有轨道)，用stream.getTracks()获取所轨道，stop()方法停止该轨道。
```js
let flag = true,
    select = document.querySelector('select'),
    confirmBtn = document.querySelector('.confirm'),
    video = document.querySelector('video'),
    snapBtn = document.querySelector('.snap'),
    saveBtn = document.querySelector('.save'),
    canvas = document.querySelector('canvas'),
    cxt = canvas.getContext('2d');

navigator.mediaDevices.enumerateDevices().then(getDevices);

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

confirmBtn.onclick = () => {
    if (typeof currentStream !== 'undefined') {
        stopMediaTracks(currentStream);
    }
    const videoConstraints = {};
    if (select.value === '') {
        videoConstraints.facingMode = 'environment';
    } else {
        videoConstraints.deviceId = { exact: select.value };
    }
    const constraints = {
        video: videoConstraints,
        audio: false
    };
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(stream => {
            currentStream = stream;
            video.srcObject = stream;
        })
        .catch(error => {
            console.error(error);
        });
}

function getDevices(devices) {
    select.innerHTML = '';
    select.appendChild(document.createElement('option'));
    let count = 1;
    devices.forEach(device => {
        if (device.kind === 'videoinput') {
            const option = document.createElement('option');
            option.value = device.deviceId;
            const label = device.label || `相机 ${count++}`;
            const textNode = document.createTextNode(label);
            option.appendChild(textNode);
            select.appendChild(option);
        }
    });
}

function stopMediaTracks(stream) {
    stream.getTracks().forEach(track => {
        track.stop();
    });
}
``` 
<show-in-codepen :href="'https://codepen.io/_tianxia/pen/aGjvqa'"></show-in-codepen>

## 或者看这里
(没有？刷新之后‘允许使用摄像头’试试？)
<my-iframe :src="'https://xiaotianxia.github.io/demos-2018/camera-in-js/index.html'"></my-iframe>

## 还可以做什么
- 结合上一篇的人脸识别，就可以实现视频中的人脸识别了 
- 直播，尤其是手机浏览器端直播
- 等你来头脑风暴

## 参考资料
- [MediaDevices.getUserMedia](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/getUserMedia)
- [Choosing cameras in JavaScript with the mediaDevices API](https://www.twilio.com/blog/2018/04/choosing-cameras-javascript-mediadevices-api.html)
