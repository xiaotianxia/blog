(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{368:function(e,t,a){},520:function(e,t,a){"use strict";var i=a(368);a.n(i).a},584:function(e,t,a){"use strict";a.r(t);var i={data:function(){return{started:!1,queryParams:{gain:.5,gainChangeType:"linearRampToValueAtTime",frequency:196,waveform:"sine"}}},methods:{init:function(){this.oscillator=this.audioCtx.createOscillator(),this.gainNode=this.audioCtx.createGain()},onSet:function(){this.oscillator.type=this.queryParams.waveform,this.gainNode.gain.value=this.queryParams.gain,this.oscillator.frequency.value=this.queryParams.frequency,this.oscillator.connect(this.gainNode),this.gainNode.connect(this.audioCtx.destination)},onStart:function(){this.init(),this.onSet(),this.oscillator.start(),this.started=!0},onStop:function(){this.gainNode.gain[this.queryParams.gainChangeType](.001,this.audioCtx.currentTime+.5),this.oscillator.stop(this.audioCtx.currentTime+.5),this.started=!1}},mounted:function(){AudioContext||webkitAudioContext?(this.audioCtx=new(AudioContext||webkitAudioContext),this.init()):alert("您的浏览器不支持audioContext!")}},s=(a(520),a(12)),r=Object(s.a)(i,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"audio-wrapper"},[a("el-form",{attrs:{"label-width":"120px","label-position":"left"},model:{value:e.queryParams,callback:function(t){e.queryParams=t},expression:"queryParams"}},[a("el-form-item",{attrs:{label:"音量:"}},[a("el-slider",{attrs:{min:0,max:1,step:.1,"show-stops":"","show-input":""},model:{value:e.queryParams.gain,callback:function(t){e.$set(e.queryParams,"gain",t)},expression:"queryParams.gain"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"音量变化曲线:"}},[a("el-select",{attrs:{size:"small"},model:{value:e.queryParams.gainChangeType,callback:function(t){e.$set(e.queryParams,"gainChangeType",t)},expression:"queryParams.gainChangeType"}},[a("el-option",{attrs:{value:"linearRampToValueAtTime",label:"线性"}}),e._v(" "),a("el-option",{attrs:{value:"exponentialRampToValueAtTime",label:"指数"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"波形:"}},[a("el-select",{attrs:{size:"small"},model:{value:e.queryParams.waveform,callback:function(t){e.$set(e.queryParams,"waveform",t)},expression:"queryParams.waveform"}},[a("el-option",{attrs:{value:"sine",label:"sine"}}),e._v(" "),a("el-option",{attrs:{value:"square",label:"square"}}),e._v(" "),a("el-option",{attrs:{value:"sawtooth",label:"sawtooth"}}),e._v(" "),a("el-option",{attrs:{value:"triangle",label:"triangle"}}),e._v(" "),a("el-option",{attrs:{value:"custom",disabled:"",label:"custom"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"频率(Hz):"}},[a("el-slider",{attrs:{min:1,max:2e3,step:10,"show-input":""},model:{value:e.queryParams.frequency,callback:function(t){e.$set(e.queryParams,"frequency",t)},expression:"queryParams.frequency"}})],1),e._v(" "),a("el-form-item",[e.started?a("el-button",{attrs:{size:"small"},on:{click:e.onStop}},[e._v("结束")]):a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.onStart}},[e._v("开始")])],1)],1)],1)},[],!1,null,"f2c0b5e4",null);t.default=r.exports}}]);