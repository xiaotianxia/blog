<template>
	<div class="mutation-wrapper">
		<div class="wrapper">
			<div class="editBox">
				<div class="listWrapper">
					<ul class="list js-list">
						<li v-for="(item, index) in list" class="item">
							<span class="text">{{item.text}}</span>
							<a class="btn-del" href="javascript:;" @click="onDeleteItem(index);">&times;</a>
						</li>
					</ul>
					<div class="operate">
						<input type="text" @keyup="onAddItem" placeholder="输入文字回车添加">
					</div>
				</div>
			</div>
			<div class="logBox">
				<ul class="list">
					<li v-for="(item, index) in logs" class="item">
						<div>变动类型：{{item.type}}</div>
						<div v-if="item.target && item.addedNodes.length">增加节点：{{item.addedNodes[0].innerHTML}}</div>
						<div v-if="item.target && item.removedNodes.length">删除节点：{{item.removedNodes[0].innerHTML}}</div>
					</li>
				</ul>
				<button @click="onClearLogs">clear</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			list: [
				{text: '测试'},
				{text: '测试测试测试测试测试测试测试测试测试测试测试测试'}
			],

			logs: []
		}
	},

	methods: {
		onAddItem(e) {
			if(e.keyCode == 13) {
				let value = e.target.value;
				this.list.push({
					text: value
				});
				e.target.value = '';
			}
		},

		onDeleteItem (index) {
			this.list.splice(index, 1);
		},

		observerCallBack (mutations) {
			console.log(mutations[0])
			mutations.forEach(mutation => {
				console.log(mutation)
				this.logs.push(mutation)
			});
		},

		onClearLogs () {
			this.logs = [];
		}
	},

	mounted () {
		if(!('MutationObserver' in window)) {
  			alert('您的浏览器不支持 MutationObserver API');
  			return;
		}

		let $list = document.querySelector('.js-list');

		let config = {
			attributes: true, 
			childList: true, 
			characterData: true,
			subtree: true
		};
		let observer = new MutationObserver(this.observerCallBack);
		observer.observe($list, config);
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
	.mutation-wrapper {
		border: 1px solid #ccc;
		margin: 20px;
		padding: 20px;
	}
	.mutation-wrapper .wrapper {
		overflow: hidden;
	}
	.mutation-wrapper .editBox,
	.mutation-wrapper .logBox {
		width: 48%;
		float: left;
		border: 1px solid #000;
		max-height: 500px;
		box-sizing: border-box;
	}
	.mutation-wrapper .editBox {
	 	position: relative;
	 	padding-bottom: 50px; 
	}
	.mutation-wrapper .editBox .list {
		padding-left: 10px;
	}
	.mutation-wrapper .editBox .operate {
		position: absolute;
		bottom: 0;
		width: 100%;
		overflow: hidden;
	}
	.mutation-wrapper .editBox .operate input {
		display: inline-block;
		width: 100%;
		height: 30px;
		line-height: 30px;
		outline: none;
	}
	.mutation-wrapper .editBox .list .item .text {
		display: inline-block;
		width: 90%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		vertical-align: middle;
	}
	.mutation-wrapper .editBox .list .item .btn-del {
		display: inline-block;
		vertical-align: middle;
	}

	.mutation-wrapper .logBox {
		position: relative;
		padding-bottom: 40px;
		margin-left: 2px;
		min-height: 150px;
		background-color: #34495e;
		color: #ecf0f1;
		font-size: 12px;
	}
	.mutation-wrapper .logBox .item {
		padding-left: 10px;
	}
	.mutation-wrapper .logBox .item:not(:last-child) {
		border-bottom: 1px solid rgba(255, 255, 255, .2);
	}
	.logBox button {
		position: absolute;
		bottom: 0;
		width: 100%;
		display: block;
		height: 30px;
		line-height: 30px;
	}
</style>