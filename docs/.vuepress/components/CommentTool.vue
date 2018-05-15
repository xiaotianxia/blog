<template>
	<div>
		<hr>
		<p>感谢指正</p>
		<hr>
		<div id="comment-container"></div>
	</div>
</template>

<script>
export default {
	mounted () {
		let id = window.location.pathname,
			gitment = new Gitment({
			    id: id,
			    owner: 'xiaotianxia',
			    repo: 'blog',
			    oauth: {
			      	client_id: 'a57e9245872c968a247c',
			      	client_secret: '537db1f2fe58008a9dabfbb7b1cb1a33e02da462',
			    }
			  })
	  	gitment.render('comment-container')
	}
}
</script>

<style>
	hr:first-child {
		margin-top: 50px;
	}
	hr + p {
		text-align: center;
	}
</style>