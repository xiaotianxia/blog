<template>
	<div class="menu-wrapper">
		<ul v-if="menuList.length">
			<li v-for="item in menuList" :style="{backgroundColor: item.color || '#44A1BE'}">
				<a :href="base + item.path" target="_blank">{{item.title}}</a>
			</li>
		</ul>
		<p v-else>暂无</p>
	</div>
</template>

<script>
export default {
	data () {
		return {
			base: '',
			menuList: [],
			colorList: [
				'#3498db', '#95a5a6', '#16a085', '#74b9ff', 
				'#fab1a0', '#e17055', '#6ab04c', '#0abde3',
				'#519ABE', '#DA3B01', '#880515', '#629F6A',
				'#8BA077', '#DE8CD9', '#227093', '#ffb142',
				'#ff5252', '#ffa801', '#5761BF', '#FF6161',
				'#42A5F5', '#2196F3',  '#FF6E40',  '#607D8B', 
				'#009688',  '#8e44ad',  '#0099BC',  '#6B69D6'
			]
		}
	},

	methods: {
		getRandomColor () {
			let randomNum = Math.floor(Math.random() * this.colorList.length),
				randomColor = this.colorList[randomNum];
			return randomColor;
		}
	},

	mounted () {
		this.base = this.$site.base.substr(0, this.$site.base.lastIndexOf('/'));
		let curPath = this.$page.path,
			$pages = this.$site.pages || [];
		this.menuList = $pages.filter(item => {
			return item.path.indexOf(curPath) == 0 && item.path != curPath;
		});

		this.menuList.forEach(item => {
			item.color = this.getRandomColor();
		});
	}
}
</script>

<style scoped>
	ul {
		list-style: none;
	}

	ul li {
		display: inline-block;
		margin: 8px;
		padding: 8px 16px;
		border-radius: 4px;
	}
	li a {
		color: #fff;
		display: inline-block;
		width: 100%;
		height: 100%;
		text-decoration: none!important;
	}
</style>