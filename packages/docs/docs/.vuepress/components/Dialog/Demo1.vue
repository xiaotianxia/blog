<template>
    <div class="dialog-wrapper1">
        <button @click="onShow">弹一下</button>
        <dialog id="dialog">
            这是一个native弹窗。
        </dialog>
    </div>
</template>

<script>
export default {
    methods: {
        onShow () {
            let dialog = document.querySelector('#dialog');
            if(!dialog.show) {
                alert('浏览器不支持dialog方法');
            } else {
                dialog.show();
            }
        }
    }
}
</script>

<style scoped>
    .dialog-wrapper1 {
        padding: 10px 40px;
        margin-bottom: 60px;
    }
</style>