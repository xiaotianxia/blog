<template>
    <div class="audio-wrapper">
        <div ref="analyser" class="analyser">
            <canvas ref="canvas" width="100%" height="100"></canvas>
        </div>

        <div class="control">
            <i v-if="loading" class="el-icon-loading"></i>
            <template v-else>
                <i v-if="!playing" class="el-icon-caret-right" @click="onPlay"></i>
                <i v-else class="" @click="onPause">||</i>
            </template>
        </div>
        
        <div class="song">
            <ul>
                <li v-for="(item, index) in songlist" >
                    <a href="javascript:;" @click="play(item.url, index)">{{item.name}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            index: -1,
            loading: false,
            playing: false,
            songlist: [
                {name: 'dornendiamant', url: 'https://reneroth.org/projects/codepen/dornendiamant.ogg'},
                {name: '电台情歌', url: 'https://m10.music.126.net/20180831220555/797bd6a75d20e2372969161d6c79f844/ymusic/9bdc/dad4/9b29/d619d2670a3d21753caedba14440d1a6.mp3'},
                {name: '当你老了', url: 'https://m10.music.126.net/20180831221058/c608c5b5f5531265d0f6f40b66991acf/ymusic/0b8c/4ea6/c957/ddf46174d597d368111db3ff9fbdaa7a.mp3'},
            ]
        }
    },

    methods: {
        initSource () {
            this.audioSource = this.audioCtx.createBufferSource();
            this.audioSource.connect(this.analyser);
            this.audioSource.connect(this.gainNode);
        },

        onPlay () {
            //重新播放需要重新创建buffer
            this.audioSource = this.audioCtx.createBufferSource();
            this.audioSource.connect(this.analyser);
            this.audioSource.connect(this.audioCtx.destination);
            this.audioSource.buffer = this.buffer;
            this.audioSource.loop = true;
            this.audioSource.start(0, this.playResume);

            this.playStart = new Date().getTime() - this.playResume * 1000;

            this.playing = true;
        },

        onPause () {
            this.playResume = new Date().getTime();
            this.playResume -= this.playStart;
            this.playResume /= 1000;
            this.playResume %= this.audioSource.buffer.duration;
            this.audioSource.stop();
            this.playing = false;
        },

        play (url, index) {
            if(this.index == index) return;
            this.index = index;
            
            this.requestSong(url);
        },

        requestSong (url) {
            let request = new XMLHttpRequest();
            request.open("GET", url, true);
            request.responseType = "arraybuffer";

            this.loading = true;
            request.onload = () => {
                this.audioCtx.decodeAudioData(request.response, buffer => {
                    this.loading = false;
                    this.playing = true;

                    this.buffer = buffer;
                    this.playSound(buffer);
                    this.bindDrawEvent();
                });
            };
            request.send();
        },

        playSound (buffer) {
            this.audioSource.buffer = buffer;
            this.audioSource.loop = true;
            this.audioSource.start(0);
            this.playStart = new Date().getTime();
        },

        bindDrawEvent () {
            this.scriptProcessor.onaudioprocess = this.draw;
        },

        renderCanvas () {
            this.canvas = this.$refs['canvas'];
            this.canvasCtx = this.canvas.getContext('2d');
            let analyserWidth = this.$refs['analyser'].offsetWidth;
            this.canvas.width = analyserWidth;
            this.canvasCtx.fillStyle = 'rgb(39, 174, 96)';
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

            this.initSource();
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
    .control {
        font-size: 24px;
        padding-top: 5px;
        text-align: center;
    }
    .control i {
        font-style: normal;
        vertical-align: bottom;
        cursor: pointer;
        user-select: none;
    }
</style>