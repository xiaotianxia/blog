# 浏览器几种滚动行为

## 一，scroll-behavior
```css
scroll-behavior: smooth;
```
### demo
右下角
<scroll-to-top></scroll-to-top>
```js
document.scrollingElement.scrollTop = 0;
// or window.scrollTo(0, 0);
```
## 二，scroll、scrollTo、scrollBy、scrollIntoView
同样，几个有关滚动的js方法也可以添加类似scroll-behavior: smooth的参数已达到平滑滚动效果 —— scroll、scrollTo、scrollBy、scrollIntoView。

它们都可以以一个scrollOptions对象作为参数，
```js
scrollOptions = {
  top: 0,
  left: 0,
  behavior: 'smooth'
};
```

### demo
<Scroll-ScrollMethods/>

## 三，scrollIntoView

## 四，overscroll-behavior: contain;
```css
overscroll-behavior: contain;
```

### demo
滚动到底感受一下~
<Scroll-Overscroll/>

[文章](https://www.zhangxinxu.com/study/201512/inner-scroll-prevent-parent-scroll.html)


4.scrollIntoView()
https://www.zhangxinxu.com/wordpress/2018/10/scroll-behavior-scrollintoview-%E5%B9%B3%E6%BB%91%E6%BB%9A%E5%8A%A8/

## 五，scroll-snap-*
https://codepen.io/nolanlawson/pen/ErQqbz?editors=1100
https://codepen.io/andyadams/pen/omLOqZ?editors=1100
https://css-tricks.com/practical-css-scroll-snapping/
https://drafts.csswg.org/css-scroll-snap-1/#padding-longhands-physical

https://www.zhangxinxu.com/wordpress/2018/11/know-css-scroll-snap/
