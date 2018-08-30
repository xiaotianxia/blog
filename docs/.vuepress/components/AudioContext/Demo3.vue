<template>
    <div class="audio-wrapper">
        <div ref="analyser" class="analyser">
            <canvas ref="canvas" width="100%" height="100"></canvas>
        </div>
        <el-tabs v-model="activeName" type="border-card" @tab-click="onTab">
            <el-tab-pane label="从页面audio元素获取" name="element">
                <audio ref="audio" controls :src="audioSrc"></audio>
            </el-tab-pane>
            <el-tab-pane label="从用户音频设备获取" name="media">2</el-tab-pane>
            <el-tab-pane label="ajax远程获取" name="remote">3</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>

export default {
    data () {
        return {
            activeName: 'element',
            audioSrc: 'https://reneroth.org/projects/codepen/dornendiamant.ogg'
        }
    },

    methods: {
        onTab (e) {
            if (this.activeName == 'element') {
                this.renderElementPart();
            } else if (this.activeName == 'media') {
                this.renderMediaPart();
            } else {
                this.renderRemotePart();
            }
        },

        renderElementPart () {
            this.audioElement = this.$refs['audio'];
            this.audioElement.crossOrigin="anonymous";
            this.audioSource = this.audioCtx.createMediaElementSource(this.audioElement);
            this.audioSource.connect(this.analyser);

            this.audioSource.connect(this.gainNode);

            this.scriptProcessor.onaudioprocess = this.draw;
        },

        renderMediaPart () {

        },

        renderRemotePart () {

        },

        initAudioContext () {
            if (!AudioContext && !webkitAudioContext) {
                alert('您的浏览器不支持audioContext!');
                return;
            }
            this.audioCtx = new (AudioContext || webkitAudioContext)();
        },

        renderCanvas () {
            this.canvas = this.$refs['canvas'];
            this.canvasCtx = this.canvas.getContext('2d');
            let analyserWidth = this.$refs['analyser'].offsetWidth;
            this.canvas.width = analyserWidth;
            this.canvasCtx.fillStyle = 'rgb(225, 112, 85)';
        },

        initGain () {
            this.gainNode = this.audioCtx.createGain();
            this.gainNode.gain.value = 1;
            
            this.gainNode.connect(this.audioCtx.destination);
        },

        initAnalyser () {
            this.analyser = this.audioCtx.createAnalyser();
            this.analyser.fftSize = 256;
            this.bufferLength = this.analyser.frequencyBinCount;
            this.dataArray = new Uint8Array(this.bufferLength);
        },

        initScriptProcessor () {
            this.scriptProcessor = this.audioCtx.createScriptProcessor(2048, 1, 1);
            this.analyser.connect(this.scriptProcessor);
            this.scriptProcessor.connect(this.audioCtx.destination);
        },

        draw () {
            let WIDTH = this.canvas.width,
                HEIGHT = this.canvas.height,
                barWidth = parseInt((WIDTH / this.bufferLength) * 2),
                barHeight,
                x = 0;
            this.canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
            this.analyser.getByteFrequencyData(this.dataArray);

            for (var i = 0; i < this.bufferLength; i++) {
                barHeight = parseInt(0.8 * this.dataArray[i]);
                console.log(barHeight);
                this.canvasCtx.fillRect(x, HEIGHT - barHeight / 2, barWidth, barHeight / 2);
                x += barWidth + 3;
            }
        }
    },

    mounted () {
        this.initAudioContext();

        this.renderCanvas();
        
        this.initAnalyser();
        this.initGain();
        this.initScriptProcessor();

        this.onTab();
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
</style>