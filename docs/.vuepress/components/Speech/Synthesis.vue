<template>
    <div class="speech-wrapper">
        <el-form v-model="queryParams" label-width="90px" label-position="left">
            <el-form-item label="选择语言:">
                <el-select v-model="queryParams.lang" @change="onChange">
                    <el-option v-for="item in voiceData" :key="item.voiceURI" :value="item.lang" :label="item.lang"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="声音:">
                <span>{{queryParams.voiceURI}}</span>
            </el-form-item>

            <el-form-item label="音量:">
                <el-slider v-model="queryParams.volume" :min="0" :max="1" :step="0.1" show-input></el-slider>
            </el-form-item>

            <el-form-item label="音调:">
                <el-slider v-model="queryParams.pitch" :min="0" :max="2" :step="0.2" show-input></el-slider>
            </el-form-item>

            <el-form-item label="文字:">
                <el-input v-model="queryParams.text" clearable></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSpeak" size="small">朗读</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            voiceData: speechSynthesis.getVoices(),
            queryParams: {
                voiceURI: 'Ting-Ting',
                lang: 'zh-CN',
                volume: 1,
                pitch: 1,
                text: '大家好，我是渣渣辉。'
            },

            speechInstance: null,
        }
    },

    methods: {
        onChange (e) {
            let chosenItem = this.voiceData.filter(item => {
                return e == item.lang;
            });
            this.queryParams.voiceURI = chosenItem[0].voiceURI;
        },

        initSpeech () {
            this.speechInstance = new SpeechSynthesisUtterance();
        },

        onSpeak () {
            Object.keys(this.queryParams).forEach(key => {
                this.speechInstance[key] = this.queryParams[key];
            })

            speechSynthesis.speak(this.speechInstance);
        }
    },

    mounted () {
        let timer = setInterval(() => {
            if(!this.voiceData.length) {
                this.voiceData = speechSynthesis.getVoices();
            } else {
                clearInterval(timer);
            }
        }, 500);

        this.initSpeech();
    }
}
</script>

<style>
    
</style>