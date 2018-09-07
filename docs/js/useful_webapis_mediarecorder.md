# 几个有用的Web API —— MediaRecorder API

[原文链接](https://denzel.netlify.com/js/useful_webapis_mediarecorder.html?_=4535626519096512)

浏览器有个强大而且简单的API —— MediaRecorder，顾名思义，可以用来录制音频和视频。
闲话不说，先上demo ——

## demo1: 录制语音

<Recorder-Demo1/>

<show-in-codepen href="https://codepen.io/_tianxia/pen/JayxoG"></show-in-codepen>

## demo1: 录制视频

<Recorder-Demo2/>

<show-in-codepen href="https://codepen.io/_tianxia/pen/gdxqao"></show-in-codepen>

看完demo，再来看看怎么实现吧 ——

## 简介
API可以说是相当简单粗暴了

### 一个构造函数 MediaRecorder()
创建一个新的MediaRecorder对象，用来进行录制操作。


上面的demo只用到了两个方法和两个事件 ——

### 两个方法start、stop

#### start()

开始录制媒体。

可以设置一个参数，录制的媒体会按照设置的值进行分割成一个个单独的区块， 而不是以默认的方式录制一个非常大的整块内容。
#### stop()

停止录制，同时触发dataavailable事件，返回一个存储Blob内容的录制数据。

### 三个事件start、stop、dataavailable

#### onstart

录制开始时触发

#### onstop

录制结束时触发

#### ondataavailable

录制结束时同时触发，事件对象中返回录制的媒体数据

### 代码片段

demo中用到的部分代码：

获取用户媒体权限，创建媒体录制对象：
```js
requestMediaAccess () {
	//获取用户媒体权限，视频的话参数{audio: true, video: true}
    navigator.mediaDevices.getUserMedia({audio: true}).then(stream => {
    	//创建媒体录制对象
        this.recorder = new window.MediaRecorder(stream);
        this.bindEvents();
    }, error => {
        alert('出错，请确保已允许浏览器获取录音权限');
    });
}
```

绑定事件，处理录制数据：
```js
bindEvents () {
    this.recorder.ondataavailable = this.getRecordingData;
    this.recorder.onstop = this.saveRecordingData;
},

getRecordingData (e) {
	//录制的数据
    this.chunks.push(e.data);
},

//保存音频数据
saveRecordingData  () {
    let blob = new Blob(this.chunks, { 'type' : 'audio/ogg; codecs=opus' }),
        audioStream = URL.createObjectURL(blob),
        //估算时长
        duration = parseInt(blob.size / 6600);
    if(duration <= 0) {
        alert('说话时间太短');
        return;
    }
    if(duration > 60) {
        duration = 60;
    }
    this.chunkList.push({duration: duration, stream: audioStream});
    this.chunks = [];
},

//视频的话：保存视频数据
saveRecordingData  () {
    let blob = new Blob(this.chunks, { 'type' : 'video/webm' }),
        videoStream = URL.createObjectURL(blob);
    this.chunkList.push({stream: videoStream});

    this.onCapture(this.index);        

    this.chunks = [];
},

//视频：获取视频截图
onCapture (index) {
    let item = this.chunkList[index];
    this.ctx.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);
    this.canvas.toBlob((blob) => {
        let src = URL.createObjectURL(blob);
        this.$set(item, 'poster', src);
    });
    //索引后移
    this.index ++;

    //隐藏video
    this.showVideo(false);
    this.video.srcObject = null;
}
```

::: warning 注意
估算时长那块是我拍脑袋瞎弄的😂 。因为实在不知道怎么获取，貌似只有给音频赋值src后才能获取到时长duration，
但我试过几个办法还是无济于事...还望有经验的大佬略指点一二 🙏。
:::

具体代码可以看codepen，[demo1](https://codepen.io/_tianxia/pen/JayxoG)、 [demo2](https://codepen.io/_tianxia/pen/gdxqao)

### 其他
除此之外，还有一些属性、其他的方法和事件

### 属性
- **mimeType**

返回MediaRecorder对象创建时选择器选择的录制容器的 MIME type 

- **state**

返回录制对象MediaRecorder的当前状态：inactive(闲置中)、 recording(录制中)、 paused(暂停中)

- **stream**

返回录制器对象MediaRecorder创建时构造函数传入的stream对象

- **ignoreMutedMedia**

用以指定MediaRecorder是否录制无声的输入源。如果是false， 会录制无声的音频或者黑屏的视频，默认值是false

- **videoBitsPerSecond**

返回视频采用的编码率

- **audioBitsPerSecond**

返回音频采用的编码率

### 方法
- **isTypeSupported()**

返回一个Boolean值，来表示设置的MIME type 是否被当前用户的设备支持

- **pause()**

暂停媒体录制

- **resume()**

继续录制之前被暂停的录制动作

- **requestData()**

请求一个从开始到当前接收到的，存储为Blob类型的录制内容。
(或者是返回从上一次调用requestData() 方法之后到现在的内容)。
调用这个方法后，录制将会继续进行,但是会创建一个新的Blob对象


### 事件
- **onerror**

录制出错时触发

- **onpause**

录制暂停时触发

- **onresume**

录制继续时触发


## 总结

这个API对浏览器的要求不低，目前支持的只有高版本的Chrome(49+)和firfox(61+)，安卓版的chrome也是可以的。

音视频的录制可能简单，但是应用在聊天中还涉及到很多问题，如数据的传输、加密啥的，想做成像微信这样的工具，还是有很多路要走。





## 参考资料
- [MediaStream Recording API](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API)
- [MediaRecorder](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder)
- [HTML5’s Media Recorder API in Action on Chrome and Firefox](https://addpipe.com/blog/mediarecorder-api/)
