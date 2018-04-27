<template>
    <div class="cp-wrapper">
        <!-- <p>
            <el-button type="primary" @click="onPreview" size="small">预览</el-button>
        </p>
        <div class="cp-title-wrapper">
            <h2 class="title">编辑代码：</h2>
            <h2 class="title">查看效果：</h2>
        </div>
        <div class="cp-code-wrapper">
            <div class="code">
                <textarea>{{code}}</textarea>
            </div>
            <div class="preview-container">
                <div class="preview">
                    <iframe :src="url" ></iframe>
                </div>
            </div>
        </div> -->
        <iframe src="https://xiaotianxia.github.io/demos-2017/%E4%BB%A3%E7%A0%81%E9%A2%84%E8%A7%88/test.html" frameborder="0"></iframe>
    </div>
</template>

<script>
export default {
    // data () {
    //     return {
    //         code: '',
    //         url: ''
    //     }
    // },

    // methods: {
    //     onPreview () {
    //         let blob = new Blob([this.code], {  //注意一定要写type
    //                 'type': 'text/html'
    //             });
    //         this.url = URL.createObjectURL(blob); //生成url
    //     }
    // }
}
</script>

<style>
    .cp-wrapper {
        width: 100%;
        height: 500px;
    }
    iframe {
        width: 100%;
        height: 100%;
    }
    /*.cp-title-wrapper,
    .cp-code-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    h2.title {
        width: 50%;
        color: red;
        padding: 0 20px;
        font-size: 14px;
        border: none;
    }
    .cp-code-wrapper {
        width: 100%;
        height: 405px;
    }
    .cp-btn {
        display: inline-block;
        padding: 5px 30px;
        background-color: red;
        color: #fff;
        text-decoration: none!important;
    }
    .cp-code-wrapper .code,
    .preview-container {
        width: 50%;
        height: 100%;
        overflow: hidden;
        border: 1px solid #ccc;
    }
    .cp-code-wrapper .code {
        margin-right: 10px;
    }
    .cp-code-wrapper .code textarea {
        width: 100%;
        height: 100%;
        white-space: pre;
        resize: none;
        border: none;
        outline: none;
    }
    .preview-container .preview {
        width: 100%;
        height: 100%;
    }
    .preview-container iframe {
        display: block;
        border: none;
        outline: none;
        width: 100%;
        height: 100%;
    }*/
</style>