<template>
    <div class="event-wrapper">
        <div class="play-board">
            <span class="title">offsetX:</span> <span class="result">{{result.offsetX}}</span>
            <span class="title">offsetY:</span> <span class="result">{{result.offsetY}}</span><br>

            <span class="title">clientX:</span> <span class="result">{{result.clientX}}</span>
            <span class="title">clientY:</span> <span class="result">{{result.clientY}}</span><br>

            <span class="title">pageX:</span> <span class="result">{{result.pageX}}</span>
            <span class="title">pageY:</span> <span class="result">{{result.pageY}}</span><br>

            <span class="title">screenX:</span> <span class="result">{{result.screenX}}</span> </span>
            <span class="title">screenY:</span> <span class="result">{{result.screenY}}</span><br>

            <span class="title">layerX:</span> <span class="result">{{result.layerX}}</span>
            <span class="title">layerY:</span> <span class="result">{{result.layerY}}</span><br>

            <span class="title">x:</span> <span class="result">{{result.x}}</span>
            <span class="title">y:</span> <span class="result">{{result.y}}</span><br>

            <span class="title">movementX:</span> <span class="result">{{result.movementX}}</span>
            <span class="title">movementY:</span> <span class="result">{{result.movementY}}</span>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            result: {},
            timer: null
        }
    },

    methods: {
        doLog (e) {
            this.timer && clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.result = e;
            }, 10);
        }
    },

    mounted () {
        document.addEventListener('mousemove', e => {
            this.doLog(e);
        });
    }
}
</script>

<style scoped>
    .event-wrapper {
        position: relative;
        height: 500px;
        border: 1px solid #000;
    }
    .play-board {
        position: absolute;
        left: 0;
        top: 0;
        padding: 10px;
        width: 300px;
        height: 100px;
        color: #fff;
        background-color: rgba(44, 62, 80, .7);
        font-size: 12px;
    }
    .play-board span {
        display: inline-block;
    }
    .play-board span.title {
        width: 85px;
    }

    .play-board span.result {
        width: 40px;
        color: gold;
        font-weight: bold;
        margin-right: 10px;
    }
</style>


