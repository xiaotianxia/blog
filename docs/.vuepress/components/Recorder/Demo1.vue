<template>
    <div class="recorder-wrapper">
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
                this.bindRecordEvents();
            }, error => {
                alert('出错，请确保已允许浏览器获取录音权限');
            });
        },

        onStart () {
            this.recorder.start();
        },

        onStop () {
            this.recorder.stop();
        },

        bindRecordEvents () {
            this.recorder.ondataavailable = this.getRecordingData;
            this.recorder.onstop = this.saveRecordingData;
        },

        getRecordingData (e) {
            this.chunks.push(e.data);
        },

        saveRecordingData  () {
            let audioUrl = URL.createObjectURL(new Blob(this.chunks, { 'type' : 'audio/ogg; codecs=opus' }));
            this.audio.setAttribute('src', audioUrl);
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
</style>