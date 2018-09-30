<template>
	<div class="intersection-wrapper">
		<div class="wrapper">
			<div class="sectionInfo"></div>
			<div class="sectionContent js-content">
				<ul class="list">
					<li class="item">
						<div class="cover js-cover">
							<img src="https://wx1.sinaimg.cn/large/764d0c29ly1fvrk7lg8nij20g80dcmxr.jpg" alt="封面">
							<i class="btn-start el-icon-caret-right"></i>
						</div>
					</li>
					<li class="item">
						<div class="cover js-cover">
							<img src="https://wx1.sinaimg.cn/large/764d0c29ly1fvrk7lg8nij20g80dcmxr.jpg" alt="封面">
							<i class="btn-start el-icon-caret-right"></i>
						</div>
					</li>
					<li class="item">
						<div class="cover js-cover">
							<img src="https://wx1.sinaimg.cn/large/764d0c29ly1fvrk7lg8nij20g80dcmxr.jpg" alt="封面">
							<i class="btn-start el-icon-caret-right"></i>
						</div>
					</li>
					<li class="item">
						<div class="cover js-cover">
							<img src="https://wx1.sinaimg.cn/large/764d0c29ly1fvrk7lg8nij20g80dcmxr.jpg" alt="封面">
							<i class="btn-start el-icon-caret-right"></i>
						</div>
					</li>
					<li class="item js-item">
						<div class="cover js-cover">
							<img src="https://wx1.sinaimg.cn/large/74cd34adly1fvogc7wyf3j20dc0dct9g.jpg" alt="封面">
							<i class="btn-start el-icon-caret-right"></i>
						</div>
					</li>
					<li class="item">
						<div class="cover js-cover">
							<img src="https://wx1.sinaimg.cn/large/764d0c29ly1fvrk7lg8nij20g80dcmxr.jpg" alt="封面">
							<i class="btn-start el-icon-caret-right"></i>
						</div>
					</li>
					<li class="item">
						<div class="cover js-cover">
							<img src="https://wx1.sinaimg.cn/large/764d0c29ly1fvrk7lg8nij20g80dcmxr.jpg" alt="封面">
							<i class="btn-start el-icon-caret-right"></i>
						</div>
					</li>
					<li class="item">
						<div class="cover js-cover">
							<img src="https://wx1.sinaimg.cn/large/764d0c29ly1fvrk7lg8nij20g80dcmxr.jpg" alt="封面">
							<i class="btn-start el-icon-caret-right"></i>
						</div>
					</li>
					<li class="item">
						<div class="cover js-cover">
							<img src="https://wx1.sinaimg.cn/large/764d0c29ly1fvrk7lg8nij20g80dcmxr.jpg" alt="封面">
							<i class="btn-start el-icon-caret-right"></i>
						</div>
					</li>
					<!-- <li v-for="item in list" class="item">
						<div class="cover js-cover">
							<img :src="item.cover" alt="封面">
							<i class="btn-start el-icon-caret-right"></i>
						</div>
						<div class="video js-video" style="display: none;">
							<video :src="item.url"></video>
						</div>
					</li> -->
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
				{cover: 'https://wx1.sinaimg.cn/large/764d0c29ly1fvrk7lg8nij20g80dcmxr.jpg', url: 'https://f.us.sinaimg.cn/003aDc9ulx07o20xPZRe010402003Jk20k010.mp4?label=mp4_ld&template=436x360.28&Expires=1538293601&ssig=tSf37J1HJQ&KID=unistore,video'},
				{cover: 'https://wx1.sinaimg.cn/large/74cd34adly1fvogc7wyf3j20dc0dct9g.jpg', url: 'https://f.us.sinaimg.cn/000ud0ktlx07o20A395K010402000IUs0k010.mp4?label=mp4_ld&template=360x360.28&Expires=1538293708&ssig=2mmJL%2BtKSm&KID=unistore,video'},
				{cover: 'https://wx1.sinaimg.cn/large/764d0c29ly1fvrk7lg8nij20g80dcmxr.jpg', url: 'https://f.us.sinaimg.cn/003aDc9ulx07o20xPZRe010402003Jk20k010.mp4?label=mp4_ld&template=436x360.28&Expires=1538293601&ssig=tSf37J1HJQ&KID=unistore,video'},
				{cover: 'https://wx1.sinaimg.cn/large/74cd34adly1fvogc7wyf3j20dc0dct9g.jpg', url: 'https://f.us.sinaimg.cn/000ud0ktlx07o20A395K010402000IUs0k010.mp4?label=mp4_ld&template=360x360.28&Expires=1538293708&ssig=2mmJL%2BtKSm&KID=unistore,video'},
			]
		}
	},

	methods: {
		callback (entries) {
			let ratio = entries[0].intersectionRatio;
			if(1 - ratio <= 0.01) {
				this.onPlay();
			}
		},

		onPlay () {
			console.log('play')
			//停止其他视频
		},

		addObserver () {

		}
	},

	mounted () {
		if(!('IntersectionObserver' in window)) {
  			alert('您的浏览器不支持该API');
  			return;
		}

		let $referenceBox = document.querySelector('.js-content');
		let $target = document.querySelector('.js-item');

		this.observer = new IntersectionObserver(this.callback, {
			root: $referenceBox,
			rootMargin: '0px',
			threshold: [1]
		});

		this.observer.observe($target);
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
		height: 100px;
		background-color: #2c3e50;
	}
	.wrapper .sectionContent {
		position: relative;
		height: 736px;
		border: 1px solid #ccc;
	}
	.wrapper .list {
		height: 100%;
		overflow: auto;
	}
	.wrapper .list::-webkit-scrollbar {
        display: none;
    }
    .wrapper .list .item {
		height: 200px;
		padding: 20px 0;
		overflow: hidden;
    }
    .wrapper .list .item:first-child {
    	padding-top: 0;
    }
    .wrapper .list .item:last-child {
    	padding-bottom: 0;
    }
    .wrapper .item .cover,
    .wrapper .item .video {
		position: relative;
    	width: 100%;
    	height: 100%;
    	overflow: hidden;
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
    .wrapper .item .video {

    }
    .wrapper .item .video video {

    }
</style>