# else A

## 网页性能优化方法 <i class="el-icon-question"></i>
<i class="el-icon-success"></i>

| 网页内容         | 服务器                           | cookie           | js |
| --------        | -----                           | ----            | ---- |
| 减少http请求次数  | 使用CDN                          | 减少cookie大小    | 脚本置底     |
| 减少DNS查询次数   | 添加Expires、cache-control报文头  | 使用无cookie域名  |  使用外部脚本  |
| 避免页面跳转      | 使用Gzip压缩传输文件               | **图片**         |  精简代码    |
| 缓存ajax         | 配置Etags                        |   图片优化        |  去除冗余代码 |
| 延迟加载         |  尽早flush输出                     |  使用CSS sprite   |  减少DOM访问 |
| 预加载           |  避免空的图片src                   |   避免在html缩放图片 |        |
| 减少DOM元素数量    |   **CSS**     |   | |
| 根据域名划分内容    |  样式表置顶      |   | |
| 减少iframe        |  避免CSS表达式     |   | |
|  避免404          |        |   | |


参考： 配置ETag [1](https://blog.csdn.net/liaozhongping/article/details/51114264)
