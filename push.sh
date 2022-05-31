#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 提交
git add -A
git commit -m '更新'
git push -f https://github.com/zjbcool/block3d.git master
