<template>
	<div class="mutation-wrapper">
		<p v-if="errorMsg != ''" class="txt-red"><i class="el-icon-info"></i>{{errorMsg}}，请更新chrome浏览器查看。</p>
		<div v-else class="wrapper">
			<div class="editBox">
				<div class="btns">
					<button @click="onAddAttr">添加\删除属性</button>
					<button @click="onEditStyle">修改样式</button>
				</div>
				<div class="listWrapper">
					<ul class="list js-list">
						<li v-for="(item, index) in list" contenteditable class="item">
							<span class="text">{{item.text}}</span>
							<a class="btn-del" href="javascript:;" @click="onDeleteItem(index);">&times;</a>
						</li>
					</ul>
				</div>
				<div class="operate">
					<input type="text" @keyup="onAddItem" placeholder="输入文字回车添加节点">
				</div>
			</div>
			<div class="logBox">
				<button @click="onClearLogs">清空</button>
				<div class="listWrapper">
					<ul class="list">
						<li v-for="(item, index) in logs" class="item">
							<div>变动类型：{{item.type}}</div>
							<div v-if="item.addedNodes.length">增加节点：{{item.addedNodes[0].innerHTML}}</div>
							<div v-if="item.removedNodes.length">删除节点：{{item.removedNodes[0].innerHTML}}</div>
							<div v-if="item.target.data">变化内容 text：{{item.data}}</div>
							<div v-if="item.attributeName">变化属性：{{item.attributeName}}</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			list: [
				{text: '测试 可编辑文本'}
			],
			errorMsg: '',
			logs: []
		}
	},

	methods: {
		onAddItem(e) {
			if(e.keyCode == 13) {
				let value = e.target.value;
				if(value == '') { return; }
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
			let mutation = mutations[0];
			console.log(mutation);
			this.logs.unshift({
				type: mutation.type,
				attributeName: mutation.attributeName,
				target: mutation.target,
				data: mutation.target.data,
				addedNodes: mutation.addedNodes,
				removedNodes: mutation.removedNodes
			});
		},

		onClearLogs () {
			this.logs = [];
		},

		onAddAttr () {
			if(this.$list.hasAttribute('d')) {
				this.$list.removeAttribute('d');
			} else {
				this.$list.setAttribute('d', 'test');
			}
		},

		onEditStyle () {
			this.$list.style.backgroundColor = '#' + Math.floor(Math.random() * 0xffffff).toString(16);
		}
	},

	mounted () {
		if(!('MutationObserver' in window)) {
  			this.errorMsg = '您的浏览器不支持 MutationObserver API';
  			return;
		}

		this.$list = document.querySelector('.js-list');

		let config = {
			attributes: true, 
			childList: true, 
			characterData: true,
			subtree: true
		};
		let observer = new MutationObserver(this.observerCallBack);
		observer.observe(this.$list, config);
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
		position: relative;
		width: 48%;
		float: left;
		border: 1px solid #b2bec3;
		box-sizing: border-box;
	}
	.mutation-wrapper .editBox .list {
		background-color: #2980b9;
	}
	.mutation-wrapper .editBox .list .item {
		padding-left: 10px;
		outline: none;
	}
	.mutation-wrapper .editBox .item:not(:last-child) {
		border-bottom: 1px solid rgba(0, 0, 0, .2);
	}
	.mutation-wrapper .editBox .operate {
		position: absolute;
		bottom: 0;
		width: 100%;
		margin-top: 20px;
		overflow: hidden;
	}
	.mutation-wrapper .editBox .operate input {
		display: inline-block;
		width: 100%;
		height: 30px;
		line-height: 30px;
		outline: none;
	}
	.mutation-wrapper .editBox .listWrapper,
	.mutation-wrapper .logBox .listWrapper {
		height: 250px;
		overflow: auto;
	}
	.mutation-wrapper .logBox .listWrapper {
		height: 285px;
	}
	.mutation-wrapper .editBox .list .item .text {
		display: inline-block;
		width: 90%;
		color: #fff;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		vertical-align: middle;
	}
	.mutation-wrapper .editBox .list .item .btn-del {
		display: inline-block;
		vertical-align: middle;
		cursor: pointer;
		color: #fff;
	}
	.mutation-wrapper .editBox .btns {
		padding: 5px 10px;
		border-bottom: 1px solid rgba(0, 0, 0, .2);
	}
	.mutation-wrapper .editBox .btns button {
		padding: 2px 20px;
		margin-left: 10px;
	}

	.mutation-wrapper .logBox {
		position: relative;
		margin-left: 2px;
		background-color: #34495e;
		color: #ecf0f1;
		font-size: 12px;
		max-height: 300px;
	}
	.mutation-wrapper .logBox .item {
		padding-left: 10px;
	}
	.mutation-wrapper .logBox .item:not(:last-child) {
		border-bottom: 1px solid rgba(255, 255, 255, .2);
	}
	.mutation-wrapper .logBox button {
		position: absolute;
		bottom: 0;
		width: 100%;
		display: block;
		height: 30px;
		line-height: 30px;
	}
</style>