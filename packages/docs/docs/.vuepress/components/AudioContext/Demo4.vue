<template>
    <div class="audio-wrapper">
        <div ref="analyser" class="analyser">
            <canvas ref="canvas" width="100%" height="100"></canvas>
        </div>

        <span class="title">点击说话 </span>
        <el-button v-if="isMuted" @click="onRestore" size="small" icon="el-icon-phone-outline"></el-button>
        <el-button v-else @click="onMute" size="small">静音</el-button>
    </div>
</template>

<script>
import Mixin from './Mixin';

export default {
    mixins: [Mixin],

    data () {
        return {
            isMuted: true,
            canvasFillStyle: 'rgb(52, 152, 219)'
        }
    },

    methods: {
        initAudioSource () {
            navigator.mediaDevices.getUserMedia({audio: true}).then(stream => {
                this.audioSource = this.audioCtx.createMediaStreamSource(stream);
                this.audioSource.connect(this.analyser);
                this.audioSource.connect(this.gainNode);
                this.bindDrawEvent();
            }, error => {
                alert('出错，请确保已允许浏览器获取音频权限');
            });
        },

        onMute () {
            this.gainNode.gain.value = 0;
            this.isMuted = true;
        },

        onRestore () {
            this.gainNode.gain.value = 1;
            this.isMuted = false;
        },

        initGain () {
            this.gainNode = this.audioCtx.createGain();
            this.gainNode.gain.value = 0;
            
            this.gainNode.connect(this.audioCtx.destination);
        }
    },

    mounted () {
        this.init();

        this.initAudioSource();
    }
}
</script>

<style scoped>
    .audio-wrapper {
        margin-top: 10px;
        padding: 20px;
        border: 1px solid #00b894;
    }
    canvas {
        background-color: #2c3e50;
    }
    .title {
        font-size: 12px;
    }
</style>