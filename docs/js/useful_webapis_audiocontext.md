# 让你的网页开口说话 —— audioContext API

[原文链接](https://denzel.netlify.com/js/useful_webapis_audiocontext.html?_=65312387656512)

> 浏览器可以利用CSS3、SVG和canvas处理图像和作画，简直成了简易版的Photoshop。
最近研究了一下audioContext，才发现水深不输他们啊！虽然自己出身通信专业，也学过语音信号处理，
但对里面的基本原理还是知之甚少，深感对不起母校的培养...

## 前言
AudioContext设计的API简直太多了，而且目前好多API还处在实验阶段，并未被所有浏览器完全支持，
所以本文不打算覆盖所有知识，只简单学习几个常用的API。先知其然，再知其所以然，也不失为一种学习方法嘛。
(其实好多我是真的不懂 :joy:)

## 简介

先来一个简单的栗子🌰↓，感受下它能做什么——

### demo1

<AudioContext-Demo1/>

注意这可不是用audio标签播放的音频的文件，而是用js控制浏览器发出的声音哈。可以调节音量、频率等参数再试听一下。

怎么实现的呢？先看下面这个图 ——
![](http://p8rbt50i2.bkt.clouddn.com/audio-context.png)
这就是实现出声必须的流程图。首先需要一个音频环境(audio context)， 然后有一个音频数据的输入(input)，再加上处理程序(effects)，然后是音频的输出(destination)，最后把他们连起来(connection) ——

音频数据的输入可以是自定义的数据、页面上的audio元素的音频、从用户设备输入的音频或视频、远程的音频文件等。

处理程序可以是分析器、处理器等，也可以没有，即直接将声源连接到扬声器。

音频的输出一般就是用户设备的扬声器。

创建一个AudioContext实例，这是音频处理程序运行的环境
```js
let audioCtx = new AudioContext(); 
```

创建一个振荡器，这是声音的源头
```js
let oscillator = audioCtx.createOscillator();
```

创建一个增益节点(音量节点)，用来调节音量的变化
```js
let gainNode = audioCtx.createGain();
```

设置音量和振荡器参数
```js
gainNode.gain.value = 0.5;  // 音量 0~1
oscillator.type = 'sine';   // 振荡器输出正弦波
oscillator.frequency.value = 200;  // 振荡频率200Hz
```

各种连接，参照上面的流程图
```js
oscillator.connect(gainNode);    // 发生源振荡器连接音量
gainNode.connect(audioCtx.destination); //音量连接扬声器
```

开始发声
```js
oscillator.start();
```

结束发声
```js
oscillator.stop(audioCtx.currentTime + FADING_TIME);  //现在起FADING_TIME秒后结束发声，没有FADING_TIME表示立刻结束
```

以下的demo中，整体大致都是这个流程：创建声源→中间处理程序→扬声器。当然如果不需要输出音效，就不需要连接到audioCtx.destination即可。

除此之外，还可以设置声音的变化曲线，API提供两个方法：linearRampToValueAtTime 和 exponentialRampToValueAtTime ，分别表示线性变化和指数变化。

完整代码：

```js
const FADING_TIME = 0.5;
export default {
    data () {
        return {
            started: false,
            queryParams: {
                gain: 0.5,
                gainChangeType: 'linearRampToValueAtTime',
                frequency: 196,
                waveform: 'sine'
            }
        }
    },

    methods: {
        init () {
            this.oscillator = this.audioCtx.createOscillator();
            this.gainNode = this.audioCtx.createGain();
        },

        onSet () {
            this.oscillator.type = this.queryParams.waveform;
            this.gainNode.gain.value = this.queryParams.gain;
            this.oscillator.frequency.value = this.queryParams.frequency;
            
            this.oscillator.connect(this.gainNode);
            this.gainNode.connect(this.audioCtx.destination);
        },

        onStart () {
            this.init();
            this.onSet();
            this.oscillator.start();

            this.started = true;
        },

        onStop () {
        	//先在0.5秒内变化到0.001，然后停止
            this.gainNode.gain[this.queryParams.gainChangeType](0.001, this.audioCtx.currentTime + FADING_TIME);
            this.oscillator.stop(this.audioCtx.currentTime + FADING_TIME);

            this.started = false;
        }
    },

    mounted () {
        if (!AudioContext && !webkitAudioContext) {
            alert('您的浏览器不支持audioContext!');
            return;
        }
        this.audioCtx = new (AudioContext || webkitAudioContext)();
        this.init();
    }
}
```

### demo2
既然可以控制声音的频率，那么“哆来咪”这样的简单音符也是可以的了。查了一下[钢琴键的频率表](http://www.360doc.com/content/11/0815/08/3416571_140455810.shtml)，
选取了一段频率，便可以做成一个简单的小钢琴了。看下面的栗子🌰↓

<AudioContext-Demo2/>

代码同demo1相比，只不过把频率设置成固定的几个而已。

```js
const FADING_TIME = 0.5;

export default {
    data () {
        return {
            FREQUENCY_LIST: [261.626, 277.183, 293.665, 311.127, 329.628, 349.228, 369.994, 391.995, 415.305, 440.000, 466.164, 493.883],
            queryParams: {
                gain: 0.5,
                frequency: 196,
                waveform: 'sine'
            }
        }
    },

    methods: {
        init () {
            this.oscillator = this.audioCtx.createOscillator();
            this.gainNode = this.audioCtx.createGain();
       
            this.oscillator.type = this.queryParams.waveform;
            this.gainNode.gain.value = this.queryParams.gain;

            this.oscillator.connect(this.gainNode);
            this.gainNode.connect(this.audioCtx.destination);
        },

        onPlay (item) {
            this.init()
            this.oscillator.frequency.value = item;
            this.oscillator.start(this.audioCtx.currentTime);
            this.oscillator.stop(this.audioCtx.currentTime + FADING_TIME);
        }
    },

    mounted () {
        if (!AudioContext && !webkitAudioContext) {
            alert('您的浏览器不支持audioContext!');
            return;
        }
        this.audioCtx = new (AudioContext || webkitAudioContext)();
        this.init();
    }
}
```

上文说了，音频数据的输入可以是自定义的数据、页面上的audio元素的音频、从用户设备输入的音频或视频、远程的音频文件等。
下面给出几个demo来演示声音来源的几种不同情况，并且用canvas展示了音频的频率变化图。

::: warning 注意
有的浏览器会出现报错：<span class="txt-red">"NotSupportedError: Failed to construct 'AudioContext': The number of hardware contexts provided (6) is greater than or equal to the maximum bound (6)."</span>，
原因猜测是有的版本限制了网页同时存在的audioContext实例的数量（限制为6个？），因为每个demo里至少会传建一个实例，可能会超过限制导致报错。

我用的chromium(58+)会报错，chrome(68+)就不会，具体支持情况没做深究。同学们如果遇到报错情况，不妨试下升级浏览器。
:::

除了上面的方法外，还有两个比较重要的方法：**createAnalyser**、**createScriptProcessor**。

createAnalyser()方法能创建一个AnalyserNode，可以用来获取音频时间和频率数据，以及实现数据可视化。

createScriptProcessor()方法创建一个ScriptProcessorNode，用于通过JavaScript处理音频。

下面几个代码片段是以下demo都会用到的

```js
initAnalyser () {
	//创建分析器
    this.analyser = this.audioCtx.createAnalyser();
    //快速傅里叶变换参数
    this.analyser.fftSize = 256;
    //bufferArray长度
    this.bufferLength = this.analyser.frequencyBinCount;
    //创建bufferArray，用来装音频数据
    this.dataArray = new Uint8Array(this.bufferLength);
},

initScriptProcessor () {
	//创建处理器，参数分别是缓存区大小、输入声道数、输出声道数
    this.scriptProcessor = this.audioCtx.createScriptProcessor(2048, 1, 1);
    //分析器连接处理器，处理器连接扬声器
    this.analyser.connect(this.scriptProcessor);
    this.scriptProcessor.connect(this.audioCtx.destination);
}
```

scriptProcessor可以绑定一个事件audioprocess，当scriptProcessor连接上分析器analyser，且有音频数据时，事件被触发。
```js
bindDrawEvent () {
    this.scriptProcessor.onaudioprocess = this.draw;
}
```

canvas绘画代码
```js
draw () {
    let cWidth = this.canvas.width,
        cHeight = this.canvas.height,
        barWidth = parseInt(.5 * cWidth / this.bufferLength),
        barHeight,
        x = 0;
    this.canvasCtx.clearRect(0, 0, cWidth, cHeight);
    //分析器获取音频数据“切片”
    this.analyser.getByteFrequencyData(this.dataArray);
	
	//把每个音频“切片”画在画布上
    for (var i = 0; i < this.bufferLength; i++) {
        barHeight = parseInt(0.4 * this.dataArray[i]);
        this.canvasCtx.fillRect(x, cHeight - barHeight, barWidth, barHeight);
        x += barWidth + 3;
    }
}
```

### 🌰 来自audio元素

<AudioContext-Demo3/>

核心代码：
```js
this.audioElement = document.querySelector('.audio');
this.audioElement.crossOrigin="anonymous";
this.audioSource = this.audioCtx.createMediaElementSource(this.audioElement);
this.audioSource.connect(this.analyser);
this.audioSource.connect(this.gainNode);

this.bindDrawEvent();
```

### 🌰 来自用户设备

<AudioContext-Demo4/>

核心代码：
```js
navigator.mediaDevices.getUserMedia({audio: true}).then(stream => {
    this.audioSource = this.audioCtx.createMediaStreamSource(stream);
    this.audioSource.connect(this.analyser);
    this.audioSource.connect(this.gainNode);
    this.bindDrawEvent();
}, error => {
    alert('出错，请确保已允许浏览器获取音频权限');
});
```

### 🌰 来自远程音频

<AudioContext-Demo5/>

核心代码：
```js
initSource () {
    this.audioSource = this.audioCtx.createBufferSource();
    this.audioSource.connect(this.analyser);
    this.audioSource.connect(this.gainNode);
},

onPlay () {
    //重新播放需要重新创建buffer
    this.audioSource = this.audioCtx.createBufferSource();
    this.audioSource.connect(this.analyser);
    this.audioSource.connect(this.audioCtx.destination);
    this.audioSource.buffer = this.buffer;
    this.audioSource.loop = true;
    this.audioSource.start(0, this.playResume);

    this.playStart = new Date().getTime() - this.playResume * 1000;

    this.playing = true;
},

onPause () {
    this.playResume = new Date().getTime();
    this.playResume -= this.playStart;
    this.playResume /= 1000;
    this.playResume %= this.audioSource.buffer.duration;
    this.audioSource.stop();
    this.playing = false;
},

play (url, index) {
    if(this.index == index) return;
    this.index = index;
    
    this.requestSong(url);
},

requestSong (url) {
    let request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.responseType = "arraybuffer";

    this.loading = true;
    request.onload = () => {
        this.audioCtx.decodeAudioData(request.response, buffer => {
            this.loading = false;
            this.playing = true;

            this.buffer = buffer;
            this.playSound(buffer);
            this.bindDrawEvent();
        });
    };
    request.send();
},

playSound (buffer) {
    this.audioSource.buffer = buffer;
    this.audioSource.loop = true;
    this.audioSource.start(0);
    this.playStart = new Date().getTime();
}
```

### 🌰 来自本地音频文件

<AudioContext-Demo6/>

核心代码：
```js
onProcessFile (e) {
    this.file = e.target.files[0];
    let stream = URL.createObjectURL(this.file),
        audio = new Audio();
    audio.src = stream;

    this.init();

    audio.oncanplay = this.initAudioSource(audio);
    this.showCancel = true;
},

onCancel () {
    this.audioCtx.state != 'closed' && this.audioCtx.close();
    URL.revokeObjectURL(this.file);

    this.fileInput.value = ''; 
    this.showCancel = false;
},

initAudioSource (audio) {
    this.fileInput = this.$refs['fileInput'];
    this.audioSource = this.audioCtx.createMediaElementSource(audio);
    this.audioSource.connect(this.analyser);
    this.audioSource.connect(this.gainNode);

    audio.play();
    this.bindDrawEvent();
}
```

## 用途
可以用来干啥呢？
- 游戏音效?
- 音乐网站?
- H5宣传页?
- 用声音来装饰自己的博客?
- 等等

总之可以出现声音的地方都可以用到。

## 参考资料
- [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- [利用HTML5 Web Audio API给网页JS交互增加声音](https://www.zhangxinxu.com/wordpress/2017/06/html5-web-audio-api-js-ux-voice/)
- [Introduction to Web Audio API](https://css-tricks.com/introduction-web-audio-api/)
- [钢琴各键对应频率](http://www.360doc.com/content/11/0815/08/3416571_140455810.shtml)
- [Visualizations with Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
