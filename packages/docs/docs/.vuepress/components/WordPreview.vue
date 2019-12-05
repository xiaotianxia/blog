<template>
	<div class="word-preview-wrapper">
		<RemoteScript :src="'https://cdn.jsdelivr.net/npm/mammoth@1.4.8/mammoth.browser.min.js'"/>
		<ul>
            <li>
                服务器的文件：
                <a href="../../static/word文档1.docx">word文档1</a>
                <el-button @click.prevent="onPreview('../../static/word文档1.docx')" :loading="loading">预览</el-button>
            </li>

            <li>
                本地上传：
                <input type="file" accept=".doc,.docx" @change="onFileChange">
            </li>
        </ul>
		
        <el-dialog
            title="预览"
            :visible.sync="show"
            top="0"
            width="80%">
            <div ref="wordPreviewContent" class="word-preview-content"></div>
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
            show: false,
            loading: false
		}
	},

	methods: {
		onPreview (url) {
            this.loading = true;
            const req = new XMLHttpRequest();
            req.withCredentials = true; 
            req.open('GET', url, true);
            req.responseType = 'blob';

            req.onload = () => {
                this.show = true;
                const file = req.response;
                this.readFile(file);
            };
            req.send();
        },

        onFileChange (e) {
            let files = e.target.files || [];
            if (!files.length) return;
            let file = files[0];

            this.readFile(file);
        },

        readFile (file) {
            let reader = new FileReader();
            reader.onloadend = event => {
                let arrayBuffer = reader.result;
                mammoth.convertToHtml({arrayBuffer: arrayBuffer}).then(resultObject => {
                    this.show = true;
                    this.loading = false;
                    this.$nextTick(() => {
                        this.$refs.wordPreviewContent.innerHTML = resultObject.value;
                    });
                })
            };
            reader.readAsArrayBuffer(file);
        }
	}
}
</script> 