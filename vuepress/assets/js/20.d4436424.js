(window.webpackJsonp=window.webpackJsonp||[]).push([[20,80],{335:function(t,i,n){"use strict";n.r(i);var s=n(330),a=n.n(s),e=(n(337),{data:function(){return{canvas:null,canvasCtx:null,audioCtx:null,gainNode:null,analyser:null,scriptProcessor:null,canvasFillStyle:"rgb(225, 112, 85)"}},methods:{renderCanvas:function(){this.canvas=this.$refs.canvas,this.canvasCtx=this.canvas.getContext("2d");var t=this.$refs.analyser.offsetWidth;this.canvas.width=t,this.canvasCtx.fillStyle=this.canvasFillStyle},initAudioContext:function(){AudioContext||webkitAudioContext?this.audioCtx=new(AudioContext||webkitAudioContext):alert("您的浏览器不支持audioContext!")},initGain:function(){this.gainNode=this.audioCtx.createGain(),this.gainNode.gain.value=1,this.gainNode.connect(this.audioCtx.destination)},initAnalyser:function(){this.analyser=this.audioCtx.createAnalyser(),this.analyser.fftSize=256,this.bufferLength=this.analyser.frequencyBinCount,this.dataArray=new Uint8Array(this.bufferLength)},initScriptProcessor:function(){this.scriptProcessor=this.audioCtx.createScriptProcessor(2048,1,1),this.analyser.connect(this.scriptProcessor),this.scriptProcessor.connect(this.audioCtx.destination)},bindDrawEvent:function(){this.scriptProcessor.onaudioprocess=this.draw},draw:function(){var t,i=this.canvas.width,n=this.canvas.height,s=a()(.5*i/this.bufferLength),e=0;this.canvasCtx.clearRect(0,0,i,n),this.analyser.getByteFrequencyData(this.dataArray);for(var o=0;o<this.bufferLength;o++)t=a()(.4*this.dataArray[o]),this.canvasCtx.fillRect(e,n-t,s,t),e+=s+3},init:function(){this.renderCanvas(),this.initAudioContext(),this.initAnalyser(),this.initGain(),this.initScriptProcessor()}},mounted:function(){var t=this;this.init(),window.onresize=function(){t.renderCanvas()}}}),o=n(12),r=Object(o.a)(e,void 0,void 0,!1,null,null,null);i.default=r.exports},370:function(t,i,n){},525:function(t,i,n){"use strict";var s=n(370);n.n(s).a},586:function(t,i,n){"use strict";n.r(i);var s={mixins:[n(335).default],data:function(){return{activeName:"element",audioSrc:"https://mp3.ibaotu.com/d007/41155_Happy%20Hop.mp3"}},methods:{initAudioSource:function(){this.audioElement=this.$refs.audio,this.audioElement.crossOrigin="anonymous",this.audioSource=this.audioCtx.createMediaElementSource(this.audioElement),this.audioSource.connect(this.analyser),this.audioSource.connect(this.gainNode),this.bindDrawEvent()}},mounted:function(){this.init(),this.initAudioSource()}},a=(n(525),n(12)),e=Object(a.a)(s,function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"audio-wrapper"},[i("div",{ref:"analyser",staticClass:"analyser"},[i("canvas",{ref:"canvas",attrs:{width:"100%",height:"100"}})]),this._v(" "),i("h3",{staticClass:"title"},[this._v("点击播放：")]),this._v(" "),i("div",[i("audio",{ref:"audio",attrs:{controls:"",src:this.audioSrc}})])])},[],!1,null,"48420484",null);i.default=e.exports}}]);