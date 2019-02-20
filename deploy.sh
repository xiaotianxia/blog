#!/usr/bin/env sh
​
# abort on errors
set -e
​
# build
npm run build
​
# navigate into the build output directory
cd ./vuepress
​
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
​
git init
git add -A
git commit -m 'deploy'
​
# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:xiaotianxia/xiaotianxia.github.io.git master
# git push -f https://aed676b581be15e628d7adca56940516846c47150@github.com/xiaotianxia/xiaotianxia.github.io.git master
​
# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:xiaotianxia/blog.git master:gh-pages
​
cd -