<template>
	<div class="intersection-wrapper">
		<p v-if="errorMsg" class="txt-red"><i class="el-icon-info"></i>{{errorMsg}}，请更新chrome浏览器查看。</p>
		<div v-else class="wrapper">
			<div class="sectionContent js-content">
				<ul class="list">
					<li v-for="(item, index) in list" class="item js-item">
						<span class="label">{{index + 1}}(<span class="js-span"></span>)</span>
						<div class="cover js-cover">
							<img :src="item.cover" alt="封面">
							<i class="btn-start el-icon-caret-right" @click="onClickCover"></i>
						</div>
						<div class="video js-video hide">
							<video :src="item.url" muted @click="onClickVideo"></video>
						</div>
                        <div class="description">
                            <p style="-webkit-box-orient: vertical;">{{item.description}}</p>
                        </div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			list: [
				{cover: 'http://poijlzkaq.bkt.clouddn.com/3213214321.png', url: 'http://poijlzkaq.bkt.clouddn.com/1552895951232209.mp4', description: '大花猫呀大花猫呀大花猫呀大花猫呀大花猫呀大花猫呀大花猫呀大花猫呀大花猫呀大花猫呀大花猫呀大花猫呀大花猫呀大花猫大花猫呀大花猫大花猫呀大花猫大花猫呀大花猫大花猫呀大花猫大花猫呀大花猫大花猫呀大花猫'},
				{cover: 'http://poijlzkaq.bkt.clouddn.com/143124321.png', url: 'http://poijlzkaq.bkt.clouddn.com/1552895945898993.mp4', description: '小乌龟啊小乌龟啊小乌龟啊小乌龟啊小乌龟啊小乌龟啊小乌龟啊小乌龟啊小乌龟啊小乌龟啊小乌龟啊小乌龟小乌龟啊小乌龟小乌龟啊小乌龟小乌龟啊小乌龟小乌龟啊小乌龟小乌龟啊小乌龟'},
				{cover: 'http://poijlzkaq.bkt.clouddn.com/586337357.png', url: 'http://poijlzkaq.bkt.clouddn.com/1552896499270164.mp4', description: '哈哈哈哈哈哈哈哈哈哈'},
				{cover: 'http://poijlzkaq.bkt.clouddn.com/678976986798.png', url: 'http://poijlzkaq.bkt.clouddn.com/1552896500269933.mp4', description: '嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿'},
				{cover: 'http://poijlzkaq.bkt.clouddn.com/6095487609.png', url: 'http://poijlzkaq.bkt.clouddn.com/1552896502100868.mp4', description: '呵呵呵呵呵呵呵呵'},
				{cover: 'http://poijlzkaq.bkt.clouddn.com/48666754765.png', url: 'http://poijlzkaq.bkt.clouddn.com/1552896503859343.mp4', description: '哈哈哈哈哈哈哈哈哈哈'},
				{cover: 'http://poijlzkaq.bkt.clouddn.com/434689743867.png', url: 'http://poijlzkaq.bkt.clouddn.com/1552896506605984.mp4', description: '哈哈哈哈哈哈哈哈哈哈'},

			],
			errorMsg: ''
		}
	},

	methods: {
		reserveCallback (entries) {
			let ratio = entries[0].intersectionRatio,
				$target = entries[0].target;
			$target.querySelector('.js-span').innerText = ratio;
			if(1 - ratio <= 0.03) {
				this.onPlay($target);
			}
		},

		onPlay ($target) {
			this.onPauseAllVideos();
			let $videoWrapper = $target.querySelector('.js-video'),
                $coverWrapper = $target.querySelector('.js-cover'),
                $video = $videoWrapper.querySelector('video');
			$coverWrapper.classList.add('hide');
			$videoWrapper.classList.remove('hide');
            $video.play().then(() => {
                $video.muted = false;
            });
		},

		onPause ($target) {
			let $videoWrapper = $target.querySelector('.js-video'),
                $coverWrapper = $target.querySelector('.js-cover'),
                $video = $videoWrapper.querySelector('video');
			$coverWrapper.classList.remove('hide');
			$videoWrapper.classList.add('hide');
			$video.muted = true;
			$video.pause();
		},

		onPauseAllVideos () {
			let $items = document.querySelectorAll('.js-item');
			$items.forEach(($item, index) => {
				this.onPause($item);
			});
		},

		onClickCover (e) {
			this.onPauseAllVideos();
			let $cover = e.target,
				$coverWrapper = $cover.parentNode,
                $videoWrapper = $coverWrapper.nextSibling,
                $video = $videoWrapper.querySelector('video');
			$coverWrapper.classList.add('hide');
			$videoWrapper.classList.remove('hide');
			$video.muted = false;
            $video.play();
		},

		onClickVideo (e) {
			let $video = e.target;
			if($video.paused) {
                $video.muted = false;
				$video.play();
			} else {
                $video.muted = true;
				$video.pause();
			}
		},

		addObserver ($targets) {
			for(let i = 0, len = $targets.length; i < len; i ++) {
				this.observer.observe($targets[i]);
			}
		}
	},

	mounted () {
		if(!('IntersectionObserver' in window)) {
  			this.errorMsg = '您的浏览器不支持 IntersectionObserver API';
  			return;
		}

		let $referenceBox = document.querySelector('.js-content'),
			$targets = document.querySelectorAll('.js-item');
			
		this.observer = new IntersectionObserver(this.reserveCallback, {
			root: $referenceBox,
			rootMargin: '0px',
			threshold: [0.7, 0.8, 0.9, 1]
		});

		this.addObserver($targets);
	}
}
</script>

<style scoped>
	ul,
	li {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.intersection-wrapper {
		border: 1px solid #ccc;
		margin: 20px;
		padding: 20px;
		text-align: center;
	}
	.wrapper {
		width: 414px;
		margin: 0 auto;
		background-color: #eee;
		box-sizing: border-box;
	}
	.wrapper .sectionInfo {
		height: 48px;
		line-height: 48px;
		text-align: center;
		background-color: #2c3e50;
		color: #ffffff;
	}
	.wrapper .sectionContent {
		position: relative;
		height: 450px;
		border: 1px solid #ccc;
		padding: 40px 0;
		overflow: auto;
		overscroll-behavior: contain;
        background-color: #000;
	}
	.wrapper .sectionContent::-webkit-scrollbar {
        display: none;
    }
	.wrapper .list .item {
		position: relative;
		height: 280px;
		/* padding: 20px 0; */
		overflow: hidden;
	}
    .wrapper .list .item:not(:last-child) {
		border-bottom: 10px solid #576574;
    }
    .wrapper .list .item:first-child {
    	padding-top: 0;
    }
    .wrapper .list .item:last-child {
    	padding-bottom: 0;
    }
	.wrapper .item .label {
		position: absolute;
		left: 10px;
		top: 10px;
		display: inline-block;
		max-width: 300px;
		height: 30px;
		line-height: 30px;
		padding: 0 10px;
		background-color: rgb(237, 20, 60, .4);
		color: #fff;
		z-index: 10;
	}
    .wrapper .item .cover,
    .wrapper .item .video {
		position: relative;
    	width: 100%;
    	height: 100%;
    	overflow: hidden;
    }
	.wrapper .item .video video {
		width: 100%;
    	height: 100%;
	}
    .wrapper .item .cover.hide,
    .wrapper .item .video.hide {
		display: none;
    }
    .wrapper .item .cover img,
    .wrapper .item .video video,
    .wrapper .item .cover .btn-start {
    	position: absolute;
    	top: 50%;
    	left: 50%;
    	transform: translate(-50%, -50%);
    }
    .wrapper .item .cover img {
    	width: 100%;
    }
    .wrapper .item .cover img {
    	z-index: 1;
    }
    .wrapper .item .cover .btn-start {
		z-index: 2;
		font-size: 4em;
		color: #fff;
    }
    .description {
        position: absolute;
        bottom: 0;
        color: #fff;
        background-color: rgb(0, 0, 0, .4);
        width: 100%;
        padding: 5px;
        z-index: 9;
        font-size: 12px;
        text-align: left;
        box-sizing: border-box;
    }
    .description p {
        padding: 0;
        margin: 0;
        overflow: hidden;
        display: -webkit-box;
        
        -webkit-line-clamp: 2;
        }
</style>