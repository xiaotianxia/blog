# canvas像素点操作 —— 视频绿幕抠图

[原文地址](https://denzel.netlify.com/html/canvas_video_green_screen_cutout.html)



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

demo

<Canvas-PixelReverse/>


demo

<Canvas-VideoCutout/>


## 参考资料
- [Manipulating video using canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [Pixel manipulation with canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)
- [Canvas and images and pixels](https://codepo8.github.io/canvas-images-and-pixels/)
- [https://www.jianshu.com/p/90f6aedb33db](https://www.jianshu.com/p/90f6aedb33db)