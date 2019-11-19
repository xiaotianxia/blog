<template>
    <div class="reader">
        <div class="reader-text js-reader-text">
            <h2 class="reader-text-title">
                {{readData.title}}
                <p class="author"> —— {{readData.author}}</p>
            </h2>

            <span v-for="(item, index) in readData.texts" class="reader-text-item" :class="{speak: index === readData.index, 'js-next': index === (readData.index + 1 >= readData.length ? readData.length - 1 : readData.index + 1)}">{{item}}<br></span>
        </div>
        <div class="reader-oprations">
            <el-button v-if="!reading" @click="onRead" type="primary" size="mini">朗读</el-button>
            <el-button v-else @click="onStop" size="mini">停止</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            reading: false,
            params: {
                voiceURI: 'Ting-Ting',
                lang: 'zh-CN',
                volume: 1,
                pitch: 1,
                rate: 1,
                text: ''
            },
            readData: {
                title: '再别康桥',
                author: '作者: 徐志摩',
                texts: [
                    '轻轻的我走了，',
                    '正如我轻轻的来；',
                    '我轻轻的招手，',
                    '作别西天的云彩。',
                    '那河畔的金柳，',
                    '是夕阳中的新娘；',
                    '波光里的艳影，',
                    '在我的心头荡漾。',
                    '软泥上的青荇，',
                    '油油的在水底招摇；',
                    '在康河的柔波里，',
                    '我甘心做一条水草！',
                    '那榆荫下的一潭，',
                    '不是清泉，',
                    '是天上虹；',
                    '揉碎在浮藻间，',
                    '沉淀着彩虹似的梦。',
                    '寻梦？撑一支长篙，',
                    '向青草更青处漫溯；',
                    '满载一船星辉，',
                    '在星辉斑斓里放歌。',
                    '但我不能放歌，',
                    '悄悄是别离的笙箫；',
                    '夏虫也为我沉默，',
                    '沉默是今晚的康桥！',
                    '悄悄的我走了，',
                    '正如我悄悄的来；',
                    '我挥一挥衣袖，',
                    '不带走一片云彩。',
                ],
                index: -1
            },
            speechInstance: null,
        }
    },

    methods: {
        speak () {
            if (this.speechInstance) {
                this.readData.index ++;
                console.log(this.readData.texts[this.readData.index]);
                this.speechInstance.text = this.readData.texts[this.readData.index];
                typeof speechSynthesis !== "undefined" && speechSynthesis.speak(this.speechInstance);

                this.bindEvents();
            }
        },

        bindEvents () {
            this.speechInstance.onend = e => {
                if (this.readData.index === this.readData.texts.length) {
                    speechSynthesis.cancel();
                    return;
                }
                this.scroll();
                this.speak();
            }

            this.speechInstance.onstart= () => {
                this.reading = true;
            }
        },

        scroll () {
            this.$reader.querySelector('.js-next').scrollIntoViewIfNeeded({
                block: 'center',
                behavior: 'smooth'
            });
        },

        onRead () {
            this.onStop();

            this.speechInstance = new SpeechSynthesisUtterance();
            Object.keys(this.params).forEach(key => {
                this.speechInstance[key] = this.params[key];
            });

            this.speak();
        },

        onStop () {
            speechSynthesis.cancel();
            this.speechInstance = null;
            this.readData.index = -1;
            this.reading = false;
        }
    },

    mounted () {
        this.$reader = document.querySelector('.js-reader-text');
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
            background-color: #fffbf6;
            text-align: center;
            margin: 0 auto;
            width: 350px;
            max-height: 400px;
            overflow: auto;

            .reader-text-title {
                font-size: 14px;

                .author {
                    text-align: right;
                    font-size: 12px;
                    padding: 0;
                    margin: 0;
                }
            }

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