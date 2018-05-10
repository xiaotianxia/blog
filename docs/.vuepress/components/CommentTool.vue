<template>
	<div id="comment-container"></div>
</template>

<script>
export default {
	mounted () {
		let title = document.location
		let gitment = new Gitment({
		    id: title,
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