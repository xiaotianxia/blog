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
                    <ul class="msg-list">
                        <li class="msg" @click="onPlay(index)">
                            <div class="avatar"></div>
                            <div class="audio eg">说话</div>
                        </li>

                        <li v-for="(item, index) in chunkList" class="msg" @click="onPlay(index)">
                            <div class="avatar"></div>
                            <div class="audio" :style="{width: 10 * item.duration + 'px'}">
                                <span>(</span><span>(</span><span>(</span>
                            </div>
                            <div class="duration">{{item.duration}}"</div>
                        </li>

                        <li ref="toView"></li>
                    </ul>
                </div>
                <div class="phone-operate" @mousedown="onMousedown" @mouseup="onMouseup">{{btnText}}</div>
            </div>
        </div>
        <audio ref="audio"></audio>
    </div>
</template>

<script>
//TODO: 播放动画，滚动
export default {
    data () {
        return {
            chunks: [],
            chunkList: [],
            btnText: '按住说话'
        }
    },

    methods: {
        requestAudioAccess () {
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

        onMouseup (e) {
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
            let item = this.chunkList[index];
            this.audio.setAttribute('src', item.stream);
            this.audio.play();
        },

        bindEvents () {
            this.recorder.ondataavailable = this.getRecordingData;
            this.recorder.onstop = this.saveRecordingData;
        },

        getRecordingData (e) {
            this.chunks.push(e.data);
        },

        saveRecordingData  () {
            let audioStream = URL.createObjectURL(new Blob(this.chunks, { 'type' : 'audio/ogg; codecs=opus' })),
                duration = parseInt(7 * Math.random() + 3);
            this.chunkList.push({duration: duration, stream: audioStream});
            // this.toView.scrollIntoView();
            this.chunks = [];
        }
    },

    mounted () {
        if (!navigator.mediaDevices) {
            alert('您的浏览器不支持获取用户设备');
            return;
        }
        this.audio = this.$refs.audio;
        this.toView = this.$refs.toView;
        this.requestAudioAccess();
    }
}
</script>

<style scoped>
    .recorder-wrapper {
        margin-top: 10px;
        padding: 20px;
        border: 1px solid #00b894;
    }
    .phone {
        margin: 0 auto;
        padding: 55px 11px 53px;
        width: 221px;
        height: 448px;
        font-size: 12px;
        border-radius: 35px;
        background-image: url('http://p8rbt50i2.bkt.clouddn.com/iphone-bg1.png');
        box-sizing: border-box;
        user-select: none;
    }
    .phone-body {
        height: 100%;
        background-color: #fff;
    }
    .phone-head {
        height: 30px;
        line-height: 30px;
        color: #fff;
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
        line-height: 28px;
        text-align: center;
        cursor: pointer;
    }
    .phone-operate:active {
        background-color: #ddd;
    }
    .msg-list {
        margin: 0;
        padding: 0;
        height: 100%;
        overflow-y: auto;
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
        margin-right: 10px;
        max-width: 150px;
        min-width: 50px;
        height: 24px;
        line-height: 24px;
        padding: 0 4px 0 10px;
        border-radius: 2px;
        color: #000;
        text-align: right;
        background-color: rgba(107, 197, 107, 0.85);
    }
    .msg-list .msg .audio.eg {
        text-align: left;
    }
    .msg-list .msg .audio:before {
        position: absolute;
        right: -11px;
        top: 5px;
        content: '';
        display: inline-block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 6px;
        border-color: transparent transparent transparent rgba(107, 197, 107, 0.85);
    }
    .msg-list .msg .audio span {
        color: rgba(255, 255, 255, .5);
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
    .msg-list .msg .duration {
        margin: 3px 2px;
    }
    .toView {
        position: relative;
        top: 10px;
        height: 5px;
        margin-top: 5px;
    }
</style>