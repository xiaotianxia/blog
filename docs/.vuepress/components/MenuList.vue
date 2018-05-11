<template>
	<div class="menu-wrapper">
		<ul v-if="menuList.length">
			<li v-for="item in menuList">
				<a :href="item.path">{{item.title}}</a>
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
		let curPath = this.$page.path;
		this.menuList = this.$site.pages.filter(item => {
			return item.path.indexOf(curPath) == 0 && item.path != curPath;
		});
		console.log(this.menuList)
	}
}
</script>

<style>
	
</style>