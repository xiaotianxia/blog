<template>
    <div class="event-wrapper">
        <div class="play-board">
            offsetX: <span>{{result.offsetX}}</span>
            offsetY: <span>{{result.offsetY}}</span><br>

            clientX: <span>{{result.clientX}}</span>            
            clientY: <span>{{result.clientY}}</span><br>

            pageX: <span>{{result.pageX}}</span>            
            pageY: <span>{{result.pageY}}</span><br>

            screenX: <span>{{result.screenX}}</span>            
            screenY: <span>{{result.screenY}}</span><br>

            layerX: <span>{{result.layerX}}</span>            
            layerY: <span>{{result.layerY}}</span><br>

            x: <span>{{result.x}}</span>            
            y: <span>{{result.y}}</span><br>

            movementX: <span>{{result.movementX}}</span>            
            movementY: <span>{{result.movementY}}</span>
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
        width: 200px;
        height: 100px;
        color: #fff;
        background-color: rgba(44, 62, 80, .7);
        font-size: 12px;
    }
    .play-board span {
        color: gold;
        font-weight: bold;
        margin-right: 10px;
    }
</style>


