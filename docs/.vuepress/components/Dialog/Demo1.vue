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
            dialog.show();
        }
    }
}
</script>

<style scoped>
    .dialog-wrapper1 {
        padding-bottom: 40px;
        margin: 40px;
    }
</style>