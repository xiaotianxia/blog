<template>
    <div class="wrapper">
        <div ref="scrollWrapper" class="scroll-wrapper">
            <div class="scroll-content"></div>
        </div>
        <div class="scroll-operation">
            <el-form :model="queryParams" label-width="100px" label-position="left">
	            <el-form-item label="top:">
	                <el-input-number v-model="queryParams.top" size="mini" :step="10" controls-position="right"></el-input-number>
	            </el-form-item>

                <el-form-item label="left:">
	                <el-input-number v-model="queryParams.left" size="mini" :step="10" controls-position="right"></el-input-number>
	            </el-form-item>

                <el-form-item label="smooth:">
	                <el-checkbox v-model="queryParams.smooth">smooth</el-checkbox>
	            </el-form-item>

                <el-form-item label-width="0">
	                <el-button @click="onScrollTo" type="primary" size="mini">scroll({top: {{queryParams.top}}, left: {{queryParams.left}}, behavior: '{{queryParams.smooth ? 'smooth' : 'auto'}}'})</el-button>
	            </el-form-item>

                <el-form-item label-width="0">
	                <el-button @click="onScroll" type="primary" size="mini">scrollTo({top: {{queryParams.top}}, left: {{queryParams.left}}, behavior: '{{queryParams.smooth ? 'smooth' : 'auto'}}'})</el-button>
	            </el-form-item>

                <el-form-item label-width="0">
	                <el-button @click="onScrollBy" type="primary" size="mini">scrollBy({top: {{queryParams.top}}, left: {{queryParams.left}}, behavior: '{{queryParams.smooth ? 'smooth' : 'auto'}}'})</el-button>
	            </el-form-item>
	        </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            queryParams: {
                top: 100,
                left: 100,
                smooth: false
            }
        }
    },

    methods: {
        onScrollTo () {
            this.scrollWrapper.scrollTo({
                top: this.queryParams.top,
                left: this.queryParams.left,
                behavior: this.queryParams.smooth ? 'smooth' : 'auto'
            });
        },

        onScroll () {
            this.scrollWrapper.scroll({
                top: this.queryParams.top,
                left: this.queryParams.left,
                behavior: this.queryParams.smooth ? 'smooth' : 'auto'
            });
        },

        onScrollBy () {
            this.scrollWrapper.scrollBy({
                top: this.queryParams.top,
                left: this.queryParams.left,
                behavior: this.queryParams.smooth ? 'smooth' : 'auto'
            });
        }
    },

    mounted () {
        this.scrollWrapper = this.$refs.scrollWrapper;
    }
}
</script>

<style scoped>
    .wrapper {
        margin: 0 auto;
    }

    .scroll-wrapper {
        display: inline-block;
        width: 300px;
        height: 300px;
        overflow: auto;
        overscroll-behavior: contain;
    }

    .scroll-operation {
        display: inline-block;
        vertical-align: top;
    }

    .scroll-content {
        width: 1640px;
        height: 1092px;
        background-image: url('../../public/images/jiaolou.jpg');
        background-size: 100%;
    }

    .el-form .el-form-item {
        padding-left: 20px;
        margin-bottom: 4px;
    }
    .el-button--primary {
        width: 100%;
    }
</style>

