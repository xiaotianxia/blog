# 浏览器的图像识别API初探

记得几年前本科的毕业论文写的就是人脸识别，当时用的是matlab。后来研究生时好多大神的实验室用c++写的程序更是牛的一逼。
现在，我们竟然可以用js在浏览器上实现人脸识别了，惊不惊喜，意不意外？！
方法调用十分简单，笔者照葫芦画瓢，写了个demo，简单介绍一下这一功能。

[github地址](https://github.com/xiaotianxia/demos-2018/tree/gh-pages/image-detection)

[demo地址](https://xiaotianxia.github.io/demos-2018/image-detection/dist/index.html#/face)


## demo截图

![人脸识别](https://user-gold-cdn.xitu.io/2018/5/9/16343e957edc80a4?w=1354&h=737&f=gif&s=491079)
<center>人脸识别</center>

![人脸识别](https://user-gold-cdn.xitu.io/2018/5/9/16343eae5cf110db?w=1354&h=737&f=gif&s=484598)
<center>人脸识别</center>
能识别人脸的具体坐标（boundingBox中返回），以及双眼和嘴巴的具体坐标（landmarks中返回）

可以看出识别的精确率还是有待提高的，猜测可能与角度和遮挡物（如发型）有关。还有就是，算法貌似对黑人朋友不太友好啊:sweat_smile:。。。

![文字识别](https://user-gold-cdn.xitu.io/2018/5/9/16343ebed4826cf4?w=1354&h=737&f=gif&s=588885)
<center>文字识别</center>
能识别文字所在的轮廓，但是目前还不能识别出具体文字是啥，无论英文还是中文（返回中rawValue为空）。

![二维码识别](https://user-gold-cdn.xitu.io/2018/5/9/16343ec5a55045a3?w=1354&h=737&f=gif&s=287816)
<center>二维码识别</center>
能识别出二维码的具体坐标，并能给出解析后的链接地址（rawValue中返回）

目前只有chrome浏览器支持，且确保chrome的实验性特性已经激活

::: warning 注意
	地址栏输入：chrome://flags/#enable-experimental-web-platform-features
	找到Experimental Web Platform features，选择Enabled
:::


## 代码片段

```js
//人脸识别部分
let faceDetector = new FaceDetector(
	{
		fastMode: true, 
		maxDetectedFaces: 20
	}
);
faceDetector.detect(image)
	.then(faces => {
		console.log(faces);
		if(!faces.length) { 
			alert('No faces detected!');
		} else {
		alert(faces.length + ' faces detected!');
  		this.faces = faces;
			this.renderBoxes(faces);
		}
}).catch((e) => {
	console.error('fail:' + e);
	});
```

```js
//文字识别部分
let textDetector = new TextDetector();
textDetector.detect(image)
	.then(texts => {
		console.log(texts);
		if(!texts.length) { 
			alert('No texts detected!');
		} else {
  		alert(texts.length + ' texts detected!');
  		this.texts = texts;
	    this.renderBoxes(texts); 
		}
}).catch((e) => {
	console.error('fail:' + e);
	});
```

```js
//二维码识别
let barcodeDetector = new BarcodeDetector();
barcodeDetector.detect(image)
	.then(qrs => {
		console.log(qrs);
    for (let qr of qrs) {
       this.renderLinkValue(qr); 
    }
}).catch((e) => {
	console.error('fail:' + e);
	});
```


## 亲自试一下吧

<my-iframe :src="'https://xiaotianxia.github.io/demos-2018/image-detection/dist/index.html#/face'"></my-iframe>