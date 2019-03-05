<template>
    <div class="wrapper">
        <div class="scroll-wrapper">
            <div class="scroll-content">
                <div ref="point" class="point"></div>
            </div>
        </div>
        <div class="scroll-operation">
            <el-form :model="queryParams" label-width="100px" label-position="left">
	            <el-form-item label="block:">
	                <el-select v-model="queryParams.block" size="mini">
                        <el-option :value="'start'" label="start"></el-option>
                        <el-option :value="'end'" label="end"></el-option>
                        <el-option :value="'center'" label="center"></el-option>
                        <el-option :value="'nearest'" label="nearest"></el-option>
                    </el-select>
	            </el-form-item>

                <el-form-item label="inline:">
	                <el-select v-model="queryParams.inline" size="mini">
                        <el-option :value="'start'" label="start"></el-option>
                        <el-option :value="'end'" label="end"></el-option>
                        <el-option :value="'center'" label="center"></el-option>
                        <el-option :value="'nearest'" label="nearest"></el-option>
                    </el-select>
	            </el-form-item>

                <el-form-item label="smooth:">
	                <el-checkbox v-model="queryParams.smooth">smooth</el-checkbox>
	            </el-form-item>

                <el-form-item label-width="0">
	                <el-button @click="onScrollIntoView" type="primary" size="mini">
                        scrollIntoView({block: '{{queryParams.block}}', inline: '{{queryParams.inline}}', behavior: '{{queryParams.smooth ? 'smooth' : 'auto'}}'})
                    </el-button>
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
                block: 'center', //竖直方向
                inline: 'center', //水平方向
                smooth: false
            }
        }
    },

    methods: {
        onScrollIntoView () {
            this.point.scrollIntoView({
                block: this.queryParams.block,
                inline: this.queryParams.inline,
                behavior: this.queryParams.smooth ? 'smooth' : 'auto'
            });
        }
    },

    mounted () {
        this.point = this.$refs.point;
    }
}
</script>

<style scoped>
    .wrapper {
        display: flex;
        margin: 10px auto;
    }

    .scroll-wrapper,
    .scroll-operation {
        flex-basis: 48%;
    }

    .scroll-wrapper {
        height: 300px;
        overflow: auto;
        overscroll-behavior: contain;
    }

    .scroll-operation {
        vertical-align: top;
    }

    .scroll-content {
        position: relative;
        width: 1600px;
        height: 1600px;
        background-image: linear-gradient(135deg, #e67e22, #2980b9);
    }

    .el-form .el-form-item {
        padding-left: 20px;
        margin-bottom: 4px;
    }
    .el-button--primary {
        width: 100%;
    }
    .point {
        position: absolute;
        left: 40%;
        top: 30%;
        width: 30px;
        height: 20px;
        background-color: #e74c3c;
    }
</style>

