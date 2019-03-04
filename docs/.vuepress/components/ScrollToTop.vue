<template>
    <div class="scrollToTop">
        <a href="javascript:;" @click="onClick">回到顶部</a>
    </div>
</template>

<script>
export default {
    methods: {
        onClick () {
            document.scrollingElement.scrollTop = 0;
            // or window.scrollTo(0, 0);
        }
    }
}
</script>

<style scoped>
    .scrollToTop {
        position: fixed;
        bottom: 0;
        right: 0;
        width: 100px;
        height: 32px;
        line-height: 32px;
        background-color: #ecf0f1;
    }
    .scrollToTop:hover {
        background-color: #bdc3c7;
    }
    .scrollToTop a {
        display: inline-block;
        width: 100%;
        height: 100%;
        text-align: center;
        font-size: 16px;
    }
    a,
    a:hover {
        text-decoration: none!important;
    }
</style>