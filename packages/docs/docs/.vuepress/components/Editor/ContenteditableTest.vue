<template>
	<div class="editable-wrapper">
		<div class="options">
			<el-form ref="form" :model="data">
				<el-form-item label="contenteditable:">
					<el-select v-model="data.type" placeholder="请选择" size="small" @change="onChange">
						<el-option label="空" value=""></el-option>
						<el-option label="events" value="events"></el-option>
						<el-option label="caret" value="caret"></el-option>
						<el-option label="typing" value="typing"></el-option>
						<el-option label="plaintext-only" value="plaintext-only"></el-option>
						<el-option label="true" value="true"></el-option>
						<el-option label="false" value="false"></el-option>
					</el-select>
				</el-form-item>
			</el-form>
		</div>	

		<div class="textarea" v-html="editorHTML"></div>	
	</div>
</template>

<script>
export default {
	data () {
		return {
			data: {
				type: ''
			},
			editorHTML: ''
		}
	},

	methods: {
		onChange (e) {
			this.editorHTML = '<div class="editor" placeholder="输入或者粘贴写什么..." contenteditable="' + (e ? e : '') + '"></div>';
		}
	},

	mounted () {
		this.onChange();
	}
}
</script>

<style>
	.editable-wrapper {
		margin-top: 10px;
	}
	.editable-wrapper .textarea {
		border: 1px solid #ccc;
		height: 200px;
		overflow: auto;
	}
	.editable-wrapper .textarea .editor {
		height: 100%;
		padding: 5px;
		box-sizing: border-box;
	}
	.editable-wrapper .textarea .editor:empty:before {
		content: attr(placeholder);
		display: inline-block;
		color: #ccc;
	}
</style>