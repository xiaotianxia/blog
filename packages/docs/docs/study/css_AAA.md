# CSS AAA

## 为什么浏览器读取css规则的顺序是从右到左

根据2009年Google和Firefox的测试，right-to-left方式可以避免70%左右的无效匹配。right-to-left 比 left-to-right 的无效匹配次数更少，从而匹配快、性能更优，所以目前主流的浏览器基本采取right-to-left的方式读取css规则。

所以后代选择器不是那么被推荐的选择器。

## 