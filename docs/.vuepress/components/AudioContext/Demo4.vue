<template>
    <div class="audio-wrapper">
        <div ref="analyser" class="analyser">
            <canvas ref="canvas" width="100%" height="100"></canvas>
        </div>

        <h3 class="title">说话吧！<i class="el-icon-phone-outline"></i></h3>
    </div>
</template>

<script>

export default {
    data () {
        return {}
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

        bindDrawEvent () {
            this.scriptProcessor.onaudioprocess = this.draw;
        },

        renderCanvas () {
            this.canvas = this.$refs['canvas'];
            this.canvasCtx = this.canvas.getContext('2d');
            let analyserWidth = this.$refs['analyser'].offsetWidth;
            this.canvas.width = analyserWidth;
            this.canvasCtx.fillStyle = 'rgb(225, 112, 85)';
        },

        initAudioContext () {
            if (!AudioContext && !webkitAudioContext) {
                alert('您的浏览器不支持audioContext!');
                return;
            }
            this.audioCtx = new (AudioContext || webkitAudioContext)();
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
            let cWidth = this.canvas.width,
                cHeight = this.canvas.height,
                barWidth = parseInt((cWidth / this.bufferLength) * 2),
                barHeight,
                x = 0;
            this.canvasCtx.clearRect(0, 0, cWidth, cHeight);
            this.analyser.getByteFrequencyData(this.dataArray);

            for (var i = 0; i < this.bufferLength; i++) {
                barHeight = parseInt(0.4 * this.dataArray[i]);
                this.canvasCtx.fillRect(x, cHeight - barHeight, barWidth, barHeight);
                x += barWidth + 3;
            }
        },

        init () {
            this.initAudioContext();
            this.initAnalyser();
            this.initGain();
            this.initScriptProcessor();

            this.initAudioSource();
        }
    },

    mounted () {
        this.renderCanvas();
        
        this.init();

        window.onresize = () => {
            this.renderCanvas();
        }
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