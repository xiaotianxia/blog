# 富文本编辑器了解一下

## 简介

user-modify
contenteditable

### execCommand
```js
// 一个 Boolean ，如果是 false 则表示操作不被支持或未被启用。
bool = document.execCommand(aCommandName, aShowDefaultUI, aValueArgument)
```

- aCommandName: 一个 DOMString ，命令的名称。可用命令列表请参阅 命令 。
- aShowDefaultUI: 一个 Boolean， 是否展示用户界面，一般为 false。Mozilla 没有实现。
- aValueArgument: 一些命令（例如insertImage）需要额外的参数（insertImage需要提供插入image的url），默认为null。

一个 Boolean ，如果是 false 则表示操作不被支持或未被启用。

### 参数

#### aCommandName

一个 DOMString ，命令的名称。可用命令列表请参阅 命令 。
#### aShowDefaultUI
一个 Boolean， 是否展示用户界面，一般为 false。Mozilla 没有实现。
#### aValueArgument
一些命令（例如insertImage）需要额外的参数（insertImage需要提供插入image的url），默认为null。
命令
#### backColor
修改文档的背景颜色。在styleWithCss模式下，则只影响容器元素的背景颜色。这需要一个;&ltcolor;&gt 类型的字符串值作为参数传入。注意，IE浏览器用这个设置文字的背景颜色。
#### bold
开启或关闭选中文字或插入点的粗体字效果。IE浏览器使用 ;&ltstrong;&gt标签，而不是;&ltb;&gt标签。
#### contentReadOnly
通过传入一个布尔类型的参数来使能文档内容的可编辑性。(IE浏览器不支持)
#### copy
拷贝当前选中内容到剪贴板。启用这个功能的条件因浏览器不同而不同，而且不同时期，其启用条件也不尽相同。使用之前请检查浏览器兼容表，以确定是否可用。
#### createLink
将选中内容创建为一个锚链接。这个命令需要一个HREF URI字符串作为参数值传入。URI必须包含至少一个字符，例如一个空格。（浏览器会创建一个空链接）
#### cut
 剪贴当前选中的文字并复制到剪贴板。启用这个功能的条件因浏览器不同而不同，而且不同时期，其启用条件也不尽相同。使用之前请检查浏览器兼容表，以确定是否可用。
#### decreaseFontSize
 给选中文字加上 ;&ltsmall;&gt 标签，或在选中点插入该标签。(IE浏览器不支持)
#### delete
删除选中部分.
#### enableInlineTableEditing
启用或禁用表格行和列插入和删除控件。(IE浏览器不支持)
#### enableObjectResizing
启用或禁用图像和其他对象的大小可调整大小手柄。(IE浏览器不支持)
#### fontName
在插入点或者选中文字部分修改字体名称. 需要提供一个字体名称字符串 (例如："Arial")作为参数。
#### fontSize
在插入点或者选中文字部分修改字体大小. 需要提供一个HTML字体尺寸 (1-7) 作为参数。
#### foreColor
在插入点或者选中文字部分修改字体颜色. 需要提供一个颜色值字符串作为参数。
#### formatBlock
添加一个HTML块式标签在包含当前选择的行, 如果已经存在了，更换包含该行的块元素 (在 Firefox中, BLOCKQUOTE 是一个例外 -它将包含任何包含块元素). 需要提供一个标签名称字符串作为参数。几乎所有的块样式标签都可以使用(例如. "H1", "P", "DL", "BLOCKQUOTE"). (IE浏览器仅仅支持标题标签 H1 - H6, ADDRESS, 和 PRE,使用时还必须包含标签分隔符 ;&lt ;&gt, 例如 ";&ltH1;&gt".)
#### forwardDelete
删除光标所在位置的字符。 和按下删除键一样。
#### heading
添加一个标题标签在光标处或者所选文字上。 需要提供标签名称字符串作为参数 (例如. "H1", "H6"). (IE 和 Safari不支持)
#### hiliteColor
更改选择或插入点的背景颜色。需要一个颜色值字符串作为值参数传递。 UseCSS 必须开启此功能。(IE浏览器不支持)
#### increaseFontSize
在选择或插入点周围添加一个BIG标签。(IE浏览器不支持)
#### indent
缩进选择或插入点所在的行， 在 Firefox 中, 如果选择多行，但是这些行存在不同级别的缩进, 只有缩进最少的行被缩进。
#### insertBrOnReturn
控制当按下Enter键时，是插入 br 标签还是把当前块元素变成两个。(IE浏览器不支持)
#### insertHorizontalRule
在插入点插入一个水平线（删除选中的部分）
#### insertHTML
在插入点插入一个HTML字符串（删除选中的部分）。需要一个个HTML字符串作为参数。(IE浏览器不支持)
#### insertImage
在插入点插入一张图片（删除选中的部分）。需要一个image SRC URI作为参数。这个URI至少包含一个字符。空白字符也可以（IE会创建一个链接其值为null）
#### insertOrderedList
在插入点或者选中文字上创建一个有序列表
#### insertUnorderedList
在插入点或者选中文字上创建一个无序列表。
#### insertParagraph
在选择或当前行周围插入一个段落。(IE会在插入点插入一个段落并删除选中的部分.)
#### insertText
在光标插入位置插入文本内容或者覆盖所选的文本内容。
#### italic
在光标插入点开启或关闭斜体字。 (Internet Explorer 使用 EM 标签，而不是 I )
#### justifyCenter
对光标插入位置或者所选内容进行文字居中。
#### justifyFull
对光标插入位置或者所选内容进行文本对齐。
#### justifyLeft
对光标插入位置或者所选内容进行左对齐。
#### justifyRight
对光标插入位置或者所选内容进行右对齐。
#### outdent
对光标插入行或者所选行内容减少缩进量。
#### paste
在光标位置粘贴剪贴板的内容，如果有被选中的内容，会被替换。剪贴板功能必须在 user.js 配置文件中启用。参阅 [1].
#### redo
重做被撤销的操作。
####removeFormat
对所选内容去除所有格式
####selectAll
选中编辑区里的全部内容。
####strikeThrough
在光标插入点开启或关闭删除线。
#### subscript
在光标插入点开启或关闭下角标。
#### superscript
在光标插入点开启或关闭上角标。
#### underline
在光标插入点开启或关闭下划线。
#### undo
撤销最近执行的命令。
#### unlink
去除所选的锚链接的;&lta;&gt标签
#### useCSS 
切换使用 HTML tags 还是 CSS 来生成标记. 要求一个布尔值 true/false 作为参数。注: 这个属性是逻辑上的倒退 (例如. use false to use CSS, true to use HTML).(IE不支持)
该属性已经废弃，使用 styleWithCSS 代替。
#### styleWithCSS
用这个取代 useCSS 命令。 参数如预期的那样工作, i.e. true modifies/generates 风格的标记属性, false 生成格式化元素。

## 参考资料