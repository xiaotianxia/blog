<template>
    <div class="audio-wrapper">
        <div ref="analyser" class="analyser">
            <canvas ref="canvas" width="100%" height="100"></canvas>
        </div>
        <h3 class="title">点击播放：</h3>
        <div>
            <audio ref="audio" controls :src="audioSrc"></audio>
        </div>
    </div>
</template>

<script>
import Mixin from './Mixin';

export default {
    mixins: [Mixin],

    data () {
        return {
            activeName: 'element',
            audioSrc: 'https://mp3.ibaotu.com/d007/41155_Happy%20Hop.mp3'
        }
    },

    methods: {
        initAudioSource () {
            this.audioElement = this.$refs['audio'];
            this.audioElement.crossOrigin="anonymous";
            this.audioSource = this.audioCtx.createMediaElementSource(this.audioElement);
            this.audioSource.connect(this.analyser);
            this.audioSource.connect(this.gainNode);

            this.bindDrawEvent();
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