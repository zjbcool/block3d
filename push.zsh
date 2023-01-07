#!/bin/zsh

# 确保脚本抛出遇到的错误
set -e
# 添加远程仓库
# git remote add origin https://github.com/zjbcool/block3d.git
# 删除本地缓存
# git rm -r --cached .
# 创建tag
# git tag v1.0.0-beta.2
# 提交tag
# git push origin v1.0.0-beta.2
# 删除本地tag
# git tag -d 标签
# 删除远程tag
# git push origin :refs/tags/标签
# 提交
# git rm -r --cached .
git add -A
# git tag v1.0.0-beta.10
git commit -m 'v1.0.0-beta.12'
git push -f https://github.com/zjbcool/block3d.git master

