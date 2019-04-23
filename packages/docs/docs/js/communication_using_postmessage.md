# postMessage实现父子页面简单通信

[原文链接](https://xiaotianxia.github.io/blog/vuepress/js/communication_using_postmessage.html)

关于postMessage的讲解可参考[这里](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage)

[github地址](https://github.com/xiaotianxia/postMessage-test)

## demo演示

![demo演示](https://user-gold-cdn.xitu.io/2018/5/11/1634ddbac775667d?w=1420&h=818&f=gif&s=4853771)

## 代码片段

### 父页面

```js
let HOST = 'http://localhost:8080/', //允许通信的域名
    rows = 0,
    cols = 0;

export default {
    data () {
        return {
            msg: '',
            msgList: [], //消息列表
            childWins: [] //子页面对象集合
        }
    },

    watch: {
        msgList () {
            let $toView = document.querySelector('.toView');
            $toView.scrollIntoView();
        }
    },

    methods: {
        send () {
            //发送消息
            if(this.msg == '') { return; }
            let msgObj = {
                msg: this.msg,
                sender: 'parent'
            };
            this.msgList.push(msgObj);
            for(let i = 0, len = this.childWins.length; i < len; i ++) {
                this.childWins[i].postMessage(JSON.stringify(msgObj), HOST);
            }
            this.msg = '';
        },

        open () {
            //生成子页面，依次展示
            let newWin = window.open('/#/2', '_blank', 'width=300,height=400,top=' + (10 + cols * 400) + ',left=' + (10 + rows * 300));
            this.childWins.push(newWin);
            cols ++;
            if(cols % 2 == 0) {
                rows ++;
                cols = 0;
            }
        }
    },

    mounted () {
        //监听消息
         window.addEventListener('message', e => {
            let msgObj = JSON.parse(e.data);
            this.msgList.push(msgObj);
        }, false);
    }
}
```

### 子页面
```js
let HOST = 'http://localhost:8080/';

export default {
    data () {
        return {
            msg: '',
            msgList: []
        }
    },

    watch: {
        msgList () {
            let $toView = document.querySelector('.toView');
            $toView.scrollIntoView();
        }
    },

    methods: {
        send () {
            //发送消息
            if(this.msg == '') { return; }
            let msgObj = {
                msg: this.msg,
                sender: 'son'
            };
            this.msgList.push(msgObj);
            window.opener.postMessage(JSON.stringify(msgObj), HOST);
            this.msg = '';
        }
    },

    mounted () {
        //监听消息
        window.addEventListener('message', e => {
            let msgObj = JSON.parse(e.data);
            this.msgList.push(msgObj);
        }, false);
    }
}
```
