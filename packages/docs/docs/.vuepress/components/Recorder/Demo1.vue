<template>
    <div class="recorder-wrapper">
        <div class="phone">
            <div class="phone-body">
                <div class="phone-head">
                    <span>&lt; 微信(66)</span>
                    <span>哈哈哈</span>
                    <span>···</span>
                </div>
                <div class="phone-content">
                    <transition-group tag="ul" class="js-msg-list msg-list" name="fade">
                        <li class="msg eg" :key="-1">
                            <div class="avatar"></div>
                            <div class="audio">说话</div>
                        </li>

                        <li v-for="(item, index) in chunkList" :key="index" class="msg" @click="onPlay(index)" @touchend.prevent="onPlay(index)">
                            <div class="avatar"></div>
                            <div class="audio" :style="{width: 20 * item.duration + 'px'}" :class="{wink: item.wink}">
                                <span>(</span><span>(</span><span>(</span>
                            </div>
                            <div class="duration">{{item.duration}}"</div>
                        </li>
                    </transition-group>
                </div>
                <div class="phone-operate" @mousedown="onMousedown" @touchstart.prevent="onMousedown" @mouseup="onMouseup" @touchend.prevent="onMouseup">{{btnText}}</div>
            </div>
        </div>
        <audio ref="audio"></audio>
    </div>
</template>

<script>
export default {
    data () {
        return {
            chunks: [],
            chunkList: [],
            btnText: '按住说话'
        }
    },

    methods: {
        requestMediaAccess () {
            navigator.mediaDevices.getUserMedia({audio: true}).then(stream => {
                this.recorder = new window.MediaRecorder(stream);
                this.bindEvents();
            }, error => {
                alert('出错，请确保已允许浏览器获取录音权限');
            });
        },

        onMousedown (e) {
            this.onStart();
            this.btnText = '松开结束';
        },

        onMouseup () {
            this.onStop();
            this.btnText = '按住说话';
        },

        onStart () {
            this.recorder.start();
        },

        onStop () {
            this.recorder.stop();
        },

        onPlay (index) {
            this.chunkList.forEach(item => {
                this.$set(item, 'wink', false);
            });

            let item = this.chunkList[index];
            this.audio.src = item.stream;
            this.audio.play();

            this.bindAudioEvent(index);
        },

        bindAudioEvent (index) {
            let item = this.chunkList[index];

            this.audio.onplaying = () => {
                this.$set(item, 'wink', true);
            }

            this.audio.onended = () => {
                this.$set(item, 'wink', false);
            }
        },

        bindEvents () {
            this.recorder.ondataavailable = this.getRecordingData;
            this.recorder.onstop = this.saveRecordingData;
        },

        getRecordingData (e) {
            this.chunks.push(e.data);
        },

        saveRecordingData  () {
            let blob = new Blob(this.chunks, { 'type' : 'audio/ogg; codecs=opus' }),
                audioStream = URL.createObjectURL(blob),
                //估算时长
                duration = parseInt(blob.size / 6600);
            if(duration <= 0) {
                alert('说话时间太短');
                return;
            }
            if(duration > 60) {
                duration = 60;
            }
            this.chunkList.push({duration: duration, stream: audioStream});

            this.msgList.scrollBy && this.msgList.scrollBy({ top: 200, left: 0, behavior: 'smooth' });

            this.chunks = [];
        }
    },

    mounted () {
        if (!navigator.mediaDevices) {
            alert('您的浏览器不支持获取用户设备');
            return;
        }
        if (!window.MediaRecorder) {
            alert('您的浏览器不支持录音');
            return;
        }
        this.audio = this.$refs.audio;
        this.msgList = document.querySelector('.js-msg-list');
        this.requestMediaAccess();
    }
}
</script>

<style scoped>
    .recorder-wrapper {
        margin-top: 10px;
        padding: 20px;
        border: 1px solid #00b894;
        user-select:none;
    }
    .phone {
        margin: 0 auto;
        padding: 55px 11px 53px;
        width: 221px;
        height: 448px;
        font-size: 12px;
        border-radius: 35px;
        background-image: url('../../../../../../static/iphone-bg1.png');
        box-sizing: border-box;
    }
    .phone-body {
        height: 100%;
        background-color: #fff;
    }
    .phone-head {
        height: 30px;
        line-height: 30px;
        color: #fff;
        font-weight: bold;
        background-color: #000;
    }
    .phone-head span {
        display: inline-block;
    }
    .phone-head span:nth-child(2) {
        width: 100px;
        text-align: center;
    }
    .phone-head span:nth-child(3) {
        float: right;
        margin-right: 10px;
    }
    .phone-content {
        height: 282px;
        background-color: #f1eded;
    }
    .phone-operate {
        position: relative;
        line-height: 28px;
        text-align: center;
        cursor: pointer;
        font-weight: bold;
        box-shadow: 0 -1px 1px rgba(0, 0, 0, .1);
    }
    .phone-operate:active {
        background-color: #95a5a6;
    }
    .phone-operate:active:before {
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
        top: -2px;
        content: '';
        width: 0%;
        height: 2px;
        background-color: #7bed9f;
        animation: loading 1s ease-in-out infinite backwards;
    }
    .msg-list {
        margin: 0;
        padding: 0;
        height: 100%;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    }
    .msg-list::-webkit-scrollbar {
        display: none;
    }
    .msg-list .msg {
        list-style: none;
        padding: 0 8px;
        margin: 10px 0;
        overflow: hidden;
        cursor: pointer;
    }
    .msg-list .msg .avatar,
    .msg-list .msg .audio,
    .msg-list .msg .duration {
        float: right;
    }
    .msg-list .msg .avatar {
        width: 24px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        background-color: #000;
        background: url('https://denzel.netlify.com/hero.png') 0 0;
        background-size: 100%;
    }
    .msg-list .msg .audio {
        position: relative;
        margin-right: 6px;
        max-width: 116px;
        min-width: 30px;
        height: 24px;
        line-height: 24px;
        padding: 0 4px 0 10px;
        border-radius: 2px;
        color: #000;
        text-align: right;
        background-color: rgba(107, 197, 107, 0.85);
    }
    .msg-list .msg.eg {
        cursor: default;
    }
    .msg-list .msg.eg .audio {
        text-align: left;
    }
    .msg-list .msg .audio:before {
        position: absolute;
        right: -8px;
        top: 8px;
        content: '';
        display: inline-block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 4px;
        border-color: transparent transparent transparent rgba(107, 197, 107, 0.85);
    }
    .msg-list .msg .audio span {
        color: rgba(255, 255, 255, .8);
        display: inline-block;
        transform-origin: center;
    }
    .msg-list .msg .audio span:nth-child(1) {
        font-weight: 400;
    }
    .msg-list .msg .audio span:nth-child(2) {
        transform: scale(0.8);
        font-weight: 500;
    }
    .msg-list .msg .audio span:nth-child(3) {
        transform: scale(0.5);
        font-weight: 700
    }
    .msg-list .msg .audio.wink span {
        animation: wink 1s ease infinite;
    }
    .msg-list .msg .duration {
        margin: 3px 2px;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    @keyframes wink {
        from {
            color: rgba(255, 255, 255, .8);
        }
        to {
            color: rgba(255, 255, 255, .1);
        }
    }
    @keyframes loading {
        from {
            width: 0%;
        }
        to {
            width: 100%;
        }
    }
</style>