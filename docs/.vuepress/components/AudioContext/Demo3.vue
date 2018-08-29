<template>
    <div class="audio-wrapper">
        <el-button @click="onStart">开始</el-button>
        <el-button @click="onStop">结束</el-button>
    </div>
</template>

<script>
const FADING_TIME = 0.5;

export default {
    data () {
        return {
            
        }
    },

    methods: {
        onStart () {
            navigator.mediaDevices.getUserMedia({audio: true}).then(stream => {
                this.recorder = new window.MediaRecorder(stream);
                // this.input = this.audioCtx.createMediaStreamSource(stream);
                this.recorder.start();
                console.log(this.recorder)
                this.recorder.ondataavailable = this.setRecordingData;
                this.recorder.onstop = this.saveRecordingData;
            }, error => {
                alert('出错，请确保已允许浏览器获取音频');
            });
        },

        onStop () {
            this.recorder.stop();
        },

        setRecordingData (e) {
            console.log(e)
        },

        saveRecordingData (e) {
            console.log(e)
        }
    },

    mounted () {
        if (!navigator.mediaDevices) {
            alert('您的浏览器不支持获取用户设备');
            return;
        }
        if (!AudioContext && !webkitAudioContext) {
            alert('您的浏览器不支持audioContext!');
            return;
        }
        this.audioCtx = new (AudioContext || webkitAudioContext)();
    }
}
</script>

<style scoped>
    .audio-wrapper {
        margin-top: 10px;
        padding: 20px;
        border: 1px solid #00b894;
    }
    .piano {
        padding-bottom: 20px;
        background-color: #2f3640;
        text-align: center;
        user-select: none;
        overflow: hidden;
    }
    .key {
        position: relative;
        display: inline-block;
        vertical-align: top;
        cursor: -webkit-grab;
        cursor: grab;
    }
    .key:active {
        top: -2px;
    }
    .white {
        width: 12.5%;
        height: 250px;
        background-color: white;
        box-shadow: inset 0 1px 0 white, 
                    inset 0 -1px 0 white, 
                    inset 1px 0 0 white, 
                    inset -1px 0 0 white, 
                    0 4px 3px rgba(0, 0, 0, 0.6), 
                    inset 0 -1px 0 white, inset 1px 0 0 white, 
                    inset -1px -1px 15px rgba(0, 0, 0, 0.6), 
                    -3px 4px 6px rgba(0, 0, 0, 0.6);
    }
    .black {
        top: 0;
        margin-left: -4%;
        margin-right: -4%;
        width: 7%;
        height: 120px;
        background-color: black;
        border-width: 1px 3px 8px;
        border-style: solid;
        border-color: #666 #222 #111 #555;
        box-shadow: inset 0 -1px 2px rgba(255, 255, 255, 0.5),
                    0 2px 3px rgba(0, 0, 0, 0.5);
        z-index: 2;
    }
</style>