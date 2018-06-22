<template>
    <div class="dialog-wrapper2">
        <button @click="onShow">弹一下</button>
        <dialog ref="dialog2">
            <div class="dialog-header">
                <span class="title">标题</span>
                <span class="close js-close">&times;</span>
            </div>
            <div class="dialog-content">内容</div>
            <div class="dialog-footer">按钮</div>
        </dialog>
    </div>
</template>

<script>
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
        let closeBtn = this.dialog.querySelector('.js-close');

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
            this.dialog.close('主动关闭');
        });
    }
}
</script>

<style scoped>
    .dialog-wrapper2 {
        padding-bottom: 40px;
        margin: 40px;
    }
</style>