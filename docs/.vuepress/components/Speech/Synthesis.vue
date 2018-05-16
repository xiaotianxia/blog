<template>
    <div class="speech-wrapper" element-loading-text="加载语言包..." v-loading="!voiceData.length">
        <el-form v-model="queryParams" label-width="90px" label-position="left">
            <el-form-item label="文字:">
                <el-input v-model="queryParams.text" type="textarea" :autosize="{ minRows: 2, maxRows: 6}" placeholder="想听啥？"></el-input>
            </el-form-item>

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

            <el-form-item label="语速:">
                <el-slider v-model="queryParams.rate" :min="0" :max="10" :step="1" show-input></el-slider>
            </el-form-item>

            <el-form-item label="音调:">
                <el-slider v-model="queryParams.pitch" :min="0" :max="2" :step="0.2" show-input></el-slider>
            </el-form-item>

            <el-form-item>
                <el-tooltip class="item" effect="dark" content="接口不稳定，有可能没有声音，刷新几次试试？" placement="top">
                    <el-button type="primary" @click="onSpeak" size="small">朗读</el-button>
                </el-tooltip>
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
                rate: 1,
                text: '大扎好，我西渣渣辉。'
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

        onSpeak () {
            this.speechInstance = new SpeechSynthesisUtterance();
            Object.keys(this.queryParams).forEach(key => {
                this.speechInstance[key] = this.queryParams[key];
            })
            console.log(this.speechInstance);

            speechSynthesis.speak(this.speechInstance);
        }
    },

    mounted () {
        let timer = setInterval(() => {
            if(!this.voiceData.length) {
                //获取语言包
                this.voiceData = speechSynthesis.getVoices();
            } else {
                clearInterval(timer);
            }
        }, 500);
    }
}
</script>

<style>
    .speech-wrapper {
        padding-top: 10px;
    }
</style>