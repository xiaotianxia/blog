<template>
	<div class="columns-wrapper">
		<div class="content-wrapper">
			<div class="col-content" :style="style">
				My father was a self-taught mandolin player. He was one of the best string instrument players in our town. He could not read music, but if he heard a tune a few times, he could play it. When he was younger, <div v-if="showDiv" :style="divStyle" style="text-align: center;background-color: #e74c3c;color: #fff;" class="span">我是添加的div</div>he was a member of a small country music band.
				They would play at local dances and on a few occasions would play for the local radio station. 
				<img src="https://denzel.netlify.com/hero.gif" alt="">
				He often told us how he had auditioned and earned a position in a band that featured Patsy Cline as their lead singer. He told the family that after he was hired he never went back. Dad was a very religious man. He stated that there was a lot of drinking and cursing the day of his audition and he did not want to be around that type of environment.
			</div>

			<hr>

			<div class="col-content" :style="style">
				我与父亲不相见已二年余了，我最不能忘记的是他的背影。那年冬天，祖母死了，父亲的差使也交卸了，正是祸不单行的日子，我从北京到徐州，打算跟着父亲奔丧回家。到徐州见着父亲，看见满院狼藉的东西，又想起祖母，不禁簌簌地流下眼泪。父亲说，“事已如此，不必难过，好在天无绝人之路！”
				<img src="https://denzel.netlify.com/hero.gif" alt="">
				回家变卖典质，父亲还了亏空；又借钱办了丧事。<div v-if="showDiv" :style="divStyle" style="text-align: center;background-color: #e74c3c;color: #fff;" class="span">我是添加的div</div>这些日子，家中光景很是惨淡，一半为了丧事，一半为了父亲赋闲。丧事完毕，父亲要到南京谋事，我也要回北京念书，我们便同行。
				到南京时，有朋友约去游逛，勾留了一日；第二日上午便须渡江到浦口，下午上车北去。父亲因为事忙，本已说定不送我，叫旅馆里一个熟识的茶房陪我同去。他再三嘱咐茶房，甚是仔细。但他终于不放心，怕茶房不妥帖；颇踌躇了一会。其实我那年已二十岁，北京已来往过两三次，是没有甚么要紧的了。他踌躇了一会，终于决定还是自己送我去。我两三回劝他不必去；他只说，“不要紧，他们去不好！”
			</div>
		</div>
		<hr>
		<div class="operate-wrapper">
			<el-form v-model="queryParams" label-width="180px" label-position="left">
				<el-form-item label="column-width(px):">
	                <el-slider v-model="queryParams.width" :min="0" :max="400" :step="10" show-input></el-slider>
	            </el-form-item>

	            <el-form-item label="column-count:">
	                <el-slider v-model="queryParams.count" :min="0" :max="10" :step="1" show-input></el-slider>
	            </el-form-item>

	            <el-form-item label="column-gap(px):">
	                <el-slider v-model="queryParams.gap" :min="0" :max="30" :step="1" show-input></el-slider>
	            </el-form-item>

	            <el-form-item label="column-rule-width(px):">
	                <el-slider v-model="queryParams.ruleWidth" :min="0" :max="30" :step="1" show-input></el-slider>
	            </el-form-item>

	            <el-form-item label="column-rule-style:">
	                <el-select v-model="queryParams.ruleStyle">
	                   	<el-option value="solid" label="solid"></el-option>
	                   	<el-option value="dotted" label="dotted"></el-option>
	                   	<el-option value="dashed" label="dashed"></el-option>
	                   	<el-option value="double" label="double"></el-option>
	                   	<el-option value="groove" label="groove"></el-option>
	                </el-select>
	            </el-form-item>

	            <el-form-item label="column-rule-color:">
	                <el-color-picker v-model="queryParams.ruleColor" show-alpha></el-color-picker>
	            </el-form-item>

	            <el-form-item label="column-rule:">
	                <span>{{queryParams.ruleWidth}}px {{queryParams.ruleStyle}} {{queryParams.ruleColor}}</span>
	            </el-form-item>


	            <el-form-item label="column-rule-color:">
	                <el-checkbox v-model="showDiv">添加一个div</el-checkbox>
	            </el-form-item>

	            <el-form-item v-if="showDiv" label="div的column-span:">
	                <el-select v-model="queryParams.span">
	                   	<el-option value="all" label="all"></el-option>
	                   	<el-option value="none" label="none"></el-option>
	                </el-select>
	            </el-form-item>
	        </el-form>
	        <pre class="language-css">
				.content {{style}}

				.span {{divStyle}}
			</pre>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			queryParams: {
				width: 100,
				count: 3,
				gap: 10,
                ruleWidth: 3,
                ruleStyle: 'solid',
                ruleColor: '#000',
                span: 'all'
            },

            showDiv: false,
		}
	},

	computed: {
		style () {
			return {
				'column-width': this.queryParams.width + 'px',
				'column-count': this.queryParams.count,
				'column-gap': this.queryParams.gap + 'px',
				'column-rule-width': this.queryParams.ruleWidth + 'px',
				'column-rule-style': this.queryParams.ruleStyle,
				'column-rule-color': this.queryParams.ruleColor
			}
		},

		divStyle () {
			return {
				'column-span': this.queryParams.span
			}
		}
	}
}
</script>

<style scoped>
	.columns-wrapper {
		margin: 20px 0;
		padding: 10px;
		border: 1px solid #ccc;
	}
	.col-content {
		margin-top: 20px;
	  
	 	word-wrap: break-word;
	  	overflow-wrap: break-word;
	  	hyphens: auto;
	}
	.col-content img {
		column-span: all;
		/*width: 100%;*/
	}
	pre.language-css {
		color: #fff;
		tab-size: 0;
	}
</style>