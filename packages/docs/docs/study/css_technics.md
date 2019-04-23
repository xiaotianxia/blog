# CSS技巧

## 利用属性选择器来选择空链接
当 a 元素没有文本内容，但有 href 属性的时候，显示它的 href 属性：
```css
a[href^="http"]:empty::before {
  content: attr(href);
}
```
