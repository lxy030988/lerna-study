const yargs = require('yargs/yargs')
function lernaCLI() {
  const cli = yargs()
  const globalOptions = {
    logLevel: {
      type: 'string',
      describe: '日志的级别',
      defaultDescription: 'info',
      alias: 'L',
    },
  }
  const globalKeys = Object.keys(globalOptions).concat(['help', 'version'])
  //lerna create demo --logLevel=info
  return cli
    .options(globalOptions)
    .group(globalKeys, 'Global Options:')
    .usage(`Usage: $0 <command> [options]`)
    .demandCommand(1, '至少需要一个命令')
    .strict() //true严格模式，输入的命令不认识，会报错ERR! lerna Unknown command "xx"
    .recommendCommands() //Did you mean list? 如果你写错了，它会帮你提建议
    .fail((msg, error) => {
      //这里可以个性化你的错误展示
      console.error(msg)
      console.error(error)
    })
    .alias('h', 'help')
    .alias('v', 'version')
    .epilogue(` When a command fails, all logs are written to lerna-debug.log in the current working directory`)
}

module.exports = lernaCLI
