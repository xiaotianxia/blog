# canvas像素点操作 —— 视频绿幕抠图

[原文地址](https://denzel.netlify.com/html/canvas_video_green_screen_cutout.html)

## 主要内容
上线文章学习了canvas像素点的获取——[传送门](https://denzel.netlify.com/html/canvas_pixel_pick.html)，
今天学一下canvas像素点操作。


## 一个方法：putImageData

### putImageData
用法：

```js
context.putImageData(imgData, x, y, dX, dY, dWidth, dHeight);
```
| 参数 		| 描述 |
| -			| -	   |
| imgData	| 规定要放回画布的 ImageData 对象。|
| x		 	| ImageData 对象左上角的 x 坐标，以像素计。|
| y		 	| ImageData 对象左上角的 y 坐标，以像素计。|
| dX	 	| 可选。水平值（x），以像素计，在画布上放置图像的位置。|
| dY	 	| 可选。水平值（y），以像素计，在画布上放置图像的位置。|
| dWidth    | 可选。在画布上绘制图像所使用的宽度。|
| dHeight   | 可选。在画布上绘制图像所使用的高度。|

下面的栗子简单实现了几个简单的滤镜效果，具体算法参考的[这里](https://www.jianshu.com/p/90f6aedb33db)，学过《数字图像处理》的同学应该对此理解更深刻。

### demo

<Canvas-PixelOperate/>

::: tip tip
该栗子纯属为了演示功能而做，如果只强调效果而不在乎数据的话，用CSS3的filter属性便能高效又轻松地搞定。
:::

部分代码

```js
import imgUrl from './component/sample.jpg';

export default {
	data () {
		return {
			imgUrl: imgUrl
		}
	},

	methods: {
		onOperate1 () {
			this.ctx.putImageData(this.onCompute1(), 0, 0);
		},

		onOperate2 () {
			this.ctx.putImageData(this.onCompute2(), 0, 0);
		},

		...

		onCancel () {
			this.reload();
		},

		onCompute1 () {
			let data = this.frameData.data;

	        for (let i = 0; i < this.imgDataLength; i += 4) {
	          	let r = data[i + 0],
	          		g = data[i + 1],
	          		b = data[i + 2];
	          	
          		data[i + 0] = 255 - r;
          		data[i + 1] = 255 - g;
          		data[i + 2] = 255 - b;
	        }

	        return this.frameData;
		},

		onCompute2 () {
			let data = this.frameData.data;

	        for (let i = 0; i < this.imgDataLength; i += 4) {
	          	data[i] = Math.abs(data[i + 1] - data[i + 2] + data[i + 1] + data[i]) * data[i] / 256;  
            	data[i + 1] = Math.abs(data[i + 2] - data[i + 1] + data[i + 2] + data[i]) * data[i] / 256;  
            	data[i + 2] = Math.abs(data[i + 2] - data[i + 1] + data[i + 2] + data[i]) * data[i + 1] / 256;
	        }

	        return this.frameData;
		},

		...
	},

	mounted () {
        this.canvas = this.$refs['canvas'];
        this.ctx = this.canvas.getContext('2d');

        this.reload();
	}
}
```

上周跟同学去了一趟溧阳天目湖的南山竹海，在景区被忽悠拍了一张照片，就是这张 ——

![small demp](http://p8rbt50i2.bkt.clouddn.com/WechatIMG2.jpeg)

然后被朋友圈吐槽抠图。其实当时就是站在一块绿幕前拍的:smile: 。

PS中魔法棒工具可以把图片中一定容差下的相近像素都选中、清空，轻松做到一键“抠图”，前提是主体一定要与背景有大的差异，即像素值差值越大，抠图效果越好。

Canvas同样可以做到，并且可以处理视频帧，其中的原理是一样的 —— 将每个视频帧中绿幕的像素块透明度置0即可。像这样 ——

### demo

<Canvas-VideoCutout/>

部分代码

```js
import videoUrl from './component/video.ogv';
import imgUrl from './component/sample.jpg';

const TOLERANCE = 5;
export default {
	data () {
		return {
			videoUrl: videoUrl,
			imgUrl: imgUrl
		}
	},

	methods: {
		draw () {
			if (this.video.paused || this.video.ended) {
	          	return;
	        }
			this.ctx.drawImage(this.video, 0, 0, this.width, this.height);
			this.ctx.putImageData(this.cutOut(), 0, 0);
		},

		cutOut () {
			let frameData = this.ctx.getImageData(0, 0, this.width, this.height),
				len = frameData.data.length / 4;

	        for (let i = 0; i < len; i++) {
	          	let r = frameData.data[i * 4 + 0],
	          		g = frameData.data[i * 4 + 1],
	          		b = frameData.data[i * 4 + 2];
	          	if (r - 100 >= TOLERANCE 
	          	 && g - 100 >= TOLERANCE 
	          	 && b - 43 <= TOLERANCE) {
		            frameData.data[i * 4 + 3] = 0;
	          	}
	        }
	        return frameData;
		}
	},

	mounted () {
		this.video = this.$refs['video'];
        this.canvas = this.$refs['canvas'];
        this.ctx = this.canvas.getContext('2d');
        this.timer = null;

        this.video.addEventListener('play', () => {
            this.width = this.video.videoWidth;
            this.height = this.video.videoHeight;

            this.timer && clearInterval(this.timer);
            this.timer = setInterval(() => {
            	this.draw();
            }, 50);
        }, false);
	}
}
```


## 参考资料
- [Manipulating video using canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [Pixel manipulation with canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)
- [Canvas and images and pixels](https://codepo8.github.io/canvas-images-and-pixels/)
- [https://www.jianshu.com/p/90f6aedb33db](https://www.jianshu.com/p/90f6aedb33db)