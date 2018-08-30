<template>
    <div class="audio-wrapper">
        <div class="analyser">
            <canvas ref="canvas"></canvas>
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
            // this.audioSource = this.audioCtx.createMediaElementSource(this.audioElement);
            // this.draw();
            // for(var i = 0; i < this.bufferLength; i++) {
                
            // }
        },

        renderMediaPart () {

        },

        renderRemotePart () {

        },

        // draw () {
        //     requestAnimationFrame(this.draw);
        //     this.analyser.getByteFrequencyData(this.dataArray);
        //     console.log(this.dataArray)
        // }
    },

    mounted () {
        if (!AudioContext && !webkitAudioContext) {
            alert('您的浏览器不支持audioContext!');
            return;
        }
        this.audioCtx = new (AudioContext || webkitAudioContext)();

        this.canvas = this.$refs['canvas'];
        this.canvasCtx = this.canvas.getContext('2d');
        
        this.analyser = this.audioCtx.createAnalyser();
        var scriptProcessor = this.audioCtx.createScriptProcessor(2048, 1, 1);

        this.analyser.fftSize = 256;
        this.bufferLength = this.analyser.frequencyBinCount;
        this.dataArray = new Uint8Array(this.bufferLength);
        this.audioElement = this.$refs['audio'];
        this.audioElement.crossOrigin="anonymous";
        this.audioSource = this.audioCtx.createMediaElementSource(this.audioElement);
        

        var gainNode = this.audioCtx.createGain();
        gainNode.gain.value = 0.5;
        this.audioSource.connect(gainNode);
        gainNode.connect(this.audioCtx.destination);

        this.audioSource.connect(this.analyser);
        this.analyser.connect(scriptProcessor);
        scriptProcessor.connect(this.audioCtx.destination);

        var WIDTH = this.canvas.width,
            HEIGHT = this.canvas.height;
        this.canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
        var barWidth = (WIDTH / this.bufferLength) * 2.5;
        var barHeight;
        var x = 0;
        scriptProcessor.onaudioprocess = () => {
            this.analyser.getByteFrequencyData(this.dataArray);
            console.log(this.dataArray)
            
            for(var i = 0; i < this.bufferLength; i++) {
                barHeight = this.dataArray[i];
            console.log(x, HEIGHT - barHeight / 2, barWidth, barHeight / 2)
                this.canvasCtx.fillStyle = 'rgb(255,255,255)';
                this.canvasCtx.fillRect(0, HEIGHT - barHeight / 2, barWidth, barHeight / 2);
                x += barWidth + 1;
            }
        }

        // this.draw()


        // this.onTab();
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
        width: 100%;
        height: 100px;
        background-color: #2c3e50;
    }
</style>