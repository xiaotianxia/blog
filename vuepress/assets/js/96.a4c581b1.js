(window.webpackJsonp=window.webpackJsonp||[]).push([[96,94],{2:function(t,i,n){"use strict";n.r(i);var a={data:function(){return{canvas:null,canvasCtx:null,audioCtx:null,gainNode:null,analyser:null,scriptProcessor:null,canvasFillStyle:"rgb(225, 112, 85)"}},methods:{renderCanvas:function(){this.canvas=this.$refs.canvas,this.canvasCtx=this.canvas.getContext("2d");var t=this.$refs.analyser.offsetWidth;this.canvas.width=t,this.canvasCtx.fillStyle=this.canvasFillStyle},initAudioContext:function(){AudioContext||webkitAudioContext?this.audioCtx=new(AudioContext||webkitAudioContext):alert("您的浏览器不支持audioContext!")},initGain:function(){this.gainNode=this.audioCtx.createGain(),this.gainNode.gain.value=1,this.gainNode.connect(this.audioCtx.destination)},initAnalyser:function(){this.analyser=this.audioCtx.createAnalyser(),this.analyser.fftSize=256,this.bufferLength=this.analyser.frequencyBinCount,this.dataArray=new Uint8Array(this.bufferLength)},initScriptProcessor:function(){this.scriptProcessor=this.audioCtx.createScriptProcessor(2048,1,1),this.analyser.connect(this.scriptProcessor),this.scriptProcessor.connect(this.audioCtx.destination)},bindDrawEvent:function(){this.scriptProcessor.onaudioprocess=this.draw},draw:function(){var t,i=this.canvas.width,n=this.canvas.height,a=parseInt(.5*i/this.bufferLength),e=0;this.canvasCtx.clearRect(0,0,i,n),this.analyser.getByteFrequencyData(this.dataArray);for(var s=0;s<this.bufferLength;s++)t=parseInt(.4*this.dataArray[s]),this.canvasCtx.fillRect(e,n-t,a,t),e+=a+3},init:function(){this.renderCanvas(),this.initAudioContext(),this.initAnalyser(),this.initGain(),this.initScriptProcessor()}},mounted:function(){var t=this;this.init(),window.onresize=function(){t.renderCanvas()}}},e=n(1),s=Object(e.a)(a,void 0,void 0,!1,null,null,null);i.default=s.exports},275:function(t,i,n){},321:function(t,i,n){"use strict";var a=n(275);n.n(a).a},419:function(t,i,n){"use strict";n.r(i);var a={mixins:[n(2).default],data:function(){return{index:-1,loading:!1,playing:!1,canvasFillStyle:"rgb(241, 196, 15)",songlist:[{name:"远程音乐",url:"https://reneroth.org/projects/codepen/dornendiamant.ogg"}]}},methods:{initSource:function(){this.audioSource=this.audioCtx.createBufferSource(),this.audioSource.connect(this.analyser),this.audioSource.connect(this.gainNode)},onPlay:function(){this.audioSource=this.audioCtx.createBufferSource(),this.audioSource.connect(this.analyser),this.audioSource.connect(this.audioCtx.destination),this.audioSource.buffer=this.buffer,this.audioSource.loop=!0,this.audioSource.start(0,this.playResume),this.playStart=(new Date).getTime()-1e3*this.playResume,this.playing=!0},onPause:function(){this.playResume=(new Date).getTime(),this.playResume-=this.playStart,this.playResume/=1e3,this.playResume%=this.audioSource.buffer.duration,this.audioSource.stop(),this.playing=!1},play:function(t,i){this.index!=i&&(this.index=i,this.requestSong(t))},requestSong:function(t){var i=this,n=new XMLHttpRequest;n.open("GET",t,!0),n.responseType="arraybuffer",this.loading=!0,n.onload=function(){i.audioCtx.decodeAudioData(n.response,function(t){i.loading=!1,i.playing=!0,i.buffer=t,i.playSound(t),i.bindDrawEvent()})},n.send()},playSound:function(t){this.audioSource.buffer=t,this.audioSource.loop=!0,this.audioSource.start(0),this.playStart=(new Date).getTime()}},mounted:function(){this.init(),this.initSource()}},e=(n(321),n(1)),s=Object(e.a)(a,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"audio-wrapper"},[n("div",{ref:"analyser",staticClass:"analyser"},[n("canvas",{ref:"canvas",attrs:{width:"100%",height:"100"}})]),n("div",{staticClass:"control"},[t.loading?n("i",{staticClass:"el-icon-loading"}):[t.playing?n("i",{on:{click:t.onPause}},[t._v("||")]):n("i",{staticClass:"el-icon-caret-right",on:{click:t.onPlay}})]],2),n("div",{staticClass:"song"},[n("ul",t._l(t.songlist,function(i,a){return n("li",[n("a",{attrs:{href:"javascript:;"},on:{click:function(n){t.play(i.url,a)}}},[t._v(t._s(i.name))])])}))])])},[],!1,null,"d7e974b0",null);i.default=s.exports}}]);