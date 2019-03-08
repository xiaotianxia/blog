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
				{cover: 'https://wx1.sinaimg.cn/large/764d0c29ly1fvrk7lg8nij20g80dcmxr.jpg', url: 'http://pn4meizzc.bkt.clouddn.com/video.ogv'},
				{cover: 'https://wx1.sinaimg.cn/large/74cd34adly1fvogc7wyf3j20dc0dct9g.jpg', url: 'http://pn4meizzc.bkt.clouddn.com/video.ogv'},
				{cover: 'https://wx1.sinaimg.cn/large/764d0c29ly1fvrk7lg8nij20g80dcmxr.jpg', url: 'http://pn4meizzc.bkt.clouddn.com/video.ogv'},
				{cover: 'https://wx1.sinaimg.cn/large/74cd34adly1fvogc7wyf3j20dc0dct9g.jpg', url: 'http://pn4meizzc.bkt.clouddn.com/video.ogv'},
				{cover: 'https://wx1.sinaimg.cn/large/74cd34adly1fvogc7wyf3j20dc0dct9g.jpg', url: 'http://pn4meizzc.bkt.clouddn.com/video.ogv'},
				{cover: 'https://wx1.sinaimg.cn/large/74cd34adly1fvogc7wyf3j20dc0dct9g.jpg', url: 'http://pn4meizzc.bkt.clouddn.com/video.ogv'},
				{cover: 'https://wx1.sinaimg.cn/large/74cd34adly1fvogc7wyf3j20dc0dct9g.jpg', url: 'http://pn4meizzc.bkt.clouddn.com/video.ogv'},
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
				$coverWrapper = $target.querySelector('.js-cover');
			$coverWrapper.classList.add('hide');
			$videoWrapper.classList.remove('hide');
			$videoWrapper.querySelector('video').play();
		},

		onPause ($target) {
			let $videoWrapper = $target.querySelector('.js-video'),
				$coverWrapper = $target.querySelector('.js-cover');
			$coverWrapper.classList.remove('hide');
			$videoWrapper.classList.add('hide');
			$videoWrapper.querySelector('video').pause();
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
				$videoWrapper = $coverWrapper.nextSibling;
			$coverWrapper.classList.add('hide');
			$videoWrapper.classList.remove('hide');
			$videoWrapper.querySelector('video').play();
		},

		onClickVideo (e) {
			let $video = e.target;
			if($video.paused) {
				$video.play();
			} else {
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
		color: #fff;
	}
	.wrapper .sectionContent {
		position: relative;
		height: 450px;
		border: 1px solid #ccc;
		padding: 40px 0;
		overflow: auto;
		overscroll-behavior: contain;
	}
	.wrapper .sectionContent::-webkit-scrollbar {
        display: none;
    }
	.wrapper .list .item {
		position: relative;
		height: 280px;
		padding: 20px 0;
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
		background-color: crimson;
		border-radius: 8px;
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
</style>