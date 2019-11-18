<template>
    <div class="reader">
        <div class="reader-text">
            <h2 class="reader-text-item">沙扬娜拉</h2>
            <span v-for="(item, index) in readData.texts" class="reader-text-item" :class="{speak: index === readData.index}">{{item}}</span><br>
        </div>
        <div class="reader-oprations">
            <el-button @click="onRead" type="primary" size="mini">开始</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            params: {
                voiceURI: 'Ting-Ting',
                lang: 'zh-CN',
                volume: 1,
                pitch: 1,
                rate: 1,
                text: ''
            },
            readData: {
                texts: [
                    '最是那一低头的温柔，',
                    '像一朵水莲花不胜凉风的娇羞，',
                    '道一声珍重，道一声珍重，',
                    '那一声珍重里有蜜甜的忧愁——',
                    '沙扬娜拉！',
                ],
                index: 0
            },
            speechInstance: null,
        }
    },

    methods: {
        speak () {
            this.speechInstance = new SpeechSynthesisUtterance();
            Object.keys(this.params).forEach(key => {
                this.speechInstance[key] = this.params[key];
            });
            console.log(this.readData.texts[this.readData.index]);
            this.speechInstance.text = this.readData.texts[this.readData.index];

            typeof speechSynthesis !== "undefined" && speechSynthesis.speak(this.speechInstance);

            this.speechInstance.onend = e => {
                this.readData.index ++;
                if (this.readData.index === this.readData.texts.length) {
                    this.speechInstance = null;
                    return;
                }
                this.speak();
            }
        },

        onRead () {
            this.readData.index = 0;
            this.speak();
        }
    }
}
</script>

<style lang="less" scoped>
    .reader {
        width: 500px;
        margin: 10px auto;

        .reader-text {
            padding: 10px;
            border: 1px solid #000;
            text-align: center;

            .reader-text-item {
                transition: all .2s ease;

                &.speak {
                    background-color: #f39c12;
                    border-radius: 4px;
                }
            }
        }

        .reader-oprations {
            padding: 10px 0;
            text-align: center;
        }
    }
</style>