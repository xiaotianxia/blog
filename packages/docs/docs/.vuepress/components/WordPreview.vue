<template>
	<div class="word-preview-wrapper">
		<RemoteScript :src="'https://cdn.jsdelivr.net/npm/mammoth@1.4.8/mammoth.browser.min.js'"/>
		<ul>
            <li>
                <a href="https://github.com/xiaotianxia/blog/blob/gh-pages/static/word%E6%96%87%E6%A1%A31.docx" @click.prevent="onPreview">word文档1</a>
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
		onPreview (e) {
            const { innerText, href } = e.target;

            const req = new XMLHttpRequest();
            req.withCredentials = true; 
            req.open('GET', href, true);
            req.responseType = 'blob';

            req.onload = () => {
                const data = req.response;
                var reader = new FileReader();
                reader.onloadend = event => {
                    var arrayBuffer = reader.result;
                    mammoth.convertToHtml({arrayBuffer: arrayBuffer}).then(resultObject => {
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