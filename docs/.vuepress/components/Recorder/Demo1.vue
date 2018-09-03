<template>
    <div class="recorder-wrapper">
        <div class="phone">
            <div class="phone-body">
                <div class="phone-head">
                    <span>< 微信(66)</span>
                    <span>哈哈哈</span>
                    <span>···</span>
                </div>
                <div class="phone-content">
                    
                </div>
                <div class="phone-operate" @mousedown="onMousedown" @mouseup="onMouseup">按住说话</div>
            </div>
        </div>
        <el-button @click="onStart">开始</el-button>
        <el-button @click="onStop">结束</el-button>
        <audio ref="audio"></audio>
    </div>
</template>

<script>
const FADING_TIME = 0.5;

export default {
    data () {
        return {
            chunks: []
        }
    },

    methods: {
        requestAudioAccess () {
            navigator.mediaDevices.getUserMedia({audio: true}).then(stream => {
                this.recorder = new window.MediaRecorder(stream);
                this.bindEvents();
            }, error => {
                alert('出错，请确保已允许浏览器获取录音权限');
            });
        },

        onMousedown (e) {
            this.onStart()
        },

        onMouseup (e) {
            this.onStop();
        },

        onStart () {
            this.recorder.start();
        },

        onStop () {
            this.recorder.stop();
            console.log(this.audio.duration);
        },

        bindEvents () {
            this.recorder.ondataavailable = this.getRecordingData;
            this.recorder.onstop = this.saveRecordingData;
        },

        getRecordingData (e) {
            this.chunks.push(e.data);
        },

        saveRecordingData  () {
            let audioStream = URL.createObjectURL(new Blob(this.chunks, { 'type' : 'audio/ogg; codecs=opus' }));
            this.audio.setAttribute('src', audioStream);
            this.audio.play();
            this.chunks = [];
        }
    },

    mounted () {
        if (!navigator.mediaDevices) {
            alert('您的浏览器不支持获取用户设备');
            return;
        }
        this.audio = this.$refs.audio;
        this.requestAudioAccess();
    }
}
</script>

<style scoped>
    .recorder-wrapper {
        margin-top: 10px;
        padding: 20px;
        border: 1px solid #00b894;
    }
    .phone {
        margin: 0 auto;
        padding: 55px 11px 53px;
        width: 221px;
        height: 448px;
        font-size: 12px;
        border-radius: 35px;
        background-image: url('http://p8rbt50i2.bkt.clouddn.com/iphone-bg1.png');
        box-sizing: border-box;
        user-select: none;
    }
    .phone-body {
        height: 100%;
        background-color: #fff;
    }
    .phone-head {
        height: 30px;
        line-height: 30px;
        color: #fff;
        background-color: #000;
    }
    .phone-head span {
        display: inline-block;
    }
    .phone-head span:nth-child(2) {
        width: 100px;
        text-align: center;
    }
    .phone-head span:nth-child(3) {
        text-align: right;
    }
    .phone-content {
        height: 282px;
        background-color: #ccc;
    }
    .phone-operate {
        line-height: 28px;
        text-align: center;
        cursor: pointer;
    }
    .phone-operate:active {
        background-color: #ddd;
    }
</style>