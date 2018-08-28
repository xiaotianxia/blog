<template>
    <div class="audio-wrapper">
        <ul class="piano">
            <template v-for="(item, index) in FREQUENCY_LIST">
                <li v-if="index == 1 || index == 3 || index == 6 || index == 8 || index == 10" class="key black" @click="onPlay(item)"></li>
                <li v-else class="key white" @click="onPlay(item)"></li>
            </template>
        </ul>
    </div>
</template>

<script>
const FADING_TIME = 0.5;

export default {
    data () {
        return {
            FREQUENCY_LIST: [261.626, 277.183, 293.665, 311.127, 329.628, 349.228, 369.994, 391.995, 415.305, 440.000, 466.164, 493.883],
            queryParams: {
                gain: 0.5,
                frequency: 196,
                waveform: 'sine'
            }
        }
    },

    methods: {
        init () {
            this.oscillator = this.audioCtx.createOscillator();
            this.gainNode = this.audioCtx.createGain();
       
            this.oscillator.type = this.queryParams.waveform;
            this.gainNode.gain.value = this.queryParams.gain;

            this.oscillator.connect(this.audioCtx.destination);
            this.oscillator.connect(this.gainNode);
        },

        onPlay (item) {
            this.init()
            this.oscillator.frequency.value = item;
            this.oscillator.start(this.audioCtx.currentTime);
            this.oscillator.stop(this.audioCtx.currentTime + FADING_TIME);
        }
    },

    mounted () {
        this.audioCtx = new (AudioContext || webkitAudioContext)();
        this.init();
    }
}
</script>

<style scoped>
    .audio-wrapper {
        margin-top: 10px;
        padding: 20px;
        border: 1px solid #00b894;
    }
    .piano {
        padding-bottom: 20px;
        background-color: #2f3640;
        text-align: center;
        user-select: none;
        overflow: hidden;
    }
    .key {
        position: relative;
        display: inline-block;
        vertical-align: top;
        cursor: -webkit-grab;
        cursor: grab;
    }
    .key:active {
        top: -2px;
    }
    .white {
        width: 12.5%;
        height: 250px;
        background-color: white;
        box-shadow: inset 0 1px 0 white, 
                    inset 0 -1px 0 white, 
                    inset 1px 0 0 white, 
                    inset -1px 0 0 white, 
                    0 4px 3px rgba(0, 0, 0, 0.6), 
                    inset 0 -1px 0 white, inset 1px 0 0 white, 
                    inset -1px -1px 15px rgba(0, 0, 0, 0.6), 
                    -3px 4px 6px rgba(0, 0, 0, 0.6);
    }
    .black {
        top: 0;
        margin-left: -4%;
        margin-right: -4%;
        width: 7%;
        height: 120px;
        background-color: black;
        border-width: 1px 3px 8px;
        border-style: solid;
        border-color: #666 #222 #111 #555;
        box-shadow: inset 0 -1px 2px rgba(255, 255, 255, 0.5),
                    0 2px 3px rgba(0, 0, 0, 0.5);
        z-index: 2;
    }
</style>