<template>
    <div>
        <iframe ref="myIframe" :src="`https://caniuse.bitsofco.de/embed/index.html?feat=${word}&periods=future_2,future_1,current&accessible-colours=false`" frameborder="0" class="caniuse-frame"></iframe>
    </div>
</template>

<script>
export default {
    props: {
        word: {
            type: String,
            default: 'css-grid'
        }
    }
}
</script>

<style>
    .caniuse-frame {
        width: 100%;
        height: 400px;
    }
</style>

