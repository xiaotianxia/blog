<template>
    <div class="dialog-wrapper2">
        <button @click="onShow">弹一下</button>
        <dialog ref="dialog2">
            <div class="dialog-header">
                <span class="title">提示</span>
                <span class="close js-close">&times;</span>
            </div>
            <div class="dialog-content">
                这是一段消息。<br>
                这是另一段消息。
            </div>
            <div class="dialog-footer">
                <a class="btn js-confirm" href="javascript:;">确定</a>
                <a class="btn js-cancel" href="javascript:;">取消</a>
            </div>
        </dialog>
    </div>
</template>

<script>
import dialogPolyfill from './dialog-polyfill.min.js';

export default {
    data () {
        return {
            dialog: null,
            returnValue: ''
        }
    },

    methods: {
        onShow () {
            this.dialog.showModal();
        }
    },

    mounted () {
        this.dialog = this.$refs.dialog2;
        dialogPolyfill.registerDialog(this.dialog);
        let closeBtn = this.dialog.querySelector('.js-close');
        let confirmBtn = this.dialog.querySelector('.js-confirm');
        let cancelBtn = this.dialog.querySelector('.js-cancel');

        //按esc关闭弹窗，同时会触发close事件
        this.dialog.addEventListener('cancel', e => {
            //不写这句也会关闭，这里主要是为了携带数据及演示监听cancel事件
            this.dialog.close('按esc关闭');
        });

        //关闭
        this.dialog.addEventListener('close', e => {
            let returnValue = this.dialog.returnValue;
            this.dialog.returnValue = '';
            returnValue !== '' && this.$notify({
                title: 'returnValue',
                message: returnValue
            });
        });

        //点击遮罩关闭，事件注册在dialog上
        this.dialog.addEventListener('click', (event) => {
            if (event.target === this.dialog) {
                //关闭，并携带数据
                this.dialog.close('点击了遮罩关闭');
            }
        });

        //点×关闭
        closeBtn.addEventListener('click', e => {
            this.dialog.close('点击了关闭');
        });

        //点确定
        confirmBtn.addEventListener('click', e => {
            this.dialog.close('点击了确定');
        });

        //点取消
        cancelBtn.addEventListener('click', e => {
            this.dialog.close('点击了取消');
        });
    }
}
</script>

<style scoped>
    .dialog-wrapper2 {
        border: 1px solid #ccc;
        padding: 10px 40px;
        margin: 40px;
    }
    /*改变dialog样式*/
    dialog {
        position: fixed;
        margin: 0;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        min-width: 300px;
        max-width: 80%;
        border: none;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, .3);
    }
    dialog[open] {
        animation: slide-up 0.4s ease-out;
    }
    /*改变遮罩样式*/
    dialog::backdrop {
        background: rgba(0, 0, 0, 0.5);
    }
    .dialog-header {
        box-shadow: 0 1px rgba(0, 0, 0, .1);
    }
    .dialog-header span {
        display: inline-block;
    }
    .dialog-header .close {
        float: right;
        cursor: pointer;
    }
    .dialog-content {
        padding: 20px;
        box-shadow: 0 1px rgba(0, 0, 0, .1);
    }
    .dialog-footer {
        padding-top: 10px;
        text-align: right;
    }
    .dialog-footer a {
        margin-right: 10px;
        outline: none;
        text-decoration: none!important;
    }
    @keyframes slide-up {
        0% {
            opacity: 0;
            transform: translate(-50%, -40%);
        }
      
        100% {
            opacity: 1;
            transform: translate(-50%, -50%);
        }
    }
</style>