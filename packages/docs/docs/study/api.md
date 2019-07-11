# API

## api列举

## fetch
基本使用
```
fetch(url, {
    //请求方法，默认为GET
    method: 'post',
    //HTTP的请求头
    headers: {
        'Content-Type': 'application/json'
    },
    //请求参数
    body: JSON.stringify({some: 'content'}),
    credentials: 'omit' //默认为omit，忽略的意思，也就是不带cookie;include，表示无论跨域还是同源请求都会带cookie;same-origin，意思就是同源请求带cookie
}).then(res => { 
    // handle HTTP response
}, err => {
    // handle network error
});
```

## Service Worker
https://github.com/Leslie2014/blog/issues/1

