<template>
    <div class="audio-wrapper">
        <div ref="analyser" class="analyser">
            <canvas ref="canvas" width="100%" height="100"></canvas>
        </div>
        
        <div class="file">
            <input type="file" ref="fileInput" accept="audio/*" @change="onProcessFile">
            <el-button v-if="showCancel" @click="onCancel" size="small">取消</el-button>
        </div>
    </div>
</template>

<script>
import Mixin from './Mixin';

export default {
    mixins: [Mixin],

    data () {
        return {
            showCancel: false,
            canvasFillStyle: 'rgb(125, 95, 255)'
        }
    },

    methods: {
        onProcessFile (e) {
            this.file = e.target.files[0];
            let stream = URL.createObjectURL(this.file),
                audio = new Audio();
            audio.src = stream;

            this.init();

            audio.oncanplay = this.initAudioSource(audio);
            this.showCancel = true;
        },

        onCancel () {
            this.audioCtx.state != 'closed' && this.audioCtx.close();
            URL.revokeObjectURL(this.file);

            this.fileInput.value = ''; 
            this.showCancel = false;
        },

        initAudioSource (audio) {
            this.fileInput = this.$refs['fileInput'];
            this.audioSource = this.audioCtx.createMediaElementSource(audio);
            this.audioSource.connect(this.analyser);
            this.audioSource.connect(this.gainNode);

            audio.play();
            this.bindDrawEvent();
        }
    },

    mounted () {}
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
    .file {
        padding-top: 5px;
        text-align: center;
    }
</style>