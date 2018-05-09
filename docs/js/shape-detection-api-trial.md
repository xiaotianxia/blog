# 浏览器的图形识别初探

[github地址](https://github.com/xiaotianxia/demos-2018/tree/gh-pages/image-detection)


## demo截图

![人脸识别](https://user-gold-cdn.xitu.io/2018/5/9/16343e957edc80a4?w=1354&h=737&f=gif&s=491079)
<center>人脸识别</center>

![人脸识别](https://user-gold-cdn.xitu.io/2018/5/9/16343eae5cf110db?w=1354&h=737&f=gif&s=484598)
<center>人脸识别</center>
#### 可以看出识别的精确率还是有待提高的，猜测可能与角度和发型有关。还有就是，算法貌似对黑人朋友不太友好啊。。。

![文字识别](https://user-gold-cdn.xitu.io/2018/5/9/16343ebed4826cf4?w=1354&h=737&f=gif&s=588885)
<center>文字识别</center>

![二维码识别](https://user-gold-cdn.xitu.io/2018/5/9/16343ec5a55045a3?w=1354&h=737&f=gif&s=287816)
<center>二维码识别</center>


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