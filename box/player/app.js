var minY = 135; //lowest point
var maxY = 10; //highest point
var pausePosition = 0.75; //position of balls when not playing, percentage
var reverse = false; //reverse lowest and highest
var offsetBalls = true; //mix balls
var smoothFac = 0.85; //value smoothing for ball position
var smoothFacPause = 0.975; //value smoothing when paused
var cutoffLow = 0.1; //percentage of sound spectrum that's cut off from the bottom
var cutoffHigh = 0.65; //percentage of sound spectrum that's cut off from the top
// var songUrl = "https://reneroth.org/projects/codepen/dornendiamant.ogg"; //this needs correct Access-Control-Allow-Origin headers
var songUrl = 'http://p8rbt50i2.bkt.clouddn.com/Do-Re-Mi.mp3';
// var songUrl = 'http://p8rbt50i2.bkt.clouddn.com/Vitas%20-%20Opera%202.mp3'

var $c = $(".control");
var isLoaded = false;
var $d = $(".drop");
if (reverse) {
	var tmp = minY;
	minY = maxY;
	maxY = tmp;
}

$c.click(function(e) {
	e.preventDefault();
	if (!isLoaded) {
		if ($c.hasClass("loading")) {
			return;
		}
		$c.addClass("loading");
		eq.play(songUrl, function() {
			$c.removeClass("loading").addClass("playing");
			isLoaded = true;
		});
	} else {
		if ($c.hasClass("playing")) {
			$c.removeClass("playing");
			eq.stopSound();
		} else {
			$c.addClass("playing");
			eq.replaySound();
		}
	}
});

var offsets = [];

function doRender() {
	requestAnimationFrame(doRender);
	$d.each(function(i) {
		if (offsetBalls) {
			if (i % 2 != 0) {
				i = Math.ceil($d.length / 2) + (i - 1) / 2;
			} else {
				i /= 2;
			}
		}

		if (typeof offsets[i] == "undefined") {
			offsets[i] = 0;
		}
		var a = eq.getSpectrumByPercentage((i + 0) / $d.length) / 255;
		if ($c.hasClass("playing")) {
			offsets[i] = a * (1 - smoothFac) + offsets[i] * smoothFac;
		} else {
			a = pausePosition;
			offsets[i] = a * (1 - smoothFacPause) + offsets[i] * smoothFacPause;
		}
		var y = minY - (minY - maxY) * offsets[i];
		$(this).css("transform", "translateY(" + y + "px)");
	});
}

//this part below is taken and modified from Jaakko Alajoki's pen #rVPGBe
var Equalizer = new Function();
if (!window.AudioContext) {
	if (!window.webkitAudioContext) {
		alert("no audiocontext found");
	}
	window.AudioContext = window.webkitAudioContext;
}
Equalizer.prototype.context = new AudioContext();
Equalizer.prototype.audioBuffer = [];
Equalizer.prototype.sourceNode = {};
Equalizer.prototype.analyser = {};
Equalizer.prototype.javascriptNode = {};
Equalizer.prototype.audioData = [];
Equalizer.prototype.fftSize = 512;
Equalizer.prototype.playStart = 0;
Equalizer.prototype.playResume = 0;
Equalizer.prototype.buffer = [];

Equalizer.prototype.play = function(url, loadCallback) {
	var self = this;
	this.javascriptNode = this.context.createScriptProcessor(2048, 1, 1);
	this.javascriptNode.connect(this.context.destination);
	this.javascriptNode.onaudioprocess = function() {
		self.processAudio();
	};

	this.analyser = this.context.createAnalyser();
	this.analyser.smoothingTimeConstant = 0.2;

	this.analyser.fftSize = this.fftSize;

	this.sourceNode = this.context.createBufferSource();
	this.sourceNode.connect(this.analyser);

	this.analyser.connect(this.javascriptNode);

	this.sourceNode.connect(this.context.destination);

	var request = new XMLHttpRequest();
	request.open("GET", url, true);
	request.responseType = "arraybuffer";

	request.onload = function() {
		self.context.decodeAudioData(request.response, function(buffer) {
			self.buffer = buffer;
			self.playSound(buffer);
			if (typeof loadCallback !== "undefined") {
				loadCallback();
			}
		});
	};
	request.send();
};

Equalizer.prototype.playSound = function(buffer) {
	this.sourceNode.buffer = buffer;
	this.sourceNode.loop = true;
	this.sourceNode.start(0);
	this.playStart = new Date().getTime();
};

Equalizer.prototype.stopSound = function() {
	this.playResume = new Date().getTime();
	this.playResume -= this.playStart;
	this.playResume /= 1000;
	this.playResume %= this.sourceNode.buffer.duration;
	this.sourceNode.stop();
};

Equalizer.prototype.replaySound = function() {
	this.sourceNode = this.context.createBufferSource();
	this.sourceNode.connect(this.analyser);
	this.sourceNode.connect(this.context.destination);
	this.sourceNode.buffer = this.buffer;
	this.sourceNode.loop = true;
	this.sourceNode.start(0, this.playResume);
	this.playStart = new Date().getTime() - this.playResume * 1000;
};

Equalizer.prototype.processAudio = function() {
	this.audioData = new Uint8Array(this.analyser.frequencyBinCount);
	this.analyser.getByteFrequencyData(this.audioData);
};

Equalizer.prototype.getSpectrumByPercentage = function(p) {
	var modLength =
		this.audioData.length -
		Math.floor(
			cutoffLow * this.audioData.length + cutoffHigh * this.audioData.length
		);
	var i = Math.floor(p * modLength + cutoffLow * this.audioData.length);
	return typeof this.audioData[i] !== "undefined" ? this.audioData[i] : 0;
};

var eq = new Equalizer();
doRender();
