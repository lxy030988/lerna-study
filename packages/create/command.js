exports.command = 'create <name>'
exports.describe = '创建一个新的lerna管理的包'
exports.builder = (yargs) => {
  console.log('create builder')
  yargs
    .positional('name', {
      // lerna create xxx
      type: 'string',
      describe: '包名',
    })
    .options({
      // lerna crate xxx --registry=http://npm.org
      registry: {
        group: 'Command Groups:',
        describe: '配置包的发布的仓库地址',
        type: 'string',
      },
    })
}

exports.handler = (argv) => {
  console.log('执行init命令', argv)
  return require('.')(argv)
}
