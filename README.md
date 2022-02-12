<!--
 * @Description: 
 * @Autor: Zhongyu
 * @Date: 2021-08-30 09:14:41
 * @LastEditors: Zhongyu
 * @LastEditTime: 2021-08-31 01:12:44
-->
# water-info-system-pcweb

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Git 推送命令
### 1、添加文件命令
```
git add .
```
### 2、提交命令
  理由写这次提交了什么, 尽量10个字左右描述
```
git commit -m '提交理由'
```
### 3、关联远程库
  已经关联的可以不关联, 直接拉取的代码不需要关联
```
git remote add origin 你的远程库地址
```

### 4、获取远程库与本地同步合并
  如果远程库不为空必须做这一步, 否则后面的提交会失败。直接拉取的代码以是最新的
```
 git remote add origin 你的远程库地址
```

### 5、该项目属于多人开发，请创建自己的分支且管理到远程的develop分支上
  dev 是自己名字缩写+dev（例如：zydev）
  如果这一步已执行，请跳过
```
git checkout -b dev origin/develop 
```

### 6、每次推送到远程之前请先拉取远程的develop分支
  该步骤是同步别人已提交的代码，执行该步骤时请检查本地代码是否拥有冲突，如果拥有解决了在执行下一步
```
git pull --rebase origin develop
```

### 6、将代码推送到远程的自己的分支
  执行该步骤请确保本地代码已经全部提交且没有冲突
```
git push -u origin dev
```

### 7、在gitee上合并代码
