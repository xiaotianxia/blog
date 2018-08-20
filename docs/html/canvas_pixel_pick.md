# canvas像素点获取 —— 拾色器、放大器

[原文地址](https://denzel.netlify.com/html/canvas_pixel_pick.html)

## 前言
最近在学习canvas，然后照葫芦画瓢简单实现了几个小demo，跟大家一块学习一下。

## 主要内容
- [两个方法：drawImage、getImageData](#两个方法：drawimage、getimagedata)
- [前端图片预览、跨域图片问题](#前端图片预览、跨域图片问题)

## 两个方法：drawImage、getImageData

### drawImage
用法：

```js
context.drawImage(img[, sx, sy, swidth, sheight], x, y[, width, height]);
```
| 参数 		| 描述 |
| - 		| -							|
|img 		|   可以是图片、视频、画布		|
|sx 		|   可选。开始剪切的 x 坐标位置。|
|sy 		|   可选。开始剪切的 y 坐标位置。|
|swidth 	|   可选。被剪切图像的宽度。|
|sheight 	|   可选。被剪切图像的高度。|
|x 			|   在画布上放置图像的 x 坐标位置。|
|y 			|   在画布上放置图像的 y 坐标位置。|
|width 		|   可选。要使用的图像的宽度。（伸展或缩小图像）|
|height 	|   可选。要使用的图像的高度。（伸展或缩小图像）|

### getImageData
用法：
```js
context.getImageData(x, y, width, height);
```
| 参数    | 描述 |
| - 	 | -					|
| x 	 |  开始复制的左上角位置的 x 坐标。|
| y 	 |  开始复制的左上角位置的 y 坐标。|
| width  |  将要复制的矩形区域的宽度。|
| height |  将要复制的矩形区域的高度。|

方法返回 ImageData 对象，该对象拷贝了画布指定矩形的像素数据。
是Uint8ClampedArray类型的一维数组，包含着RGBA格式的整型数据。
对于 ImageData 对象中的每个像素，都存在着四方面的信息，即RGBA值:

- R - 红色 (0-255)
- G - 绿色 (0-255)
- B - 蓝色 (0-255)
- A - alpha 通道 (0-255; 0 是透明的，255 是完全可见的)

color/alpha 以数组形式存在，并存储于 ImageData 对象的 data 属性中。

这个样子：
![](http://p8rbt50i2.bkt.clouddn.com/canvas001.gif)

先来一下demo，通过getImageData方法获取鼠标指针处的像素值。

### demo1
<Canvas-PixelPick/>

部分代码：

```js
methods: {
	import imgUrl from './component/sample.jpg';

export default {
	data () {
		return {
			canvas: null,
			ctx: null,
			color: null
		}
	},

	methods: {
		pick (e, ctx) {
			let x = e.layerX,
				y = e.layerY,
				pixel = ctx.getImageData(x, y, 1, 1),
				data = pixel.data,
				rgba = 'rgba(' + data[0] + ',' + data[1] + ',' + data[2] + ',' + ((data[3] / 255).toFixed(2)) + ')';
			this.color.style.background =  rgba;
			this.color.textContent = rgba;
		}
	},

	mounted () {
		this.canvas = this.$refs['canvas'];
		this.ctx = this.canvas.getContext('2d');
		this.color = this.$refs['color'];

		let img = new Image();
		img.src = imgUrl;

		img.onload = () => {
			this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
		};
		
		this.canvas.onmousemove = () => {
			this.pick(event, this.ctx);
		}
	}
}
```

## 前端图片预览、跨域图片问题

还可以取本地或者远程跨域的图片，像这样

### demo2

<Canvas-PixelPick2/>

但这里有两个问题：一个是本地图片预览，一个是跨域图片报错。

第一个问题之前有写过一篇文章，可以看[这里](https://juejin.im/post/59f892286fb9a04511706f53)，这里不赘述了。

::: tip 注意
第二个问题源于canvas无法对**没有权限的跨域图片**进行操作，如出现跨域，对图片的操作(如getImageData、canvas.toDataURL)会报错：<span class="txt-red">Uncaught DOMException: Failed to execute 'getImageData' on 'CanvasRenderingContext2D': The canvas has been tainted by cross-origin data.</span>
即canvas已经被跨域的数据污染了。

要解决这个问题，就需要图片所在的服务器允许跨域访问(设置消息头<span class="txt-green">Access-Control-Allow-Origin="\*"或者你的网站域名</span>)，且本地也需要开启跨域权限(<span class="txt-green">img.crossOrigin = "anonymous"</span>)。

由于一般的服务器都是允许跨域的，所以前端只要设置img.crossOrigin = "anonymous"就可以了。

当然，如果服务器设置了图片防盗链的话，我们本地开启了跨域权限也是没有用的。
:::

部分代码：

```js
data () {
	return {
		canvas: null,
		ctx: null,
		color: null,
		exterbalUrl: 'http://p8rbt50i2.bkt.clouddn.com/blog/else/miaoWechatIMG241526366731_.pic.jpg'
	}
},

methods: {
	pick (e, ctx) {
		let x = e.layerX,
			y = e.layerY,
			pixel = ctx.getImageData(x, y, 1, 1),
			data = pixel.data,
			rgba = 'rgba(' + data[0] + ',' + data[1] + ',' + data[2] + ',' + (data[3] / 255).toFixed(2) + ')';
		this.color.style.background =  rgba;
		this.color.textContent = rgba;
	},

	onFileChange (e) {
		let file = e.target.files[0],
			blob = new Blob([file]), // 文件转化成二进制文件
           	url = URL.createObjectURL(blob); //转化成url
        let img = new Image();
		img.src = url;
		img.onload = () => {
			this.draw(img);
			URL.revokeObjectURL(url);
		};
	},

	draw (img) {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
		this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
	},

	onConfirmUrl () {
		let img = new Image();
		//解决跨域问题
		img.crossOrigin = 'anonymous';
		img.src = this.exterbalUrl;
		img.onload = () => {
			this.draw(img);
		};
	}
},

mounted () {
	this.canvas = this.$refs['canvas'];
	this.ctx = this.canvas.getContext('2d');
	this.color = this.$refs['color'];
	
	this.onConfirmUrl();
	
	this.canvas.onmousemove = () => {
		this.pick(event, this.ctx);
	}
}
```

### demo3

下面是一个放大镜效果，类似PC端淘宝页面产品预览的效果。这样：

<Canvas-Magnifier/>

这个效果的实现相当简单，只是直接利用了drawImage的“截取”功能，把左侧截取的50 * 50的画布放大后，重新画在了新的画布上。

部分代码：

```js
const SAMPLE_WIDTH = 50,
	  CANVAS_WIDHT = 300;
export default {
	data () {
		return {
			exterbalUrl: 'http://p8rbt50i2.bkt.clouddn.com/blog/else/miaoWechatIMG241526366731_.pic.jpg'
		}
	},

	methods: {
		pick (e, ctx) {
			let x = e.layerX,
				y = e.layerY;
				
			if(x < SAMPLE_WIDTH / 2) {
				x = SAMPLE_WIDTH / 2;
			}
			if(x > CANVAS_WIDHT - SAMPLE_WIDTH / 2) {
				x = CANVAS_WIDHT - SAMPLE_WIDTH / 2;
			}
			if(y < SAMPLE_WIDTH / 2) {
				y = SAMPLE_WIDTH / 2;
			}
			if(y > CANVAS_WIDHT - SAMPLE_WIDTH / 2) {
				y = CANVAS_WIDHT - SAMPLE_WIDTH / 2;
			}
			let x1 = x - SAMPLE_WIDTH / 2,
				y1 = y - SAMPLE_WIDTH / 2;

			this.drawCanvas(this.img);
			this.showMagnifier(x1, y1);
			this.drawSampleFrame(x1, y1);
		},

		drawSampleFrame (x1, y1) {
			this.ctx.fillRect(x1, y1, 50, 50);
			this.ctx.strokeRect(x1, y1, 50, 50);
		},

		onFileChange (e) {
			let file = e.target.files[0],
				blob = new Blob([file]), // 文件转化成二进制文件
               	url = URL.createObjectURL(blob); //转化成url
            let img = new Image();
			img.src = url;
			img.onload = () => {
				this.img = img;
				this.drawCanvas(img);
				URL.revokeObjectURL(url);
			};
		},

		drawCanvas (img) {
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
		},

		onConfirmUrl () {
			let img = new Image();
			//解决跨域问题
			img.crossOrigin = 'anonymous';
			img.src = this.exterbalUrl;
			img.onload = () => {
				this.img = img;
				this.drawCanvas(img);
			};
		},

		showMagnifier (x, y) {
			//重点所在
			this.magnifierCtx.drawImage(this.canvas, x, y, SAMPLE_WIDTH, SAMPLE_WIDTH, 0, 0, this.magnifier.width, this.magnifier.height);
		}
	},

	mounted () {
		this.canvas = this.$refs['canvas'];
		this.magnifier = this.$refs['magnifier'];
		this.ctx = this.canvas.getContext('2d');
		this.magnifierCtx = this.magnifier.getContext('2d');

		this.ctx.fillStyle = 'rgba(30, 144, 255, .5)';
		this.ctx.strokeStyle = '#000';

		this.onConfirmUrl();
		
		this.canvas.onmousemove = () => {
			this.pick(event, this.ctx);
		}

		this.canvas.onmouseout = () => {
			this.magnifierCtx.clearRect(0, 0, this.magnifier.width, this.magnifier.height);
			this.drawCanvas(this.img);
		}
	}
}
```

## 参考资料
- [Pixel manipulation with canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)
- [Canvas and images and pixels](https://codepo8.github.io/canvas-images-and-pixels/)
- [The Image Embed element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-crossorigin#Attributes)