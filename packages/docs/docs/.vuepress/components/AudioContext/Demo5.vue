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
import Mixin from './Mixin';

export default {
    mixins: [Mixin],

    data () {
        return {
            index: -1,
            loading: false,
            playing: false,
            canvasFillStyle: 'rgb(241, 196, 15)',
            songlist: [
                {name: '远程音乐', url: 'https://mp3.ibaotu.com/d007/41155_Happy%20Hop.mp3'},
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
        }
    },

    mounted () {
        this.init();
        this.initSource();
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