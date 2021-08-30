# lerna

## lerna

- lerna init 初始化项目

```js
lerna init
lerna notice cli v4.0.0
lerna info Initializing Git repository 初始化git仓库
lerna info Creating package.json 创建
lerna info Creating lerna.json 创建
lerna info Creating packages directory 创建packages目录
lerna success Initialized Lerna files
```

- lerna create <name> 创建一个 package
- lerna add 安装依赖
  - lerna add yargs package/cli 安装到指定目录下(不选则安装到所有包下面)
- lerna link 链接依赖 在 lerna 包内软链接其他 lerna 包
- lerna exec 执行 shell 脚本
  - lerna exec jest
  - lerna exec --scope @lerna2/cli jest
- lerna run 执行 npm 命令 lerna run xxx(命令名称) 在每个包下执行命令
  - lerna run xxx --scope xxx(包名@lerna2/create) 在单个包下执行命令
- lerna clean 清空依赖
- lerna bootstrap 重新安装依赖
- lerna version 修改版本号
- lerna changed 查看上一个版本以来所有的变更
- lerna diff 查看 diff
- lerna publish 发布项目
- lerna ls 查看当前项目下有多少个包

## 创建 npm 私服

- [verdaccios](https://verdaccio.org/) 是一个简单、零配置的本地私有化 npm 仓库
- npm install verdaccio -g
-

## lerna2

- lerna create lerna2 --registry http://licalhost:4873 (npm 私服地址)
- lerna create @lerna2/cli --registry http://licalhost:4873 (npm 私服地址)
- lerna create @lerna2/init --registry http://licalhost:4873 (npm 私服地址)
- lerna create @lerna2/create --registry http://licalhost:4873 (npm 私服地址)
