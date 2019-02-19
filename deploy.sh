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
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
git push -f https://5d1ec2272657b88a00d4069dde21ec4b4e4de5c0@github.com/xiaotianxia/xiaotianxia.github.io.git master
​
# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:xiaotianxia/blog.git master:gh-pages
​
cd -