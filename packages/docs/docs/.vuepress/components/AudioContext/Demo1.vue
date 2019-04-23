<template>
    <div class="audio-wrapper">
        <el-form v-model="queryParams" label-width="120px" label-position="left">
            <el-form-item label="音量:">
                <el-slider v-model="queryParams.gain" :min="0" :max="1" :step="0.1" show-stops show-input></el-slider>
            </el-form-item>

            <el-form-item label="音量变化曲线:">
                <el-select v-model="queryParams.gainChangeType" size="small">
                    <el-option value="linearRampToValueAtTime" label="线性"></el-option>
                    <el-option value="exponentialRampToValueAtTime" label="指数"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="波形:">
                <el-select v-model="queryParams.waveform" size="small">
                    <el-option value="sine" label="sine"></el-option>
                    <el-option value="square" label="square"></el-option>
                    <el-option value="sawtooth" label="sawtooth"></el-option>
                    <el-option value="triangle" label="triangle"></el-option>
                    <el-option value="custom" disabled label="custom"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="频率(Hz):">
                <el-slider v-model="queryParams.frequency" :min="1" :max="2000" :step="10" show-input></el-slider>
            </el-form-item>

            <el-form-item>
                <el-button v-if="!started" type="primary" @click="onStart" size="small">开始</el-button>
                <el-button v-else @click="onStop" size="small">结束</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
const FADING_TIME = 0.5;
export default {
    data () {
        return {
            started: false,
            queryParams: {
                gain: 0.5,
                gainChangeType: 'linearRampToValueAtTime',
                frequency: 196,
                waveform: 'sine'
            }
        }
    },

    methods: {
        init () {
            this.oscillator = this.audioCtx.createOscillator();
            this.gainNode = this.audioCtx.createGain();
        },

        onSet () {
            this.oscillator.type = this.queryParams.waveform;
            this.gainNode.gain.value = this.queryParams.gain;
            this.oscillator.frequency.value = this.queryParams.frequency;
            
            this.oscillator.connect(this.gainNode);
            this.gainNode.connect(this.audioCtx.destination);
        },

        onStart () {
            this.init();
            this.onSet();
            this.oscillator.start();

            this.started = true;
        },

        onStop () {
            this.gainNode.gain[this.queryParams.gainChangeType](0.001, this.audioCtx.currentTime + FADING_TIME);
            this.oscillator.stop(this.audioCtx.currentTime + FADING_TIME);

            this.started = false;
        }
    },

    mounted () {
        if (!AudioContext && !webkitAudioContext) {
            alert('您的浏览器不支持audioContext!');
            return;
        }
        this.audioCtx = new (AudioContext || webkitAudioContext)();
        this.init();
    }
}
</script>

<style scoped>
    .audio-wrapper {
        margin-top: 10px;
        padding: 20px;
        border: 1px solid #00b894
    }
</style>