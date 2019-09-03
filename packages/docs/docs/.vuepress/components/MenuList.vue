<template>
	<div class="menu-wrapper">
		<ul v-if="menuList.length">
			<li v-for="item in menuList">
				<a :href="item.path" target="_blank">{{item.title}}</a>
			</li>
		</ul>
		<p v-else>暂无</p>
	</div>
</template>

<script>
export default {
	data () {
		return {
			menuList: []
		}
	},

	mounted () {
		let curPath = this.$page.path,
			$pages = this.$site.pages || [];
		this.menuList = $pages.filter(item => {
			return item.path.indexOf(curPath) == 0 && item.path != curPath;
		});
	}
}
</script>

<style scoped>
	ul {
		list-style: none;
	}
</style>