<template>
	<div class="word-preview-wrapper">
		<RemoteScript :src="'https://cdn.jsdelivr.net/npm/mammoth@1.4.8/mammoth.browser.min.js'"/>
		<ul>
            <li>
                <a href="../../../static/word文档1.docx">word文档1</a>
                <el-button @click.prevent="onPreview('../../../static/word文档1.docx')">预览</el-button>
            </li>
        </ul>
		
        <el-dialog
            title="提示"
            :visible.sync="show"
            fullscreen>
            <div ref="word-preview-content"></div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="show = false">取 消</el-button>
                <el-button type="primary" @click="show = false">确 定</el-button>
            </span>
        </el-dialog>
	</div>
</template>

<script>

export default {
	data () {
		return {
			show: false
		}
	},

	methods: {
		onPreview (url) {
            const req = new XMLHttpRequest();
            req.withCredentials = true; 
            req.open('GET', url, true);
            req.responseType = 'blob';

            req.onload = () => {
                const data = req.response;
                var reader = new FileReader();
                reader.onloadend = event => {
                    var arrayBuffer = reader.result;
                    mammoth.convertToHtml({arrayBuffer: arrayBuffer}).then(resultObject => {
                        this.show = true;
                        this.$refs['word-preview-content'].innerHTML = resultObject.value;
                    });
                };
                reader.readAsArrayBuffer(data);
            };
            req.send();
        }
	}
}
</script>

<style>
	
</style>