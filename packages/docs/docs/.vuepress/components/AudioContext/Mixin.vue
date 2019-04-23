<script>
export default {
    data () {
        return {
            canvas: null,
            canvasCtx: null,
            audioCtx: null,
            gainNode: null,
            analyser: null,
            scriptProcessor: null,
            canvasFillStyle: 'rgb(225, 112, 85)'
        }
    },

    methods: {
        renderCanvas () {
            this.canvas = this.$refs['canvas'];
            this.canvasCtx = this.canvas.getContext('2d');
            let analyserWidth = this.$refs['analyser'].offsetWidth;
            this.canvas.width = analyserWidth;
            this.canvasCtx.fillStyle = this.canvasFillStyle;
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

        bindDrawEvent () {
            this.scriptProcessor.onaudioprocess = this.draw;
        },

        draw () {
            let cWidth = this.canvas.width,
                cHeight = this.canvas.height,
                barWidth = parseInt(.5 * cWidth / this.bufferLength),
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
            this.renderCanvas();
            this.initAudioContext();
            this.initAnalyser();
            this.initGain();
            this.initScriptProcessor();
        }
    },

    mounted () {
        this.init();

        window.onresize = () => {
            this.renderCanvas();
        }
    }
}
</script>