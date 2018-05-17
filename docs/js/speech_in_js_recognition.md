# JS中的语音识别——Speech Recognition API

[原文链接](https://denzel.netlify.com/js/speech_in_js_recognition.html)

## 简介
HTML5中和Web Speech相关的API实际上有两类，一类是“语音识别(Speech Recognition)”，另外一个就是“语音合成(Speech Synthesis)”，这两个名词听上去很高大上，实际上指的分别是“语音转文字”，和“文字变语音”。

本文介绍的是语音合成(Speech Recognition)，语音识别(Speech Synthesis)请移步[另一篇](speech_in_js_synthesis.html)。

语音识别使用SpeechRecognition API，目前只有Chrome支持，使用时要加上webkit前缀。

- 创建SpeechRecognition的新实例
```js
var recognition = webkitSpeechRecognition();
```

- 设置是持续听还是听到声音之后就关闭接收。
```js
recognition.continuous = true;
```

- 设置是否允许临时结果，临时结果是识别的中间过程，这时候返回结果的isFinal = false。
```js
recognition.interimResults = true;
```

- 设置语言
```js
recognition.lang = 'cmn-Hans-CN'; //普通话 (中国大陆)
```

- 控制语音识别的开启和停止，可使用start()和stop()方法，分别对应onstart、onend事件
```js
// 开启
recognition.start();
// 停止
recognition.stop();
```

- 对识别到的结果进行处理，可以使用一些事件方法，比方说onresult：
```js
recognition.onresult = function(event) { 
    console.log(event);
}
```


event返回结果格式
```js
{
    results: {
        0: {
              	0: {
                	confidence: 0.695017397403717,
                	transcript: "你好，世界"
              	},
              	isFinal:true,
              	length:1
        },
        length:1
    },
}
```

- 错误处理
```js
recognition.onerror = function(event) { 
    console.log(event);
}
```

## 试一下
直接扒的Google的代码：

简单测试了PC段和移动端，PC端只有Chrome支持，手机端全军覆没...:joy:

<my-iframe :src="'https://xiaotianxia.github.io/demos-2018/speech-recognition/index.html'"></my-iframe>


## 参考资料
- [HTML5语音合成Speech Synthesis API简介](http://www.zhangxinxu.com/wordpress/2017/01/html5-speech-recognition-synthesis-api/)
- [SpeechRecognition](https://developer.mozilla.org/zh-CN/docs/Web/API/SpeechRecognition)

[![](https://badge.juejin.im/entry/5afd0a2a6fb9a07ace591395/likes.svg?style=flat-square)](https://juejin.im/entry/5afd0a2a6fb9a07ace591395/detail)

<comment-tool></comment-tool>
