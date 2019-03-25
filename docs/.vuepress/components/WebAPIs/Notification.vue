<template>
	<div class="notification-wrapper">
		<el-form v-model="queryParams" label-width="90px" label-position="left">
            <el-form-item label="title:">
                <el-input v-model="queryParams.title" placeholder="题目..." clearable size="small"></el-input>
            </el-form-item>

            <el-form-item label="body:">
            	<el-input v-model="queryParams.body" type="textarea" :autosize="{ minRows: 2, maxRows: 6}" placeholder="内容..."></el-input>
                
            </el-form-item>

            <el-form-item label="icon:">
                <el-input v-model="queryParams.icon" placeholder="图标" clearable size="small"></el-input>
            </el-form-item>

            <el-form-item label="icon预览:">
                <img :src="queryParams.icon" alt="">
            </el-form-item>

            <el-form-item label="image:">
                <el-input v-model="queryParams.image" placeholder="图片" clearable size="small"></el-input>
            </el-form-item>

            <el-form-item label="image预览:">
                <img :src="queryParams.image" alt="">
            </el-form-item>

            <el-form-item label="sound:">
                <el-input v-model="queryParams.sound" placeholder="音频" clearable size="small"></el-input>
            </el-form-item>

            <el-form-item label="sound预览:">
                <audio :src="queryParams.sound" controls="controls"></audio>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onConfirm" size="small">通知一下~</el-button>
            	<span class="txt-red"> {{msg}}</span> 
            </el-form-item>

            <el-form-item>
                <span>携带data:{{time}}</span>
            </el-form-item>
        </el-form>
	</div>
</template>

<script>
export default {
	data () {
		return {
			queryParams: {
				title: '一条新通知',
				body: '12345哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈12345',
				icon: 'https://denzel.netlify.com/hero.png',
				badge: 'https://denzel.netlify.com/hero.png',
				image: 'https://denzel.netlify.com/hero.png',
				// silent: true,
				sound: 'http://poijlzkaq.bkt.clouddn.com/blogsmile.wav',
				dir: 'rtl',
				data: {
					t: new Date()
				},
				vibrate: []
            },
            time: '',
            msg: ''
		}
	},

	methods: {
		onConfirm () {
			if (!('Notification' in window)) {
			    alert('您的浏览器不支持通知API');
			}

			this.msg = '获取通知权限：' + Notification.permission;
			//检查用户是否同意接受通知
			//用户已同意
			if (Notification.permission == "granted") {
	            this.newNotification();
            //若没拒绝获取权限
	        } else if (Notification.permission != "denied") {
	        	//向用户获取权限
	            Notification.requestPermission(function (permission) {
	              	this.newNotification();
	            });
	        }
		},

		newNotification () {
			let notification = new Notification(this.queryParams.title, {
				...this.queryParams
			});

			console.log(notification);

			//事件绑定
			notification.addEventListener('show', e => {
				console.log(e);
				this.$message.info('通知出现');
				this.time = notification.data.t.toLocaleTimeString();
			});


			notification.addEventListener('click', e => {
				console.log(e);
				this.$message.info('你点击了通知');
				// notification.close();
			});

			notification.addEventListener('close', e => {
				console.log(e);
				this.$message.info('你关闭了通知');
			});
		}
	}
}
</script>

<style scoped>
	.notification-wrapper {
		margin-top: 20px;
		padding: 10px;
		border: 1px solid #ccc;
	}
</style>