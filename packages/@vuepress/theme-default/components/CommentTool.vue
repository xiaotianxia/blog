<template>
    <div class="comment-tool">
        <div id="gitalk-container"></div>
    </div>
</template>

<script>
import Gitalk from 'gitalk';
export default {
    mounted () {
        let gitalk = new Gitalk({
            clientID: '9edaa9de02dd59b49389',
            clientSecret: '1a0807fe475170542e089e0bb66190bdafa55844',
            repo: 'blog',
            owner: 'xiaotianxia',
            admin: ['xiaotianxia'],
            id: location.pathname,      // Ensure uniqueness and length less than 50
            distractionFreeMode: false  // Facebook-like distraction free mode
            });

        gitalk.render('gitalk-container');
    }
}
</script>

<style lang="stylus">
    .comment-tool
        max-width 740px
        margin 0 auto
        padding 2rem 2.5rem
</style>

<style src="gitalk/dist/gitalk.css"></style>