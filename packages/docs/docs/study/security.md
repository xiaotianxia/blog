# 安全性

## XSS攻击的原理、分类、具体案例，如何防御
### 原理
- XSS (Cross-Site Scripting)，跨站脚本攻击
- 通过网站漏洞，设法使用户端运行非法脚本 

### 分类
- 非持久型XSS (反射型XSS)
    - 不经过数据库存储，通过http请求一次性完成攻击
    - 攻击者需要诱骗点击，必须要通过用户点击链接才能发起
- 持久型XSS (存储型XSS)
    - 持久性，植入在数据库中
    - 危害面广

### 案例
- 非持久型
    - 在 URL、document.referrer、document.forms 等这种 DOM API 中获取数据直接渲染。
    - 使用 eval、new Function()、document.write()、document.writeln()、window.setInterval()、window.setTimeout()、innerHTML、document.createElement() 等可执行字符串的方法。
- 持久型
    - 提交表单后端没做处理直接入库
    - 后端从数据库中取出数据没做转义直接输出给前端
    - 前端拿到后端数据没做转义直接渲染成 DOM

### 防御
- CSP (Content-Security-Policy) [参考](https://www.jianshu.com/p/a8b769e7d4bd)
    - 设置 HTTP Header 中的 Content-Security-Policy
    - 设置 meta 标签的方式
- 转义字符
    - 对引号、尖括号、斜杠进行转义
- HttpOnly Cookie
    - 设置 cookie 时，将其属性设为 HttpOnly (只能通过服务端设置) ，就可以避免该网页的 cookie 被客户端恶意 js 窃取，保护用户 cookie 信息。
    - 当 cookie 带 httpOnly 选项时，客户端则无法通过 js 代码去访问（包括读取、修改、删除等）这个 cookie

## CSRF攻击的原理，如何防御
### 原理
CSRF(Cross Site Request Forgery)，即跨站请求伪造。它利用用户已登录的身份，在用户毫不知情的情况下，以用户的名义完成非法操作。

![CSRF](https://github.com/xiaotianxia/blog/blob/gh-pages/static/csrf.png)

完成 CSRF 攻击必须要有三个条件：
- 用户已经登录了站点 A，并在本地记录了 cookie
- 在用户没有登出站点 A 的情况下（也就是 cookie 生效的情况下），访问了恶意攻击者提供的引诱危险站点 B (B 站点要求访问站点A)。
- 站点 A 没有做任何 CSRF 防御

### 防御
防范 CSRF 攻击可以遵循以下几种规则：
- 不用 get 请求修改数据库数据
- 不让第三方网站访问到用户 Cookie
- 阻止第三方网站请求接口
- 请求时附带验证信息，比如验证码或者 token

防御措施
- SameSite
    - 可以对 Cookie 设置 SameSite 属性。该属性表示 Cookie 不随着跨域请求发送，可以很大程度减少 CSRF 的攻击，但是该属性目前并不是所有浏览器都兼容。
- Referer Check
    - HTTP Referer是header的一部分，当浏览器向web服务器发送请求时，一般会带上Referer信息告诉服务器是从哪个页面链接过来的，服务器借此可以获得一些信息用于处理。可以通过检查请求的来源来防御CSRF攻击。正常请求的referer具有一定规律，如在提交表单的referer必定是在该页面发起的请求。所以通过检查http包头referer的值是不是这个页面，来判断是不是CSRF攻击。
- Anti CSRF Token
- 验证码

## 其他攻击手段
- 点击劫持
    - 点击劫持是一种视觉欺骗的攻击手段。攻击者将需要攻击的网站通过 iframe 嵌套的方式嵌入自己的网页中，并将 iframe 设置为透明，在页面中透出一个按钮诱导用户点击。
- URL跳转漏洞
- SQL注入

## HTTP劫持、DNS劫持的原理、防御措施
运营商通过某些方式篡改了用户正常访问的网页，插入广告或者其他一些杂七杂八的东西。


### HTTP劫持
在运营商的路由器节点上，设置协议检测，一旦发现是HTTP请求，而且是html类型请求，则拦截处理。后续做法往往分为2种，1种是类似DNS劫持返回302让用户浏览器跳转到另外的地址，还有1种是在服务器返回的HTML数据中插入js或dom节点（广告）。

### DNS劫持
一般而言，用户上网的DNS服务器都是运营商分配的，所以，在这个节点上，运营商可以为所欲为。

例如，访问http://jiankang.qq.com/index.html，正常DNS应该返回腾讯的ip，而DNS劫持后，会返回一个运营商的中间服务器ip。访问该服务器会一致性的返回302，让用户浏览器跳转到预处理好的带广告的网页，在该网页中再通过iframe打开用户原来访问的地址。
- 直接修改网站IP

### 防御措施
- https 终级方案
    - 优点：一劳永逸
    - 缺点：成本高，对网站性能有影响，可能需要修改权限
- 绕过劫持
    - 检测是否有额外的DOM插入，检测插入的DOM中是否有白名单以外的链接

参考
[1](https://github.com/ljianshu/Blog/issues/56)